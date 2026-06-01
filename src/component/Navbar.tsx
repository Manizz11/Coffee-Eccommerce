import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { FiSearch, FiUser, FiShoppingCart } from "react-icons/fi";
import CartContext from "../context/cartContext";

const Navbar: React.FC = () => {
  const { cartItems, setIsCartOpen } = useContext(CartContext);
  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const linkClass = ({ isActive }: { isActive: boolean }) =>
    `relative font-bold text-[13px] uppercase tracking-[0.12em] transition-all duration-300 py-2
    after:content-[''] after:absolute after:left-0 after:bottom-0
    after:h-[2px] after:bg-red-600 after:transition-all after:duration-300
    ${
      isActive
        ? "after:w-full text-white"
        : "after:w-0 hover:after:w-full text-zinc-300 hover:text-red-600"
    }`;

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white h-20 border-b border-zinc-800 z-50">
      
      <div className="max-w-7xl mx-auto h-full px-6 flex items-center justify-between relative">
        
        {/* Left Links */}
        <div className="hidden lg:flex items-center gap-8 w-[40%] justify-end">
          <NavLink to="/coffee" className={linkClass}>
            Coffee
          </NavLink>

          <NavLink to="/subscribe" className={linkClass}>
            Subscribe
          </NavLink>

          <NavLink to="/merch" className={linkClass}>
            Merch
          </NavLink>
        </div>

        {/* Logo (above everything) */}
        <div className="absolute left-1/2 -translate-x-1/2 top-3 z-[100]">
          <NavLink to="/">
            <div className="w-28 h-28 rounded-full border-4 border-red-600 overflow-hidden bg-black flex items-center justify-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
          </NavLink>
        </div>

        {/* Right Links + Icons */}
        <div className="hidden lg:flex items-center justify-between w-[40%]">
          
          {/* Page Links */}
          <div className="flex items-center gap-8">
            <NavLink to="/store" className={linkClass}>
              Store
            </NavLink>

            <NavLink to="/blog" className={linkClass}>
              Blog
            </NavLink>

            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
          </div>

          {/* Icons */}
          <div className="flex items-center gap-5 text-xl">
            <NavLink
              to="/auth"
              className="text-zinc-300 hover:text-red-600 transition"
            >
              <FiUser  />
            </NavLink>

            <button className="text-zinc-300 hover:text-red-600 transition">
              <FiSearch />
            </button>

            <button onClick={() => setIsCartOpen(true)} className="relative text-zinc-300 hover:text-red-600 transition">
              <FiShoppingCart />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-600 text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;