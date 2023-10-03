import React, { useState } from 'react';
import { Modal, TextInput, Button } from '@mantine/core';

const LoginModal = ({ opened, onClose, onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  // Sample hardcoded username and password
  const sampleUsername = 'admin';
  const samplePassword = 'admin123';

  const handleLogin = () => {
    // Check if the entered username and password match the hardcoded credentials
    if (username === sampleUsername && password === samplePassword) {
      localStorage.setItem('username', username);
      onLogin();
      onClose();
    } else {
      alert('Invalid credentials');  // Notify the user that the entered credentials are invalid
    }
  };

  return (
    <Modal opened={opened} onClose={onClose} title="Login" size="xs">
      <TextInput
        label="Username"
        placeholder="Enter your username"
        value={username}
        onChange={(event) => setUsername(event.currentTarget.value)}
      />
      <TextInput
        label="Password"
        type="password"
        placeholder="Enter your password"
        value={password}
        onChange={(event) => setPassword(event.currentTarget.value)}
        className="mt-4"
      />
      <Button 
        mt="xl"
        fullWidth={true}
        variant="outline"
        type="submit"
        onClick={handleLogin} 
      >
        Login
      </Button>
    </Modal>
  );
};

export default LoginModal;
