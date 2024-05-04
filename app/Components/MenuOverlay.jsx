/* eslint-disable react/prop-types */

const MenuOverlay = ({menu}) => {
  return (
    <div className=" absolute left-0 min-h-full backdrop-blur-lg w-full mt-7 ">
       
   {menu.map((item) => {
      return <h1  className="   text-[30px]  mt-10 mb-6 text-center font-bold hover:scale-110 transition-all ease-in-out duration-300  " key={item.id}> {item.name} </h1>;
    })}
  
    </div>
  )
}

export default MenuOverlay