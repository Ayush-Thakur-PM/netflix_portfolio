// getDatoCmsToken.ts
// Returns the DatoCMS API token for the current hostname.
// When no token is set (e.g. default/localhost), the app uses static resume data instead.

export const getDatoCmsToken = (): string => {
  if (typeof window === 'undefined') return process.env.REACT_APP_DATOCMS_TOKEN ?? '';
  const hostname = window.location.hostname;

  switch (hostname) {
    case 'ror.sumanthsamala.com':
    case 'sumanthsamala.com':
    case 'ror.localhost':
    case 'java.localhost':
      return process.env.REACT_APP_DATOCMS_ROR_TOKEN ?? '';

    case 'java.sumanthsamala.com':
      return process.env.REACT_APP_DATOCMS_JAVA_TOKEN ?? '';

    case 'frontend.sumanthsamala.com':
    case 'frontend.localhost':
      return process.env.REACT_APP_DATOCMS_FRONTEND_TOKEN ?? '';

    case 'node.sumanthsamala.com':
    case 'node.localhost':
      return process.env.REACT_APP_DATOCMS_NODE_TOKEN ?? '';

    case 'localhost':
    default:
      // Use single token for this portfolio or empty to fall back to static data
      return process.env.REACT_APP_DATOCMS_TOKEN ?? '';
  }
};
