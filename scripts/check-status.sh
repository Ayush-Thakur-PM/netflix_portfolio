#!/usr/bin/env bash
# scripts/check-status.sh
#
# Check GitHub Actions CI status and Vercel deployment status for this project.
#
# Usage:
#   bash scripts/check-status.sh
#   npm run status
#
# Credentials (add to .env.local — already gitignored):
#   VERCEL_TOKEN      Vercel personal access token (vercel.com/account/tokens)
#   VERCEL_PROJECT_ID Vercel project ID (Project > Settings > General)
#   GITHUB_TOKEN      Optional — increases GitHub API rate limit, required for private repos

set -euo pipefail

# ── Load local credentials ───────────────────────────────────────────────────
SCRIPT_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ROOT_DIR="$(dirname "$SCRIPT_DIR")"
ENV_FILE="$ROOT_DIR/.env.local"

if [ -f "$ENV_FILE" ]; then
  set -a
  # shellcheck disable=SC1090
  source "$ENV_FILE"
  set +a
fi

# ── Config ───────────────────────────────────────────────────────────────────
REPO="${GITHUB_REPO:-Ayush-Thakur-PM/netflix_portfolio}"
BRANCH="main"

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
BOLD='\033[1m'
NC='\033[0m'

echo ""
echo -e "  ${BOLD}Portfolio Deployment Status${NC}"
echo    "  ─────────────────────────────────"
echo ""

# ── 1. GitHub Actions ────────────────────────────────────────────────────────
echo -e "  ${BLUE}GitHub Actions${NC}"

GH_API_URL="https://api.github.com/repos/$REPO/actions/runs?branch=$BRANCH&per_page=1"

if command -v gh &>/dev/null; then
  RUN_JSON=$(gh api "repos/$REPO/actions/runs?branch=$BRANCH&per_page=1" 2>/dev/null || echo '{}')
elif [ -n "${GITHUB_TOKEN:-}" ]; then
  RUN_JSON=$(curl -sf -H "Authorization: token $GITHUB_TOKEN" "$GH_API_URL" 2>/dev/null || echo '{}')
else
  RUN_JSON=$(curl -sf "$GH_API_URL" 2>/dev/null || echo '{}')
fi

python3 - "$RUN_JSON" <<'PYEOF'
import sys, json

data = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
runs = data.get('workflow_runs', [])

RED    = '\033[0;31m'
GREEN  = '\033[0;32m'
YELLOW = '\033[1;33m'
NC     = '\033[0m'

if not runs:
    print(f"  Status : {YELLOW}No runs found (workflow may not exist yet){NC}")
else:
    r = runs[0]
    status     = r.get('status', '?')
    conclusion = r.get('conclusion') or status
    url        = r.get('html_url', '')
    updated    = r.get('updated_at', '')[:19].replace('T', ' ')
    name       = r.get('name', '')

    if conclusion == 'success':
        icon = f"{GREEN}PASSED{NC}"
    elif conclusion in ('failure', 'timed_out'):
        icon = f"{RED}FAILED{NC}"
    elif status in ('in_progress', 'queued'):
        icon = f"{YELLOW}RUNNING{NC}"
    else:
        icon = f"{YELLOW}{conclusion}{NC}"

    print(f"  Status : {icon}  ({name})")
    print(f"  URL    : {url}")
    print(f"  At     : {updated} UTC")
PYEOF

echo ""

# ── 2. Vercel Deployment ──────────────────────────────────────────────────────
echo -e "  ${BLUE}Vercel Deployment${NC}"

if [ -z "${VERCEL_TOKEN:-}" ]; then
  echo -e "  Status : ${YELLOW}Skipped — VERCEL_TOKEN not set${NC}"
  echo    "  Add to .env.local:  VERCEL_TOKEN=your_token_here"
  echo    "  Get a token at:     https://vercel.com/account/tokens"
else
  VERCEL_API="https://api.vercel.com/v6/deployments?limit=1&target=production"
  if [ -n "${VERCEL_PROJECT_ID:-}" ]; then
    VERCEL_API="$VERCEL_API&projectId=$VERCEL_PROJECT_ID"
  fi
  if [ -n "${VERCEL_TEAM_ID:-}" ]; then
    VERCEL_API="$VERCEL_API&teamId=$VERCEL_TEAM_ID"
  fi

  DEPLOY_JSON=$(curl -sf \
    -H "Authorization: Bearer $VERCEL_TOKEN" \
    "$VERCEL_API" 2>/dev/null || echo '{}')

  python3 - "$DEPLOY_JSON" <<'PYEOF'
import sys, json

data = json.loads(sys.argv[1]) if len(sys.argv) > 1 else {}
deploys = data.get('deployments', [])

RED    = '\033[0;31m'
GREEN  = '\033[0;32m'
YELLOW = '\033[1;33m'
NC     = '\033[0m'

if not deploys:
    print(f"  Status : {YELLOW}No production deployments found{NC}")
    print( "  (Make sure VERCEL_PROJECT_ID is set in .env.local)")
else:
    d     = deploys[0]
    state = d.get('state', '?')
    url   = 'https://' + d.get('url', '')
    ts_ms = d.get('createdAt', 0)
    import datetime
    ts = datetime.datetime.utcfromtimestamp(ts_ms / 1000).strftime('%Y-%m-%d %H:%M') if ts_ms else '?'

    if state == 'READY':
        icon = f"{GREEN}READY{NC}"
    elif state in ('ERROR', 'CANCELED'):
        icon = f"{RED}{state}{NC}"
    elif state in ('BUILDING', 'QUEUED', 'INITIALIZING'):
        icon = f"{YELLOW}{state}{NC}"
    else:
        icon = f"{YELLOW}{state}{NC}"

    print(f"  Status : {icon}")
    print(f"  URL    : {url}")
    print(f"  At     : {ts} UTC")
PYEOF
fi

echo ""
