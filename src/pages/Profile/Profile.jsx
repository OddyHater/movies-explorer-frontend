import React, { useContext } from 'react';

import './profile.css';

import Header from '../../components/Header/Header';
import ProfileForm from '../../components/ProfileForm/ProfileForm';
import { UserContext } from '../../contexts/UserContext';

const Profile = () => {
  const user = useContext(UserContext);

  return (
    <div className='profile'>
      <Header isOnMain={false} />
      <ProfileForm userData={user} />
    </div>
  );
};

export default Profile;