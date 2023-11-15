import DRS_Smart_Repair_Logo from "../assets/Smart Repair Logo.png";
import { useState } from "react";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="relative">
      <div className="flex items-center justify-between">
        <img
          className="p-2"
          src={DRS_Smart_Repair_Logo}
          alt="DRS Smart Repair Logo"
        />

        <div
          className={`flex flex-col justify-between gap-1 h-5 mr-4 ${
            menuOpen ? "hidden" : "flex"
          }`}
          onClick={toggleMenu}
        >
          <div className="bg-black h-0.5 w-8"></div>
          <div className="bg-black h-0.5 w-8"></div>
          <div className="bg-black h-0.5 w-8"></div>
        </div>
      </div>
      <div
        className={`bg-drs-grey w-2/4 ${
          menuOpen ? "ml-auto" : "hidden"
        } absolute top-0 right-0 h-screen`}
      >
        {menuOpen && (
          <>
            <div className="pt-10 pl-4 justify-start">
              <ul className="flex flex-col gap-2 font-dm-sans font-medium">
                <li>
                  <a href="#">Impressum</a>
                </li>
                <li>
                  <a href="#">Datenschutz</a>
                </li>
                <li>
                  <a href="#">AGB</a>
                </li>
              </ul>
            </div>
            <div onClick={toggleMenu}>
              <div className="absolute top-0 right-0 mt-6 mr-6">
                <div className="bg-black h-0.5 w-6 transform rotate-45"></div>
              </div>
              <div className="absolute top-0 right-0 mt-6 mr-6">
                <div className="bg-black h-0.5 w-6 transform -rotate-45"></div>
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
