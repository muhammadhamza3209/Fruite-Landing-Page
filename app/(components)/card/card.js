  
  import React from 'react'

  import Image from 'next/image'
  
  function Card(props) {
    return (
      <>


      <div className="max-w-[350px]">
      <div className="border-2 text-center px-3 py-8">
          <Image className="mx-auto " src={props.src} alt="pp" />
          <p className="pt-5 pb-3 text-red-800 text-2xl">{props.title}</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing
elit. Quod tenetur qui possimus odio tempora
fuga. Esse doloribus odit aspernatur a?</p>

        </div>
      </div>
        
      </>
    )
  }
  export default Card

