import * as React from "react";
import { NavLink as RouterNavLink } from "react-router-dom";

const NavLink = ({ children, to }) => (
  <RouterNavLink to={to} className="text-sm leading-5 text-neutral-500">
    {children}
  </RouterNavLink>
);

const navLinks = [
  { text: "Why Register?", to: "/why-register" },
  { text: "Benefit Page", to: "/benefits" },
  { text: "Requirements", to: "/requirements" },
  { text: "About Us", to: "/about-us" },
  { text: "Contact", to: "/contact" },
  { text: "Forum", to: "/forum" },
];

function Navbar() {
  return (
    <header className="max-w-[1366px] m-auto flex gap-5 justify-between items-center max-md:flex-wrap max-md:max-w-full">
      <NavLink to="/" className="cursor-pointer">
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/e66db26caa0fa5b07daff9e4ff994c6ae87c5267fb03369b81463c59c0de47c3?apiKey=3ae96302e69649f5be368f89230b0596&"
          alt="Company logo"
          className="shrink-0 self-stretch my-auto max-w-full aspect-[3.85] w-[280px] max-md:pt-2.5"
        />
      </NavLink>
      <nav className="flex items-center justify-center gap-5 px-3 py-12 max-md:flex-wrap max-sm:hidden max-md:hidden cursor-pointer font-semibold">
        {navLinks.map((link, index) => (
          <NavLink key={index} to={link.to}>
            {link.text}
          </NavLink>
        ))}
      </nav>
      <NavLink
        to="/login"
        className="self-stretch my-auto text-lg text-blue-900 max-md:hidden max-lg:hidden font-bold "
      >
        Login
      </NavLink>
    </header>
  );
}

export default Navbar;
