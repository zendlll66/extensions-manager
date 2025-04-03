import React, { useState } from 'react';
import Image from 'next/image';

interface ToolCardsProps {
  filter: "all" | "active" | "inactive";
  darkMode: boolean;
}

const ToolCards: React.FC<ToolCardsProps> = ({ filter ,darkMode}) => {
  const [tools, setTools] = useState([
    {
      "logo": "./assets/images/logo-devlens.svg",
      "name": "DevLens",
      "description": "Quickly inspect page layouts and visualize element boundaries.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-style-spy.svg",
      "name": "StyleSpy",
      "description": "Instantly analyze and copy CSS from any webpage element.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-speed-boost.svg",
      "name": "SpeedBoost",
      "description": "Optimizes browser resource usage to accelerate page loading.",
      "isActive": false
    },
    {
      "logo": "./assets/images/logo-json-wizard.svg",
      "name": "JSONWizard",
      "description": "Formats, validates, and prettifies JSON responses in-browser.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-tab-master-pro.svg",
      "name": "TabMaster Pro",
      "description": "Organizes browser tabs into groups and sessions.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-viewport-buddy.svg",
      "name": "ViewportBuddy",
      "description": "Simulates various screen resolutions directly within the browser.",
      "isActive": false
    },
    {
      "logo": "./assets/images/logo-markup-notes.svg",
      "name": "Markup Notes",
      "description": "Enables annotation and notes directly onto webpages for collaborative debugging.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-grid-guides.svg",
      "name": "GridGuides",
      "description": "Overlay customizable grids and alignment guides on any webpage.",
      "isActive": false
    },
    {
      "logo": "./assets/images/logo-palette-picker.svg",
      "name": "Palette Picker",
      "description": "Instantly extracts color palettes from any webpage.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-link-checker.svg",
      "name": "LinkChecker",
      "description": "Scans and highlights broken links on any page.",
      "isActive": true
    },
    {
      "logo": "./assets/images/logo-dom-snapshot.svg",
      "name": "DOM Snapshot",
      "description": "Capture and export DOM structures quickly.",
      "isActive": false
    },
    {
      "logo": "./assets/images/logo-console-plus.svg",
      "name": "ConsolePlus",
      "description": "Enhanced developer console with advanced filtering and logging.",
      "isActive": true
    }
  ]);


  interface Tool {
    logo: string;
    name: string;
    description: string;
    isActive: boolean;
  }

  interface ToolCardsProps {
    filter: "all" | "active" | "inactive";
  }

  const toggleActive = (toolName: string): void => {
    const index = tools.findIndex(tool => tool.name === toolName);
    if (index === -1) return; // ป้องกันข้อผิดพลาดหากหาไม่เจอ

    const updatedTools = [...tools];
    updatedTools[index] = { ...updatedTools[index], isActive: !updatedTools[index].isActive };
    setTools(updatedTools);
  };

  // Filter tools based on the selected filter
  const filteredTools = tools.filter(tool => {
    if (filter === "all") return true;
    if (filter === "active") return tool.isActive;
    if (filter === "inactive") return !tool.isActive;
    return true;
  });

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredTools.map((tool, index) => (
          <div
            key={index}
            className={`rounded-lg shadow-md overflow-hidden border-l-4 ${tool.isActive ? 'border-green-500' : 'border-gray-400'
              } ${!tool.isActive ? 'opacity-75' : ''}`}
          >
            <div className={`p-5 h-full  text-white ${darkMode ? "bg-[#2F3548] text-white" : "bg-white text-black"} `}>
              <div className="flex items-center mb-4">
                <Image
                  height={120}
                  width={100}
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="w-10 h-10 mr-3 object-contain"
                />
                <h3 className={`text-lg font-semibold ${darkMode ? " text-white" : " text-black"}`}>{tool.name}</h3>
              </div>

              <p className={`mb-4 ${darkMode ? " text-white" : " text-gray-600"}`}>{tool.description}</p>

              <div className="flex items-center justify-between">
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${tool.isActive
                  ? 'bg-green-100 text-green-800'
                  : 'bg-gray-100 text-gray-800'
                  }`}>
                  {tool.isActive ? 'Active' : 'Inactive'}
                </span>

                <button
                  title={`Toggle ${tool.isActive ? 'Inactive' : 'Active'} state for ${tool.name}`}
                  onClick={() => toggleActive(tool.name)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 ${tool.isActive
                    ? 'bg-green-500 focus:ring-green-500'
                    : 'bg-gray-200 focus:ring-gray-500'
                    }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${tool.isActive ? 'translate-x-6' : 'translate-x-1'
                      }`}
                  />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ToolCards;