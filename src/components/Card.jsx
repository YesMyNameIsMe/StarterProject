import React from 'react'

function Card(props) {
  return (
    <div className="p-4">
    {/* Card Container with a Gradient Border */}
        <div className="relative h-fit w-fit rounded-2xl p-1 bg-gradient-to-r from-blue-400 to-labgreen shadow-lg transition duration-300 hover:shadow-2xl">
        {/* Inner Box */}
            <div className="relative h-fit w-fit rounded-xl p-4 bg-white transition duration-300 hover:scale-105"> 
                <img className="h-44 w-44 rounded-2xl object-cover shadow-md" 
                src={props.img}
                alt="Cat with shifty eyes."
                />
                <div className="space-y-2">
                    <h1 className="mt-4 text-center poppins-bold text-forestgreen text-xl">
                        {props.name}
                    </h1>
                    <p className="mt-4 text-center poppins-semibold text-coolgray text-md">
                        {props.desc}
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Card