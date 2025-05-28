import React from "react";

const Navbar = () => {
  const mockLinks: number[] = new Array(6).fill(0);

  return (
    <footer
      className={
        "w-full flex gap-x-12 gap-y-4 items-center p-2 md:p-4 border-t border-border shadow-md flex-wrap justify-center"
      }
    >
      <h2 className={"font-bold px-4"}>MockName</h2>
      <ul className={"w-full flex justify-center gap-8 md:gap-24 items-center"}>
        {mockLinks.map((_, idx) => (
          <li key={idx}>Link {idx + 1}</li>
        ))}
      </ul>
    </footer>
  );
};

export default Navbar;
