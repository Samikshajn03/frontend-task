// components/Header.tsx
"use client";
import React from "react";

const Header: React.FC = () => (
  <header className="bg-white px-6 py-4 border-b border-gray-200">
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-6">
        <h1 className="text-2xl font-semibold text-black">ticktock</h1>
        <span className="text-md font-medium text-black">Timesheets</span>
      </div>
      <div className="flex items-center gap-2 text-gray-600">
  John Doe
  <img src="arrow.png" alt="Arrow" className="w-4 h-4" />
</div>

    </div>
  </header>
);

export default Header;