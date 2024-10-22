'use client'
import { useState } from 'react';
import Link from 'next/link';

export default function Home() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    
    // Check for hardcoded username and password
    if (username === 'user' && password === 'pass') {
      setIsLoggedIn(true); // Set as logged in if credentials match
    } else {
      alert('Invalid username or password'); // Alert on invalid credentials
    }
  };

  if (!isLoggedIn) {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={handleLogin} className="flex flex-col mb-4">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="mb-2 p-1 border"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-2 p-1 border"
            required
          />
          <button type="submit" className="bg-blue-600 text-white p-1">Login</button>
        </form>
      </div>
    );
  }

  return (
    <div>
      <h2>Welcome to My Finance App</h2>
      <p>Select an option below to get started:</p>
      <ul className="list-disc ml-5">
        <li>
          <Link href="/invest" className="text-blue-600 hover:underline">Invest Money</Link>
        </li>
        <li>
          <Link href="/loan" className="text-blue-600 hover:underline">Take Loan</Link>
        </li>
        <li>
          <Link href="/emi" className="text-blue-600 hover:underline">EMI Products</Link>
        </li>
      </ul>
    </div>
  );
}
