import React from 'react'

function Bookcard ({image,name,genre,author}){
  return (
    <div className='mt-auto mb-12'>
       <img src={image} alt={name} className=" w-80 h-80 object-cover"/>

       <h2 className='p-3 font-bold text-2xl text-center'>{name}</h2>

       <p className='text-2xl text-center text-gray-500'>
          {genre}
        </p>
         
        <p className='text-1xl text-center'>
            {author}
        </p>
    </div>
  )
}

export default Bookcard
