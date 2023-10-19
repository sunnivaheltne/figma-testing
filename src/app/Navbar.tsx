import React from 'react';

function Navbar() {
  return (
    <div className='w-screen from-pink-400 bg-gradient-to-tr to-green-200 border-b border-rose-400 shadow-sm flex text-white justify-between p-3'>
      <h1 className="text-2xl text-white underline underline-offset-8 uppercase">Elkjøp</h1>
      <h2 className="font-semibold">Handlekurv</h2>
    </div>
  );
}

export default Navbar;
