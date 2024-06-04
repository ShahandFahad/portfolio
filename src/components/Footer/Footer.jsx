import React from "react";

export default function Footer() {
  return (
    <footer className="max-w-md pb-16 text-sm text-gray-500 sm:pb-0">
      <p>
        Purely built with
        <a
          href="https://react.dev/"
          className="font-medium text-gray-400 hover:text-cyan-300 focus-visible:text-cyan-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="React (opens in a new tab)"
        >
          React
        </a>
        ,
        <a
          href="https://tailwindcss.com/"
          className="font-medium text-gray-400 hover:text-cyan-300 focus-visible:text-cyan-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Tailwind CSS (opens in a new tab)"
        >
          Tailwind CSS
        </a>
        , coded in
        <a
          href="https://code.visualstudio.com/"
          className="font-medium text-gray-400 hover:text-cyan-300 focus-visible:text-cyan-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Visual Studio Code (opens in a new tab)"
        >
          Visual Studio Code
        </a>
        and deployed with
        <a
          href="https://vercel.com/"
          className="font-medium text-gray-400 hover:text-cyan-300 focus-visible:text-cyan-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Vercel (opens in a new tab)"
        >
          Vercel
        </a>
        .
      </p>
      <p className="text-xs mt-1.5">
        <i>
          The portfolio inspiration comes from
          <a
            href="https://brittanychiang.com"
            className="font-medium text-gray-400 hover:text-cyan-300 focus-visible:text-cyan-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Brittany Chiang (opens in a new tab)"
          >
            Brittany Chiang
          </a>
        </i>
      </p>
    </footer>
  );
}
