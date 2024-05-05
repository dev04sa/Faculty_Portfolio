import React from "react";

const Subjects = () => {
  return (
    <div className="   min-w-min mx-5 flex flex-col gap-7     ">
      <div className=" bg-slate-50 py-5 px-5  shadow-lg ">
        <h1 className=" mx-2 font-bold text-2xl ">Subjects</h1>
        <ul className=" mx-10 list-disc text-xl ">
          <li>CS35101 Data Structure Autumn 2023</li>
          <li>CS24108 Computer Organization Spring 2023</li>
          <li> CS13101 Information Technology Fundamentals Autumn 2022</li>
          <li> CS64121 Cloud Computing Spring 2024</li>
          <li> CS22101 Fundamental of Information Technology Spring 2024</li>
        </ul>
      </div>
    </div>
  );
};

export default Subjects;
