import React from "react";
import HamburgerMenu from "@/assets/icons/hamburger-menu.svg";

const Navbar = () => {
  const mockLinks: number[] = new Array(6).fill(0);

  return (
    <nav
      className={
        "w-full flex gap-12 items-center p-2 md:p-4 border-b border-border shadow-md"
      }
    >
      <h2 className={"font-bold px-4"}>MockName</h2>
      <ul className={"w-full flex gap-8 items-center max-md:hidden"}>
        {mockLinks.map((_, idx) => (
          <li key={idx}>Link {idx + 1}</li>
        ))}
      </ul>
      <HamburgerMenu className={"md:hidden size-10 ml-auto"} />
    </nav>
  );
};

export default Navbar;
