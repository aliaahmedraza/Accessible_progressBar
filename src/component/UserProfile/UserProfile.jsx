import React, { useState, useEffect, useRef } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Loader from "../Loader/Loader";
import { Button } from "antd";

const Profile = () => {
  const { user, isAuthenticated, isLoading, logout } = useAuth0();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef(null);

  // Close the dropdown when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  const handleToggle = () => setIsOpen((prev) => !prev);

  const handleLogout = () =>
    logout({ logoutParams: { returnTo: window.location.origin } });

  return (
    isAuthenticated && (
      <div ref={containerRef} className="relative flex flex-col items-center">
        <img
          src={user.picture}
          alt={user.name}
          className="rounded-full w-12 h-12 cursor-pointer"
          onClick={handleToggle}
        />
        {isOpen && (
          <div className="absolute top-full mt-2 w-42 bg-[#ddd] border rounded shadow-lg mr-24">
            <div className="p-4">
              <h2 className="font-bold mb-2">{user.name}</h2>
              <div className="mb-2">
                <Button type="primary" onClick={handleLogout}>
                  Log Out
                </Button>
                </div>
                <div>
                <button className="w-full bg-blue-500 py-1 rounded hover:bg-gray-300 transition duration-200">
                  Profile Settings
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Profile;
