// import React from "react";

// const Projects = () => {
//   return (
//     <div className="  my-10   md:w-auto mx-5 flex flex-col gap-7     ">
//       <div class="py-5 bg-slate-50 px-5 shadow-lg">
//         <h1 class="mx-2 font-bold text-2xl">Phd Candidates</h1>
//         <table class=" text-center text-[1.1rem]    ">
//           <thead>
//             <tr>
//               <th class="px-4 py-2">Student Name</th>
//               <th class="px-4 py-2">Thesis Topic</th>
//               <th class="px-4 py-2">Start Year</th>
//               <th class="px-4 py-2">Completion Year</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td class="px-4 py-2">1) Manoj Kumar Yadav (Full Time)</td>
//               <td class="px-4 py-2">Qauntum Inspired Evaluation Algorithms</td>
//               <td class="px-4 py-2">2023</td>
//               <td class="px-4 py-2">...</td>
//             </tr>
//             <tr>
//               <td class="px-4 py-2">2) A Swamy Goud</td>
//               <td class="px-4 py-2">Mobile Edge Computing</td>
//               <td class="px-4 py-2">2023</td>
//               <td class="px-4 py-2">...</td>
//             </tr>
//             <tr>
//               <td class="px-4 py-2">3) Rajan Ranjan Prasad</td>
//               <td class="px-4 py-2">Machine Learning</td>
//               <td class="px-4 py-2">2023</td>
//               <td class="px-4 py-2">...</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//       <div class="py-5 bg-slate-50 px-5 shadow-lg">
//         <h1 class="mx-2 font-bold text-2xl">PG/UG Projects</h1>
//         <table class="  text-[1.1rem]  ">
//           <thead>
//             <tr>
//               <th class="px-4 py-2">Student Name</th>
//               <th class="px-4 py-2">Project Topic</th>
//               <th class="px-4 py-2">Student Program</th>
//               <th class="px-4 py-2">Completion Year</th>
//             </tr>
//           </thead>
//           <tbody>
//             <tr>
//               <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
//               <td class="px-4 py-2">
//                 Energy efficient workflow scheduling in cloud computing systems
//                 using particle swarm optimization
//               </td>
//               <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
//               <td class="px-4 py-2">2023</td>
//             </tr>
//             <tr>
//               <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
//               <td class="px-4 py-2">
//                 Energy efficient workflow scheduling in cloud computing systems
//                 using particle swarm optimization
//               </td>
//               <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
//               <td class="px-4 py-2">2023</td>
//             </tr>
//             <tr>
//               <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
//               <td class="px-4 py-2">
//                 Energy efficient workflow scheduling in cloud computing systems
//                 using particle swarm optimization
//               </td>
//               <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
//               <td class="px-4 py-2">2023</td>
//             </tr>
//             <tr>
//               <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
//               <td class="px-4 py-2">
//                 Energy efficient workflow scheduling in cloud computing systems
//                 using particle swarm optimization
//               </td>
//               <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
//               <td class="px-4 py-2">2023</td>
//             </tr>
//             <tr>
//               <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
//               <td class="px-4 py-2">
//                 Energy efficient workflow scheduling in cloud computing systems
//                 using particle swarm optimization
//               </td>
//               <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
//               <td class="px-4 py-2">2023</td>
//             </tr>
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default Projects;
import React from "react";

const Projects = () => {
  return (
    <div className="my-10 md:w-auto mx-5 flex flex-col gap-7">
      <div className="py-5 bg-slate-50 px-5 shadow-lg overflow-x-auto">
        <h1 className="mx-2 font-bold text-xl">Phd Candidates</h1>
        <table className="text-center text-[1.1rem]">
          <thead>
            <tr>
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2">Thesis Topic</th>
              <th className="px-4 py-2">Start Year</th>
              <th className="px-4 py-2">Completion Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1) Manoj Kumar Yadav (Full Time)</td>
              <td className="px-4 py-2">
                Quantum Inspired Evaluation Algorithms
              </td>
              <td className="px-4 py-2">2023</td>
              <td className="px-4 py-2">...</td>
            </tr>
            <tr>
              <td className="px-4 py-2">2) A Swamy Goud</td>
              <td className="px-4 py-2">Mobile Edge Computing</td>
              <td className="px-4 py-2">2023</td>
              <td className="px-4 py-2">...</td>
            </tr>
            <tr>
              <td className="px-4 py-2">3) Rajan Ranjan Prasad</td>
              <td className="px-4 py-2">Machine Learning</td>
              <td className="px-4 py-2">2023</td>
              <td className="px-4 py-2">...</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="py-5 bg-slate-50 px-5 shadow-lg overflow-x-auto">
        <h1 className="mx-2 font-bold text-xl">PG/UG Projects</h1>
        <table className="text-center text-[1.1rem]">
          <thead>
            <tr>
              <th className="px-4 py-2">Student Name</th>
              <th className="px-4 py-2">Project Topic</th>
              <th className="px-4 py-2">Student Program</th>
              <th className="px-4 py-2">Completion Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
              <td className="px-4 py-2">
                Energy efficient workflow scheduling in cloud computing systems
                using particle swarm optimization
              </td>
              <td className="px-4 py-2">M. Tech (NIT Sikkim)</td>
              <td className="px-4 py-2">2023</td>
            </tr>
            <tr>
              <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
              <td class="px-4 py-2">
                Energy efficient workflow scheduling in cloud computing systems
                using particle swarm optimization
              </td>
              <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
              <td class="px-4 py-2">2023</td>
            </tr>
            <tr>
              <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
              <td class="px-4 py-2">
                Energy efficient workflow scheduling in cloud computing systems
                using particle swarm optimization
              </td>
              <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
              <td class="px-4 py-2">2023</td>
            </tr>
            <tr>
              <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
              <td class="px-4 py-2">
                Energy efficient workflow scheduling in cloud computing systems
                using particle swarm optimization
              </td>
              <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
              <td class="px-4 py-2">2023</td>
            </tr>
            <tr>
              <td class="px-4 py-2">1) Abhishek Kumar (M210001CS)</td>
              <td class="px-4 py-2">
                Energy efficient workflow scheduling in cloud computing systems
                using particle swarm optimization
              </td>
              <td class="px-4 py-2">M. Tech (NIT Sikkim)</td>
              <td class="px-4 py-2">2023</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Projects;
