import React from "react";

const BasicInfo = () => {
  return (
    <div className="  my-10   md:w-auto mx-5 flex flex-col gap-7      ">
      <div
        data-aos="fade-up"
        className=" bg-slate-50 py-5 px-5  shadow-lg overflow-x-auto "
      >
        <h1 className="  mx-2 font-bold text-xl ">About me</h1>
        <p className="mx-5">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Est
          voluptatum labore neque repellendus accusantium veritatis quae ullam
          vel suscipit, sapiente quod autem dignissimos dolores, doloribus at, a
          quas velit deserunt quibusdam sunt itaque blanditiis non. Labore
          ducimus, beatae maxime dolores at adipisci odio vero natus hic, optio
          reprehenderit iure voluptates totam ipsa consequuntur quisquam error
          consequatur. Molestiae itaque veniam ullam qui totam beatae, neque
          quia eius nostrum. Dolore fugit eos dicta veniam repudiandae dolorem,
          excepturi quasi voluptatum quia, vero ab atque rem explicabo rerum,
          consequuntur distinctio necessitatibus cum voluptate! Sed nobis maxime
          nihil ab? Eius quas voluptatum debitis facere, dolorum nam? Inventore
          numquam ipsectetur tenetur tempore odit? Debitis culpa aperiam
          quisquam ratione ab animi.
        </p>

        <div className=" bg-slate-50 mx-5 mt-10 overflow-x-auto ">
          <div className="my-4 font-semibold  ">
            <h2>Assistant Professor,</h2>
            <h2> Computer Science and Engineering,</h2>
            <h2> National Institute of Technology Patna.</h2>
          </div>
          <div className=" my-4 ">
            <h2>Room no. RM409,</h2>
            <h2> Dept. of Computer Science and Engineering,</h2>
            <h2> National Institute of Technology Patna,</h2>
            <h2> Bihar (800005), India.</h2>
          </div>
          <div className=" my-4 ">
            <h2>
              {" "}
              <span className=" font-bold ">Email : </span> arnabb@iitk.ac.in,
              arnabb@cse.iitk.ac.in{" "}
            </h2>
            <h2>
              {" "}
              <span className=" font-bold ">Phone : </span> +91-512-259-7650,
              +91-512-679-7650, +91-512-392-7650.
            </h2>
            <h2>
              {" "}
              <span className=" font-bold ">Fax : </span> +91-512-259-0725,
              +91-512-259-7586.
            </h2>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        className="bg-slate-50  py-5 px-5  shadow-lg overflow-x-auto "
      >
        <h1 className=" mx-2 font-bold text-xl ">Research Interest:-</h1>
        <ul className=" mx-10 list-disc text-[1.1rem]  ">
          <li>Edge Computing</li>
          <li> Nature Inspired Algorithms</li>
          <li>Cloud Computing</li>
          <li> Workflow Scheduling Algorithm</li>
          <li> Quantum Computing</li>
          <li> Optimization</li>
        </ul>
      </div>
      <div
        data-aos="fade-up"
        className="py-5 bg-slate-50 px-5 shadow-lg overflow-x-auto "
      >
        <h1 className="mx-2 font-bold text-xl">Educational Qualification</h1>
        <table className=" text-center text-[1.1rem]   ">
          <thead>
            <tr>
              <th className="px-4 py-2">Certification</th>
              <th className="px-4 py-2">Institute Name</th>
              <th className="px-4 py-2">Passing Year</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="px-4 py-2">PhD</td>
              <td className="px-4 py-2">National Institute of Technology Sikkim</td>
              <td className="px-4 py-2">2021</td>
            </tr>
            <tr>
              <td className="px-4 py-2">M. Tech</td>
              <td className="px-4 py-2">National Institute of Technology Trichy</td>
              <td className="px-4 py-2">2013</td>
            </tr>
            <tr>
              <td className="px-4 py-2">B. Tech</td>
              <td className="px-4 py-2">Andhra University</td>
              <td className="px-4 py-2">2011</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* <div classNameName=" py-5 px-5  shadow-lg ">
        <h1 className=" mx-2 font-bold ">Educational Qualification</h1>
        <div class="grid grid-cols-3 gap-4">
          <div>
            <p class="font-bold">Certification</p>
            <p>PhD</p>
            <p>M. Tech</p>
            <p>B. Tech</p>
          </div>

          <div>
            <p class="font-bold">Institute Name</p>
            <p>National Institute of Technology Sikkim</p>
            <p>National Institute of Technology Trichy</p>
            <p>Andhra University</p>
          </div>

          <div>
            <p class="font-bold">Passing Year</p>
            <p>2021</p>
            <p>2013</p>
            <p>2011</p>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default BasicInfo;
