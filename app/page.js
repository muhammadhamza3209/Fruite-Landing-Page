import Image from 'next/image'

import Link from 'next/link'
import logo from '../public/logo oringe.png'

import { LiaAlignJustifySolid } from "react-icons/lia";

import a from '../public/search-icon.png'

import d from  '../public/slide-img.png'



import ga from '../public/card-item-gauva.png'

import ung from '../public/card-item-grapes.png'

import org from '../public/card-item-oringe.png'

import hh from '../public/orange.png'

import kk from '../public/gauva.png'




import client from '../public/client.png'



import ll from '../public/orange-dish.png'



import fa from '../public/fb.png'

import ins from '../public/instagram.png'

import lin from '../public/linkedin.png'

import twi from '../public/twitter.png'


 import Card from './(components)/card/card';

 import Div from './(components)/div/div';



export default function Home() {
  return (
   
        <>

        {/* navber */}

        <nav>
        <div class="logo flex gap-2"><Image src={logo} alt="" /><p className="pt-4 font-bold text-xl">Tropoces</p></div>
        <input type="checkbox" id="click"/>
        <label for="click"><LiaAlignJustifySolid className="text-black" /></label>
        <ul>
            <li><Link href="#">Home</Link></li>
            <li><Link href="#">Menu</Link></li>
            <li><Link href="#">About</Link></li>
            <li><Link href="#">Blog</Link></li>
            <li><Link className="justify-center" href=""><Image className='mx-auto' src={a} alt="" /></Link></li>
            <li><Link href=""><button className="bg-black text-white px-3 py-2">Send mee</button></Link></li>
        </ul>

        
    </nav>
      
      <hr className="border-b-2 text-black" />


      {/* navber closed */}





         {/* section 2 start */}

<div className="md:flex md:flex-row justify-between">

  
<div className="max-w-[408px]  mt-16 ">
          <p className=" lg:text-6xl md:text-5xl md:font-bold text-3xl font-bold  leading-[150%] ">  Welcome to our fruit shop</p>
          <p className="md:pt-20">Lorem ipsum dolor sit amet consectetur,
adipisicing elit. Quos quisquam alias sequi sint,
iusto repudiandae maiores nihil eos
perferendis accusamus?</p>

       
         <div className="pt-20  flex space-x-2">
          <button className="bg-orange-500 text-white sm:py-4 sm:px-4 py-2 px-3" >Shope Now</button>
          <button className="bg-black text-white sm:py-4 sm:px-4 py-2 px-3">Contect Us</button>
         </div>

         </div>

         <div className="pt-10 pr-6 max-w-[500px]">
          <Image src={d} className="" alt="" />
         </div>

</div>


   {/* section 2 end */}




   {/* section 3 start */}

     <div className="max-w-[700px] mx-auto mt-16 ">

      <p className="text-center font-bold text-3xl">Our servercs</p>
      <p className="text-center pt-9">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam!</p>

     </div>


       {/* card */}


       <div className="grid lg:grid-cols-3 md:grid-cols-2 max-w-[1400px] mt-10 mx-auto justify-center">
        

      
          
        <Card src={ require("../public/card-item-gauva.png")} title ={"Gauva"} />
          <Card src={ require("../public/card-item-grapes.png")} title ={"Grapes"} /> 
          <Card src={ require("../public/card-item-oringe.png")} title ={"Oringe"} /> 
        

      </div>



       <div className="max-w-[700px] mx-auto mt-16 ">

       <div className="text-center">
       <butto className="bg-black text-white px-4 py-4">Read More</butto>
       </div>

<p className="text-center font-bold text-2xl pt-9">Fresh fruit</p>
<p className="text-center pt-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore, veniam!</p>

</div>


    {/* section 3 Close */}


     {/* section 4 start */}

     <div className="mt-10" >


      <Div val={ require ("../public/orange.png")} title={"Best Fruit Oringe"} />
      <Div val={ require ("../public/grapes.png")} title={"Best Fruit Grapes"} />
      <Div val={ require ("../public/gauva.png")} title={"Best Fruit Gauva"} />
      
       </div>
    


     {/* section 4 Close */}



     {/* section 5 start */}


     <div className="max-w-[600px] mt-14 mx-auto" >

      <p className="text-center font-bold text-3xl">Testtional</p>
      <p className="text-center pt-5">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rerum, iusto.</p>

      <div  >
        <Image className="mx-auto" src={client} alt="" />
      </div>

      <p className="text-center font-bold text-3xl pt-4">Hoxzenail</p>
      <p className="text-center mb-9">Lorem ipsum dolor sit amet, consectetur adipisicing elit.
Sed soluta at excepturi cumque asperiores
explicabo eaque ad harum, reiciendis nihil.</p>

     </div>


     {/* section 5 Close */}



     {/* section 6 start */}

     <p className="font-bold ml-2 text-2xl">Contect</p>

     <div className=" md:flex md:justify-between md:gap-5 md:items-center ">




   
<div className="">



<div className="grid grid-row-col p-4 ">
<input className="outline-none py-3 border-b-2  lg:w-[300%] md:w-[180%] " type="text" placeholder="Eame" />

<input className="outline-none py-3 border-b-2 lg:w-[300%] md:w-[180%] " type="text" placeholder="Email" />

<input className="outline-none py-3 border-b-2 lg:w-[300%] md:w-[180%]" type="text" placeholder="Phone number" />

<input className="outline-none py-3 border-b-2  lg:w-[300%] md:w-[180%]" type="text" placeholder="Message" />
</div>

<div className="mt-4 ml-3">
  <button className="bg-black text-white px-4 py-3"> Send me</button>
</div>

</div>

<div>
<Image className="ms-auto" src={ll} alt="kal" />
</div>

     </div>




     {/* footer */}


     <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 md:mx-24 text-center mb-7">

      <div className="pt-4">
        <p className="font-bold">List</p>
        <p>linkdin</p>
        <p>facebook</p>
        <p>music</p>
        <p>game</p>
        <p>club</p>
        <p>about</p>
               
                </div>

                <div className="pt-4">
        <p className="font-bold">Servicese</p>
        <p>linkdin</p>
        <p>facebook</p>
        <p>music</p>
        <p>game</p>
        <p>club</p>
        <p>about</p>
               
                </div>

                <div className="pt-4">
        <p className="font-bold">Fruit</p>
        <p>linkdin</p>
        <p>facebook</p>
        <p>music</p>
        <p>game</p>
        <p>club</p>
        <p>about</p>
               
                </div>

                <div className="pt-5">
        <p className="font-bold">Followers</p>
        
        <div className="flex justify-center gap-3">
         <Image src={fa} alt="" />         
         <Image src={ins} alt="" />         
         <Image src={lin} alt="" />         
         <Image src={twi} alt="" />         
        </div>

        <h3>Subrciese</h3>
        <input className="border-2 outline-none pt-3" type="text" placeholder=""  />
       <div className="pt-5">
       <button className="bg-orange-400 text-white px-4 py-2">Send me</button>
       </div>
               
                </div>


     </div>




        </>

  )
}
