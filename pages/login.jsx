import React, { useState } from 'react';

function LoginPage() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle login logic here
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center h-screen">
      <label className="text-gray-700">
        Username:
        <input type="text" value={username} onChange={handleUsernameChange} className="border rounded-md p-2" />
      </label>
      <br />
      <label className="text-gray-700">
        Password:
        <input type="password" value={password} onChange={handlePasswordChange} className="border rounded-md p-2" />
      </label>
      <br />
      <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Login
      </button>
    </form>
  );
}

export default LoginPage;
