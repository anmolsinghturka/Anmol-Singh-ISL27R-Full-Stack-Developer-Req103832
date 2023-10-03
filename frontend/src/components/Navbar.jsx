import React, { useState } from 'react';
import Logo from '../assets/logo.png';
import { Button, Group } from '@mantine/core';
import LoginModal from './modals/LoginModal'; 

const Navbar = () => {
  const [isLoginModalOpened, setLoginModalOpened] = useState(false);
  const [isLoggedIn, setLoggedIn] = useState(!!localStorage.getItem('username'));

  const openLoginModal = () => setLoginModalOpened(true);
  const closeLoginModal = () => setLoginModalOpened(false);

  const handleLogin = () => {
    setLoggedIn(true);
  };

  const handleLogout = () => {
    localStorage.removeItem('username');
    setLoggedIn(false);
  };

  return (
    <nav className="flex h-20 w-full items-center border-b-2 border-yellow-500 bg-blue-500">
      <img className="ml-8 h-full" alt="logo" src={Logo} />
      <p className="ml-5 text-xl text-white flex-grow">
        CITZ-CD CRM Application Developed by Anmol Singh
      </p>  

      {isLoggedIn ? (
        <Button variant="outline" color="yellow" size="sm" onClick={handleLogout} className="mr-8">
          Logout
        </Button>
      ) : (
        <Group spacing="md" className="mr-8">
          <Button variant="outline" color="yellow" size="sm" onClick={openLoginModal}>
            Login
          </Button>
        </Group>
      )}

      <LoginModal opened={isLoginModalOpened} onClose={closeLoginModal} onLogin={handleLogin} />
    </nav>
  );
};

export default Navbar;
