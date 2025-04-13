import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting1 from "@/image/1.png"
import Painting2 from "@/image/6.png"
import Painting3 from "@/image/5.png"
import Painting4 from "@/image/4.png"

export default function work() {


  return (
    <div className="w-full h-full bg-white flex flex-col justify-start items-center rounded-2xl py-12 px-6">
      
      {/* <img src={Painting1.src} className="w-full h-full object-cover rounded-2xl" /> */}
      
      {/* <Image src={Painting1} /> */}

      

      <div className="flex flex-col w-full">
        <h1 className="text-4xl font-bold">
          Work
        </h1>
        <h3 className="text-lg text-gray-600 mt-2">
          This section outlines my work related to issues storytelling, advocacy, community-building, and awareness raising. 
          My work centers around the amplification of climate action as well as fostering empathy as global citizens.
        </h3>
      </div>

      <div className="flex flex-col w-full gap-4 mt-8">
        <div className="grid grid-cols-1 sm:grid-cols-3 w-full gap-4 h-[33vh]">
          {/* First Grid Item */}
          <div className="bg-gray-200 sm:col-span-2 rounded-2xl relative overflow-hidden group" 
            style={{
              backgroundImage: `url(${Painting1.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h3 className="text-2xl font-['Playfair_Display']">Climate Action</h3>
              <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Advocating for climate policy and sustainability
              </p>
            </div>
          </div>

          {/* Second Grid Item */}
          <div className="bg-gray-200 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Painting2.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h3 className="text-2xl font-['Playfair_Display']">Nepali Times</h3>
              <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Climate journalism and storytelling
              </p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 w-full gap-4 h-[33vh]">
          {/* Third Grid Item */}
          <div className="bg-gray-200 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Painting3.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h3 className="text-2xl font-['Playfair_Display']">Global Engagement</h3>
              <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Participating in major critical events
              </p>
            </div>
          </div>

          {/* Fourth Grid Item */}
          <div className="bg-gray-200 rounded-2xl relative overflow-hidden group"
            style={{
              backgroundImage: `url(${Painting4.src})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"/>
            <div className="absolute bottom-0 left-0 right-0 p-6 text-white z-10">
              <h3 className="text-2xl font-['Playfair_Display']">Education</h3>
              <p className="mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                Environmental education initiatives
              </p>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  );
}
