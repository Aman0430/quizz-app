"use client";
import React from "react";

export default function Button() {
  const handleStart = () => {};
  return (
    <>
      <button
        onClick={handleStart}
        type="button"
        className="  m-auto  text-lg font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-white hover:bg-blue-800 hover:text-slate-100 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 py-2 px-6 w-1/4 capitalize font-mono"
      >
        Start
      </button>
    </>
  );
}
