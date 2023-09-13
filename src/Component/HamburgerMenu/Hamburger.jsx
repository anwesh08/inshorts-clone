import React from "react";

const Hamburger = ({ navbarOpen, setNavbarOpen, setCategory }) => {
  const category = [
    "business",
    "entertainment",
    "general",
    "health",
    "science",
    "sports",
    "technology",
  ];
  return (
    <nav
      className={`fixed flex top-0 left-0 w-1/5 p-10 z-10 h-screen pt-24 bg-gray-900 text-white bg-opacity-100 transform delay-100 transition-all duration-300 ${
        navbarOpen ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-full"
      }`}
    >
      <ul className="flex flex-col items-start">
        <header className="text-xl font-bold py-5">Category</header>
        {category.map((text, index) => (
          <li key={index} className="nav-li py-2">
            <span
              className="nav-link"
              onClick={() => {
                setCategory(text);
                setNavbarOpen(false);
              }}
            >
              {text.charAt(0).toUpperCase() + text.slice(1)}
            </span>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Hamburger;
