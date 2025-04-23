import React, { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { motion, AnimatePresence } from "framer-motion";
import LoginPopup from "../LoginSignupPopup/LoginPopup";
import SignupPopup from "../LoginSignupPopup/SignupPopup";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const tabs = [
  { title: "Events", children: ["Weddings", "Birthdays", "Cradle Ceremony"] },
  { title: "Services", children: ["Makeup", "Photography", "Catering"] },
  { title: "Pricing", children: ["Basic", "Standard", "Premium"] },
];

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userInitial, setUserInitial] = useState("");
  const toggleModal = () => setIsModalOpen(!isModalOpen);
  const toggleForm = () => setIsLogin(!isLogin);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserInitial("");
    toast.success("Logged out successfully!");
    navigate("/");
  };

  const handleLoginSuccess = (email) => {
    localStorage.setItem("userEmail", email);
    setIsLoggedIn(true);
    setUserInitial(email.charAt(0).toUpperCase());
    setIsModalOpen(false);
  };

  useEffect(() => {
    const userEmail = localStorage.getItem("userEmail");
    if (userEmail) {
      setIsLoggedIn(true);
      setUserInitial(userEmail.charAt(0).toUpperCase());
    }
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-gradient-to-r from-purple-700 to-indigo-800 text-white shadow-md">
      <div className="flex items-center justify-between px-6 py-4 md:px-12 font-sans">
        <div className="text-2xl font-extrabold tracking-tight drop-shadow-md">
          EventEase
        </div>

        <div className="hidden md:flex space-x-6 relative">
          {tabs.map((tab, index) => (
            <div
              key={index}
              onMouseEnter={() => setActiveTab(index)}
              onMouseLeave={() => setActiveTab(null)}
              className="relative group cursor-pointer"
            >
              <div className="flex items-center space-x-1 hover:text-yellow-300 font-medium">
                <span>{tab.title}</span>
                <MdKeyboardArrowDown size={20} />
              </div>

              <AnimatePresence>
                {activeTab === index && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 8 }}
                    transition={{ duration: 0.25 }}
                    className="absolute top-8 bg-white/90 backdrop-blur-md text-gray-800 shadow-xl rounded-xl p-4 min-w-[220px] border border-gray-200 z-50"
                  >
                    {tab.children.map((child, i) => (
                      <div
                        key={i}
                        className="py-2 px-3 rounded-lg hover:bg-gray-100 transition text-sm font-medium cursor-pointer"
                      >
                        {child}
                      </div>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        <div className="hidden md:flex items-center space-x-4">
          {isLoggedIn ? (
            <>
              <div className="w-10 h-10 rounded-full bg-yellow-400 text-black flex items-center justify-center font-bold text-lg">
                {userInitial}
              </div>
              <button
                onClick={handleLogout}
                className="px-5 py-2 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              onClick={toggleModal}
              className="px-5 py-2 rounded-full border border-yellow-400 hover:bg-yellow-400 hover:text-black transition font-semibold"
            >
              Login
            </button>
          )}
        </div>

        <div className="md:hidden">
          <button onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="md:hidden bg-indigo-900 px-6 py-4 space-y-4 text-white font-medium"
          >
            {tabs.map((tab, index) => (
              <div key={index}>
                <div className="font-semibold text-yellow-300">{tab.title}</div>
                <div className="pl-4 text-sm space-y-1">
                  {tab.children.map((child, i) => (
                    <div key={i} className="hover:text-yellow-300">
                      {child}
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="pt-4 border-t border-indigo-700 mt-4">
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="w-full py-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black font-semibold"
                >
                  Logout
                </button>
              ) : (
                <button
                  onClick={toggleModal}
                  className="w-full py-2 border border-yellow-400 rounded hover:bg-yellow-400 hover:text-black font-semibold"
                >
                  Login
                </button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black/50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-xl max-w-sm w-full">
            {isLogin ? (
              <LoginPopup
                toggleForm={toggleForm}
                closeModal={toggleModal}
                onLoginSuccess={handleLoginSuccess}
              />
            ) : (
              <SignupPopup toggleForm={toggleForm} closeModal={toggleModal} />
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
