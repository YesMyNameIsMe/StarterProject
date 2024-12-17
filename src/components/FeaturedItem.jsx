import React from 'react'

function FeaturedItem() {
  return (
    <div className="mx-auto flex flex-col w-screen max-w-screen-lg items-center py-10">
      {/* TITLE */}
        <h1 className="text-4xl poppins-bold text-forestgreen"> Silly Cats Exhibit </h1>
        <hr className="mb-6 mt-6 w-1/3 border-forestgreen"/>

      {/* BOX */}
        <div className="bg-gradient-to-r from-forestgreen to-labgreen shadow-2xl rounded-3xl relative mx-auto flex h-fit w-1/2 flex-col p-1">
          <div className="p-8 rounded-3xl bg-white shadow-inner transition duration-500 hover:scale-105 hover:shadow-2xl">
            <div className="flex flex-row items-center">
              <img
                  className="w-1/2 mr-8 h-48 object-cover rounded-2xl shadow-md transition-transform duration-500 hover:rotate-3 hover:scale-105"
                  src="/images/me2.jpg"
                  alt="Cat Being Poured Alcohol"
              />
            {/* TEXT */}
              <div className="w-1/2 space-y-2">
                <h1 className="text-3xl poppins-bold text-forestgreen">Meet the Director</h1>
                <p className="poppins-semibold text-coolgray">The director of all things silly cats related, Tommy Nguyen.</p>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}

export default FeaturedItem