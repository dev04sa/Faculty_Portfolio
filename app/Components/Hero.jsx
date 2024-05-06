// import Dimage from './assets/download.jpeg'
import Image from "next/image";
import { FaLinkedin } from "react-icons/fa";
import { FaOrcid } from "react-icons/fa";
import { FaGoogleScholar } from "react-icons/fa6";
import { HiOutlineLightBulb } from "react-icons/hi";

const Hero = () => {
  return (
    <div className=" flex   flex-col  md:flex-row md:justify-evenly  py-10 items-center   ">
      <div data-aos="fade-right" className="  px-24 md:px-0     ">
        <h4 className="font-extrabold  text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
          Dr. B Balaji Naik
        </h4>

        <div className=" font-bold ">
          <h1 className=" mt-3">Assistant Professor</h1>
          <h1 className=" mt-3  md:whitespace-nowrap ">
            Department of Computer Science and Engineering
          </h1>
          <h1 className="mt-3">
            National Institute of Technology Patna, <br />
            <span className="block md:inline">Bihar (800005), India</span>
          </h1>
        </div>
        <div className="  flex gap-6 text-[0.7rem]   sm:text-xs justify-start  ">
          <button
            style={{ backgroundColor: "rgb(148, 27, 12)" }}
            className=" px-3 py-1 pb-1 font-bold  rounded-full text-white mt-4 hover:scale-110 transition-all ease-in duration-300  "
          >
            View CV
          </button>
          <button className=" font-bold border-blue-900 px-3 py-1 pb-1 rounded-full text-blue-600 mt-4 hover:scale-110 transition-all ease-in duration-300 border-[1px]  ">
            Read more
          </button>
        </div>
      </div>

      <div
        data-aos="fade-left"
        className="   flex flex-col  justify-center mt-5   "
      >
        <Image
          src={`/assets/balajinaik.jpg`}
          alt="Download Image"
          className=" w-[250px] lg:w-[250px] rounded-full "
          width={200}
          height={200}
        />
        <div className=" mx-auto flex justify-between text-2xl text-red-700  gap-5  mt-5  ">
          <FaLinkedin />
          <FaGoogleScholar />
          <FaOrcid />
          <HiOutlineLightBulb />
        </div>
      </div>
    </div>
  );
};

export default Hero;
// // import Dimage from './assets/download.jpeg'
// import Image from "next/image";
// import { FaLinkedin } from "react-icons/fa";
// import { FaOrcid } from "react-icons/fa";
// import { FaGoogleScholar } from "react-icons/fa6";
// import { HiOutlineLightBulb } from "react-icons/hi";

// const Hero = () => {
//   return (
//     <div className=" px-10  bg-black  md:px-32 mt-10 items-center gap-24 md:gap-60 grid grid-cols-1  md:grid-cols-2  ">
//       <div className="    ">
//         <h4 className="font-extrabold  text-[18px] bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600">
//           Dr. B Balaji Naik
//         </h4>

//         <div className=" font-bold ">
//           <h1 className=" mt-3">Assistant Professor</h1>
//           <h1 className=" mt-3  md:whitespace-nowrap ">
//             Department of Computer Science and Engineering
//           </h1>
//           <h1 className="mt-3">
//             National Institute of Technology Patna, <br />
//             <span className="block md:inline">Bihar (800005), India</span>
//           </h1>
//         </div>
//         <div className="  flex gap-6 justify-start  ">
//           <button
//             style={{ backgroundColor: "rgb(148, 27, 12)" }}
//             className=" px-3 py-1 pb-1 rounded-full text-white mt-4 hover:scale-110 transition-all ease-in duration-300  "
//           >
//             View CV
//           </button>
//           <button className=" border-blue-900 px-3 py-1 pb-1 rounded-full text-blue-600 mt-4 hover:scale-110 transition-all ease-in duration-300 border-[1px]  ">
//             Read more
//           </button>
//         </div>
//       </div>

//       <div className=" mx-auto   flex flex-col  justify-center mt-5   ">
//         <Image
//           src={`/assets/balajinaik.jpg`}
//           alt="Download Image"
//           className=" w-[250px] lg:w-[250px] rounded-full "
//           width={200}
//           height={200}
//         />
//         <div className=" mx-auto flex justify-between text-2xl text-red-700  gap-5  mt-5  ">
//           <FaLinkedin />
//           <FaGoogleScholar />
//           <FaOrcid />
//           <HiOutlineLightBulb />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Hero;
