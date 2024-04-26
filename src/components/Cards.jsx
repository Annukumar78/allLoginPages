import React from "react";

function Cards({image, text, title, Btn}) {
  return (
    <>
      <div className="w-[370px] rounded-md border inline-block m-4 bg-black">
        <img
          src={image}
          alt="Laptop"
          className="h-[200px] w-full rounded-t-md object-cover"
        />
        <div className="p-4">
          <h1 className="inline-flex items-center text-lg font-semibold font-serif text-yellow-50 ">
            {title} 
          </h1>
          <p className="mt-3 text-sm text-white">
           {text}
          </p>
          <button
            type="button"
            className="mt-4 w-full rounded-lg border-4 border-indigo-500/50 bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
          >
        {Btn}
          </button>
        </div>
      </div>
    </>
  );
}

export default Cards;
