import React, { useContext } from "react";
import Navlink from "./Navlink";
import { DataContext } from "../../context/Context";

/**
 * Navigation
 * It shoud be visible on large screen only
 * It should not be visible on small screens
 * @returns Navigation
 */
export default function Navbar() {
  const { navigation } = useContext(DataContext); // Consume and Destructure Data from Context
  return (
    <nav className="nav hidden lg:block">
      {/*  Nav should be hidden on small screen and visible on large screens */}
      <ul className="mt-16 w-max">
        {/* Iterate over nav list */}
        {navigation.map((name, index) => (
          <Navlink name={name} key={index} />
        ))}
      </ul>
    </nav>
  );
}
