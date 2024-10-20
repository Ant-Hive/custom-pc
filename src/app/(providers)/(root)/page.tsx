/* eslint-disable @next/next/no-img-element */
"use client";

import { useThemeStore } from "@/store/useStore";
import { useState } from "react";
import Build from "./_components/Build a PC/Build";
import CommunityBuilds from "./_components/community_builds/page";
import ViewBuildsByPrice from "./_components/view_builds_by_price/page";

// 버튼 컴포넌트화
const ThemeButton = ({ isActive, onClick, text, size }: any) => {
  return (
    <section className="font-serif w-full lg:w-60 mb-4 p-[1px] bg-gradient-to-r from-blue-400 via-purple-500 to-blue-400 rounded-full">
      <button
        onClick={onClick}
        className={`w-full p-2 ${size} h-[50px] ${
          isActive ? "bg-[#ffffff]" : "bg-[#0f1113]"
        } rounded-full`}
      >
        <p
          className={`${
            isActive
              ? "text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-violet-800 bg-[60deg]"
              : "text-white"
          }`}
        >
          {text}
        </p>
      </button>
    </section>
  );
};

// h1 컴포넌트화
const ThemeTitle = ({ theme, setActiveTab }: any) => {
  return (
    <div className="relative inline-block w-96">
      <h1 className="invisible text-[70px] font-serif mb-10">
        Custom PC Magician
      </h1>
      <h1
        onClick={() => setActiveTab("")}
        className={`theme-opacity absolute top-0 left-0 inset-0 text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-white via-blue-300 to-violet-500 bg-[60deg] font-serif text-[70px] mb-10 text-left transition-all duration-500 ease-in-out ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        Custom PC <br />
        Magician
      </h1>
      <h1
        onClick={() => setActiveTab("")}
        className={`theme-opacity absolute top-0 left-0 inset-0 text-transparent whitespace-nowrap bg-clip-text bg-gradient-to-r from-violet-700 via-blue-950 to-black bg-[60deg] font-serif text-[70px] mb-10 text-left transition-all duration-500 ease-in-out ${
          theme !== "dark" ? "opacity-100" : "opacity-0"
        }`}
      >
        Custom PC <br />
        Magician
      </h1>
    </div>
  );
};

// 이미지 컴포넌트화
const ThemeImage = ({ theme }: any) => {
  return (
    <>
      <div
        // 라이트 모드
        className={`absolute inset-0 bg-gradient-to-r from-gray-400/0 to-gray-400 z-0 pointer-events-none theme-opacity ${
          theme !== "dark" ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <div
        // 다크 모드
        className={`absolute inset-0 bg-gradient-to-r from-pink-500/0 to-black z-0 pointer-events-none theme-opacity ${
          theme === "dark" ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <img
        // 라이트 모드
        src="https://img.chuing.net/i/HQJVyeG/%EC%82%AC%EB%B3%B8%20-3333.jpg"
        alt=""
        className={`absolute inset-0 h-full transform transition-all duration-300 ease-in-out ${
          theme !== "dark"
            ? "left-[-15%] opacity-100"
            : "left-[-100%] opacity-0"
        } pointer-events-none blur-mask`}
      />
      <img
        // 다크 모드
        src="https://tumblbug-pci.imgix.net/6eec8030c730675bec7c1ff93f61a08162934ebd/7bb35479921a8dfd09d353f5b8716b88ca913235/57e7c6e9fe723a1167b0ce458db447bcc07935ed/30603416-80c1-43cc-bd36-4f8f239b1508.png?auto=format%2Ccompress&fit=max&h=930&lossless=true&w=1240&s=25719117e6379d625fde0fa3c61af94a"
        alt=""
        className={`absolute inset-0 h-full transform transition-all duration-300 ease-in-out ${
          theme === "dark"
            ? "left-[-20%] opacity-70 scale-x-[-1]"
            : "left-[-100%] opacity-0 scale-x-[-1]"
        } pointer-events-none blur-mask`}
      />
    </>
  );
};

function MainPage() {
  const theme = useThemeStore((state) => state.theme);
  const [activeTab, setActiveTab] = useState<string>("");

  const renderFormContent = () => {
    return (
      <>
        <div
          className={`absolute transition-all duration-700 top-0 ${
            activeTab === "Build a PC" ? "left-0" : "left-[400%]"
          }`}
        >
          <Build />
        </div>
        <div
          className={`absolute transition-all duration-700 top-0 ${
            activeTab === "View Builds by Price" ? "left-0" : "left-[400%]"
          }`}
        >
          <ViewBuildsByPrice />
        </div>
        <div
          className={`absolute transition-all duration-700 top-0 ${
            activeTab === "Community Builds" ? "left-0" : "left-[400%]"
          }`}
        >
          <CommunityBuilds />
        </div>
        <div
          className={`absolute transition-all duration-700 top-0 h-[100%] w-[100%]  ${
            activeTab === ""
              ? "right-[-50px] opacity-100"
              : "right-[-150%] opacity-0"
          }`}
        >
          <img
            className="absolute top-[7%] left-[180px] w-full object-cover"
            src="https://i.ibb.co/vx1KXC8/image-720.png"
            alt="Custom PC"
          />
        </div>
      </>
    );
  };

  return (
    <div
      className={`relative flex ${
        theme === "dark" ? "bg-[#0d1117]" : "bg-white"
      } overflow-hidden h-screen`}
    >
      <ThemeImage theme={theme} />
      <nav className="w-full lg:w-1/4 p-5 ml-10 lg:ml-28 mt-10 lg:mt-[3rem] z-10">
        <header className="flex flex-col items-start justify-center ml-4 lg:ml-10">
          <button>
            <ThemeTitle theme={theme} setActiveTab={() => setActiveTab("")} />
          </button>
          <ThemeButton
            isActive={activeTab === "Build a PC"}
            onClick={() => setActiveTab("Build a PC")}
            text="Build a PC"
            size="text-lg sm:text-xl md:text-2xl lg:text-3xl"
          />
          <ThemeButton
            isActive={activeTab === "View Builds by Price"}
            onClick={() => setActiveTab("View Builds by Price")}
            text="View Builds by Price"
            size="text-base sm:text-lg md:text-xl"
          />
          <ThemeButton
            isActive={activeTab === "Community Builds"}
            onClick={() => setActiveTab("Community Builds")}
            text="Community Builds"
            size="text-lg sm:text-xl md:text-2xl"
          />
        </header>
      </nav>
      <main className="relative flex-grow p-5 h-full z-10 overflow-hidden">
        {renderFormContent()}
      </main>
    </div>
  );
}

export default MainPage;
