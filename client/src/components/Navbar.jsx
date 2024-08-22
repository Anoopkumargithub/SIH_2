import React, { useState } from 'react';
import CreateAccount from "./CreateAccount"

const Navbar = () => {
const [sendAuth,setSendAuth] = useState(false);
  return (
    <div className="min-h-screen bg-[#0a0f1f] text-white w-screen">

      <header className="flex items-center justify-between p-4 bg-[#1a6ba0]">
        <h1 className="text-2xl font-bold">NexCareer</h1>
        <button onClick={()=>{setSendAuth(true)}} href="#" className="text-sm text-white">
          Already have an account? Log in
        </button>
      </header>
      <main className="flex flex-col items-center justify-center min-h-[calc(60vh_-_65px)] px-4">
      </main>
      {/* <CreateAccount/> */}
        {sendAuth && <CreateAccount/>}
    </div>
  );
};

export default Navbar;

