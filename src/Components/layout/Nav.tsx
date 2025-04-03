"use client"; 
import React, { useState, useEffect } from 'react';

const Nav = ({ setDarkMode }: { setDarkMode: (value: boolean) => void }) => {
    // โหลดค่าธีมจาก localStorage หรือใช้ค่าเริ่มต้นเป็น true (Dark Mode)
    const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

    useEffect(() => {
        // ตรวจสอบว่าเป็นฝั่ง client ก่อนถึงจะใช้ localStorage
        if (typeof window !== 'undefined') {
            const savedTheme = localStorage.getItem('theme');
            // ถ้ามีค่าใน localStorage ให้ใช้ค่านั้น
            if (savedTheme) {
                setIsDarkMode(savedTheme === 'dark');
                setDarkMode(savedTheme === 'dark');
            } else {
                // ถ้าไม่มีค่าใน localStorage ให้ใช้ค่าเริ่มต้นเป็น dark mode
                setIsDarkMode(false);
                setDarkMode(false);
            }
        }
    }, []);

    // เปลี่ยนธีมและบันทึกลงใน localStorage
    const toggleTheme = () => {
        const newTheme = !isDarkMode;
        setIsDarkMode(newTheme);
        if (typeof window !== 'undefined') {
            localStorage.setItem('theme', newTheme ? 'dark' : 'light');
        }
    };

    // เมื่อธีมเปลี่ยน ให้อัปเดต DOM และ parent component
    useEffect(() => {
        if (typeof window !== 'undefined') {
            if (isDarkMode) {
                document.documentElement.classList.add('dark');
            } else {
                document.documentElement.classList.remove('dark');
            }
            // ส่ง event เพื่อแจ้งหน้าอื่นๆ เกี่ยวกับการเปลี่ยนธีม
            window.dispatchEvent(new Event('storage'));
        }
        setDarkMode(isDarkMode);
    }, [isDarkMode, setDarkMode]);

    return (
        <div className={`flex justify-between p-4 rounded-2xl transition-all duration-300 ${isDarkMode ? 'bg-[#1F2535] text-white' : 'bg-gray-100 text-black'}`}>
            {/* โลโก้ */}
            <img src="assets/images/logo.svg" alt="logo" className="ml-4" />

            {/* ปุ่มเปลี่ยนธีม */}
            <button
                onClick={toggleTheme}
                className={`p-4 rounded-xl transition-colors duration-300 ${isDarkMode ? 'bg-[#2F3548] text-white' : 'bg-[#cacaca] text-black'}`}
                aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
                <img 
                    src={isDarkMode ? "assets/images/icon-sun.svg" : "assets/images/icon-moon.svg"} 
                    alt={isDarkMode ? "Sun icon" : "Moon icon"} 
                    className="w-6 h-6"
                />
            </button>
        </div>
    );
};

export default Nav;
