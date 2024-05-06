"use client";
// import React, { useState } from "react";

// import About from "../About";
// import BasicInfo from "../BasicInfo";
// import Subjects from "../Subjects";
// import Experiences from "../Experiences";
// import Achievements from "../Achievements";
// import Projects from "../Projects";

// const Faqs = () => {
//   const [activeTab, setActiveTab] = useState(1);

//   const changeTab = (tabIndex) => {
//     setActiveTab(tabIndex);
//   };

//   const TabContent = {
//     1: <BasicInfo />,
//     2: <Subjects />,
//     3: <Experiences />,
//     4: <Achievements />,
//     5: <Projects />,
//   };

//   return (
//     <div className="    mt-8">
//       {/* <div className="text-center">
//         <h1>GeT ANSWERS OF</h1>
//         <div className="rounded-2xl m-auto px-2 py-1 w-fit bg-[#2097C9] ">
//           <h1 className="text-center text-xl font-bold border-dotted border-black border-2 rounded-3xl  px-3">
//             Members
//           </h1>
//         </div>
//       </div> */}
//       <div className="flex px-3 justify-between md:justify-evenly items-center ">
//         <TabButton
//           title="Basic Information"
//           onClick={() => changeTab(1)}
//           isActive={activeTab === 1}
//         />
//         <TabButton
//           title="Subjects"
//           onClick={() => changeTab(2)}
//           isActive={activeTab === 2}
//         />
//         <TabButton
//           title="Experiences"
//           onClick={() => changeTab(3)}
//           isActive={activeTab === 3}
//         />
//         <TabButton
//           title="Achievements"
//           onClick={() => changeTab(4)}
//           isActive={activeTab === 4}
//         />
//         <TabButton
//           title="Projects"
//           onClick={() => changeTab(5)}
//           isActive={activeTab === 5}
//         />
//       </div>
//       <div className=" mx-5   mt-4">{TabContent[activeTab]}</div>
//     </div>
//   );
// };

// const TabButton = ({ title, onClick, isActive }) => {
//   return (
//     <button
//       className={` ${
//         isActive ? "bg-[#FE3D4D] text-white " : ""
//       }  bg-[#FFCDCD]-600 rounded-xl px-4 py-2 `}
//       style={{
//         boxShadow: "4.38px 4.38px 0px 0px #000000",
//       }}
//       onClick={onClick}
//     >
//       {title}
//     </button>
//   );
// };

// export default Faqs;
import React, { useState } from "react";

import About from "../About";
import BasicInfo from "../BasicInfo";
import Subjects from "../Subjects";
import Experiences from "../Experiences";
import Achievements from "../Achievements";
import Projects from "../Projects";

const Faqs = () => {
  const [activeTab, setActiveTab] = useState(1);

  const changeTab = (tabIndex) => {
    setActiveTab(tabIndex);
  };

  const TabContent = {
    1: <BasicInfo />,
    2: <Subjects />,
    3: <Experiences />,
    4: <Achievements />,
    5: <Projects />,
  };

  return (
    <div className="  mt-8">
      <div className="flex flex-wrap justify-center">
        <TabButton
          title="Basic Information"
          onClick={() => changeTab(1)}
          isActive={activeTab === 1}
        />
        <TabButton
          title="Subjects"
          onClick={() => changeTab(2)}
          isActive={activeTab === 2}
        />
        <TabButton
          title="Experiences"
          onClick={() => changeTab(3)}
          isActive={activeTab === 3}
        />
        <TabButton
          title="Achievements"
          onClick={() => changeTab(4)}
          isActive={activeTab === 4}
        />
        <TabButton
          title="Projects"
          onClick={() => changeTab(5)}
          isActive={activeTab === 5}
        />
      </div>
      <div className="mx-5 lg:mx-40 mt-4">{TabContent[activeTab]}</div>
    </div>
  );
};

const TabButton = ({ title, onClick, isActive }) => {
  return (
    <button
      className={`${
        isActive ? "bg-[#FE3D4D] text-white " : ""
      } bg-[#FFCDCD]-600 rounded-xl px-4 py-2 m-2`}
      style={{
        boxShadow: "4.38px 4.38px 0px 0px #000000",
      }}
      onClick={onClick}
    >
      {title}
    </button>
  );
};

export default Faqs;
