"use client";
import ToolCards from "@/Components/Common/ToolCards";
import Nav from "@/Components/layout/Nav";
import { useState } from "react";

export default function Home() {
  const [filter, setFilter] = useState("all"); // "all", "active", or "inactive"

  return (
    <div className="px-[80px] bg-gradient-to-b from-[#050A1D] to-[#09143F] min-h-screen">
      {/* ส่วนบนสุด */}
      <header className=" pt-10">
        <Nav />
      </header>
      <section className="">
        <div className="flex text-white text-3xl mt-10 justify-between font-medium">
          Extensions List
          <div className="space-x-3">
            <button 
              onClick={() => setFilter("all")}
              className={`text-xl px-4 py-1 rounded-3xl ${
                filter === "all" ? "bg-[#F05E51] text-black" : "bg-[#2F354B]"
              }`}
            >
              All
            </button>
            <button 
              onClick={() => setFilter("active")}
              className={`text-xl px-4 py-1 rounded-3xl ${
                filter === "active" ? "bg-[#F05E51] text-black" : "bg-[#2F354B]"
              }`}
            >
              Active
            </button>
            <button 
              onClick={() => setFilter("inactive")}
              className={`text-xl px-4 py-1 rounded-3xl ${
                filter === "inactive" ? "bg-[#F05E51] text-black" : "bg-[#2F354B]"
              }`}
            >
              Inactive
            </button>
          </div>
        </div>
        <div>
          <ToolCards filter={filter}/>
        </div>
      </section>
    </div>
  )
}