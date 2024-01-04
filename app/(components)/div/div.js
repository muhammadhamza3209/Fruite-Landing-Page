import React from 'react'

import Image from 'next/image'

 function Div(props) {
  return (
    <>

  <div className="lg:flex justify-between">

  <div className="lg:max-w-[500px] md:max-w-[500px] sm:max-w-[200px]  mt-10 ml-4">
        <p className="text-black text-3xl font-bold">{props.title}</p>

        <p className="pt-5">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis
, accusamus illum quos aliquid voluptates dolores
recusandae est. Sint, consequatur aliquid!</p>

     <div className="pt-5 mb-3">
     <button className=" bg-black text-white px-5 py-3 ">Buy Now</button>
     </div>

      </div>

      
     <div>
      <Image className="justify-center mx-auto" src={props.val} alt="z" />
     </div>

  </div>



      
    </>
  )
}
export default Div
