import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import Loader from '../../component/Loader/Loader';

const AuthCallback = () => {
  const { isLoading, error, user } = useAuth0();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && user) {
      navigate('/dashboard');
    }
  }, [isLoading, user, navigate]);

  if (isLoading) return <p className='flex justify-center items-center'><Loader/></p>;
  if (error) return <p>Error: {error.message}</p>;

  return null;
};

export default AuthCallback;
