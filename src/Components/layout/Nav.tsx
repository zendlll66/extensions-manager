"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Nav = ({ setDarkMode }: { setDarkMode: (value: boolean) => void }) => {
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const savedTheme = localStorage.getItem("theme");
            const isDark = savedTheme === "dark";
            setIsDarkMode(isDark);
            setDarkMode(isDark);
            document.documentElement.classList.toggle("dark", isDark);
        }
    }, [setDarkMode]);

    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        setDarkMode(newTheme);

        if (typeof window !== "undefined") {
            localStorage.setItem("theme", newTheme ? "dark" : "light");
            document.documentElement.classList.toggle("dark", newTheme);
        }
    };

    return (
        <div className={`flex justify-between p-4 rounded-2xl transition-all duration-300 ${isDarkMode ? "bg-[#1F2535] text-white" : "bg-[#FCFDFE] text-black"}`}>
            {/* โลโก้ */}
            <Image src="/assets/images/logo.svg" alt="logo" width={120} height={120} className="ml-4" />

            {/* ปุ่มเปลี่ยนธีม */}
            <button
                onClick={toggleTheme}
                className={`p-4 rounded-xl transition-colors duration-300 ${isDarkMode ? "bg-[#2F3548] text-white" : "bg-[#cacaca] text-black"}`}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                <Image
                    src={isDarkMode ? "/assets/images/icon-sun.svg" : "/assets/images/icon-moon.svg"}
                    alt={isDarkMode ? "Sun icon" : "Moon icon"}
                    width={24}
                    height={24}
                />
            </button>
        </div>
    );
};

export default Nav;
