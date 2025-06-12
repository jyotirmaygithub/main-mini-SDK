import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white px-4 py-3 shadow-md flex justify-between items-center">
      <h1 className="text-xl font-bold">Main App</h1>
      <div className="space-x-4">
        <button className="hover:underline">Home</button>
        <button className="hover:underline">About</button>
        <button className="hover:underline">Contact</button>
      </div>
    </nav>
  );
};

export default Navbar;
