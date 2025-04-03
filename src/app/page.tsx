"use client";
import ToolCards from "@/Components/Common/ToolCards";
import Nav from "@/Components/layout/Nav";
import { useState} from "react";

export default function Home() {
  const [filter, setFilter] = useState<"all" | "active" | "inactive">("all");
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`px-[80px] min-h-screen transition-all duration-300 ${darkMode ? "bg-gradient-to-b from-[#050A1D] to-[#09143F] text-white" : "bg-[#ECF5FC] text-black"}`}>
      {/* ส่วนบนสุด */}
      <header className="pt-10">
      <Nav setDarkMode={setDarkMode} />
      </header>
      <section>
        <div className="flex flex-col  text-3xl  mt-10 justify-between font-medium">
          Extensions List
          <div className="space-x-3 md:mt-0 mt-4 ">
            <button 
              onClick={() => setFilter("all")}
              className={`text-xl px-4 py-1 rounded-3xl transition-all duration-300 ${
                filter === "all" ? "bg-[#F05E51] text-black" : darkMode ? "bg-[#3A3F5C] text-white" : "bg-[#cacaca] text-black"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("active")}
              className={`text-xl px-4 py-1 rounded-3xl transition-all duration-300 ${
                filter === "active" ? "bg-[#F05E51] text-black" : darkMode ? "bg-[#3A3F5C] text-white" : "bg-[#cacaca] text-black"
              }`}
            >
              Active
            </button>
            <button 
              onClick={() => setFilter("inactive")}
              className={`text-xl px-4 py-1 rounded-3xl transition-all duration-300 ${
                filter === "inactive" ? "bg-[#F05E51] text-black" : darkMode ? "bg-[#3A3F5C] text-white" : "bg-[#cacaca] text-black"
              }`}
            >
              Inactive
            </button>
          </div>
        </div>
        <div>
          <ToolCards filter={filter} />
        </div>
      </section>
    </div>
  );
}
