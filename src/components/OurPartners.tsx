import React from "react";

function OurPartners() {
  const images = [
    "/20.webp",
    "/11.avif",
    "/12.webp",
    "/13.avif",
    "/14.webp",
    "/15.webp",
    "/16.webp",
    "/17.webp",
    "/18.webp",
    "/19.webp",
  ];
  return (
    <div className='grid xs:grid-cols-2 md:grid-cols-5 max-w-6xl mx-auto gap-4 items-center justify-center'>
      {images.map((e, i) => (
        <img
          src={e}
          key={e}
          alt={`partner ${i}`}
          className='w-[85%] mx-auto p-4 object-contain animate-none hover:animate-pulse'
        />
      ))}
    </div>
  );
}

export default OurPartners;
