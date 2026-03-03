import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import './ProfilePage.css';

import ProfileBanner from './ProfileBanner';
import TopPicksRow from './TopPicksRow';
import ContinueWatching from './ContinueWatching';
type ProfileType = 'Recruiter' | 'Founder' | 'Stalker' | 'Adventurer';

// Maps URL param (lowercase) to the ProfileType key used in component configs.
// "adventurer" → "Adventure" handles the naming difference between the browse
// profile card label and the internal config key.
const profileUrlMap: Record<string, ProfileType> = {
  recruiter: 'Recruiter',
  founder: 'Founder',
  stalker: 'Stalker',
  adventurer: 'Adventurer',
};

const ProfilePage: React.FC = () => {
  const location = useLocation();
  const backgroundGif = location.state?.backgroundGif || "https://media.giphy.com/media/xT9IgzoKnwFNmISR8I/giphy.gif"; // Default GIF
  const { profileName } = useParams<{ profileName: string }>();

  const profile: ProfileType = profileUrlMap[profileName?.toLowerCase() ?? ''] ?? 'Recruiter';
  return (
    <>
      <div
        className="profile-page"
        style={{ backgroundImage: `url(${backgroundGif})` }}
      >
        <ProfileBanner
        />
      </div>
      <TopPicksRow profile={profile} />
      <ContinueWatching profile={profile} />
    </>
  );
};

export default ProfilePage;
