import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";

export default function Expertise() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full fixed-backdrop-blur-sm rounded-3xl p-12 shadow-xl text-white">
        {/* Header Section */}
        <h1 className="text-4xl font-['Playfair_Display'] mb-12 text-center">Expertise</h1>
        <p className="text-2xl font-['Playfair_Display'] text-center leading-relaxed text-slate-200 mb-20">
          Leadership, Communications, Web Design, Management, Advocacy, Storytelling, Journalism, Climate Policy, Research
        </p>
        
        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 text-center">
          {/* Management */}
          <div className="group relative h-[100px] hover:h-[200px] flex items-center justify-center bg-orange-200/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-200/50 hover:translate-y-2 hover:shadow-lg">
            <h2 className="text-2xl font-['Playfair_Display'] absolute top-6 inset-x-0 flex items-center justify-center text-slate-200 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-y-[8px]">
              Management
            </h2>
            <p className="text-slate-400 leading-relaxed px-4 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-yellow-400 translate-y-[-30px] group-hover:translate-y-[40px] transition-all duration-300">
              Microsoft Office Suite, Google Suite, Asana
            </p>
          </div>

          {/* Design */}
          <div className="group relative h-[100px] hover:h-[200px] flex items-center justify-center bg-orange-200/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-200/50 hover:translate-y-2 hover:shadow-lg">
            <h2 className="text-2xl font-['Playfair_Display'] absolute top-6 inset-x-0 flex items-center justify-center text-slate-200 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-y-[8px]">
              Design
            </h2>
            <p className="text-slate-400 leading-relaxed px-4 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-yellow-500 translate-y-[-30px] group-hover:translate-y-[40px] transition-all duration-300">
              Rhinoceros, Adobe Suite: Illustrator, Photoshop, Lightroom, Premiere
            </p>
          </div>

          {/* Language */}
          <div className="group relative h-[100px] hover:h-[200px] flex items-center justify-center bg-orange-200/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-200/50 hover:translate-y-2 hover:shadow-lg">
            <h2 className="text-2xl font-['Playfair_Display'] absolute top-6 inset-x-0 flex items-center justify-center text-slate-200 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-y-[8px]">
              Language
            </h2>
            <p className="text-slate-400 leading-relaxed px-4 absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-yellow-500 translate-y-[-30px] group-hover:translate-y-[40px] transition-all duration-300">
              Mandarin (Native)<br />
              English (Native)<br />
              Deutch (Intermediate)
            </p>
          </div>

          {/* Technical */}
          <div className="group relative h-[100px] hover:h-[200px] flex items-center justify-center bg-orange-200/20 rounded-xl overflow-hidden transition-all duration-300 hover:bg-blue-200/50 hover:translate-y-2 hover:shadow-lg">
            <h2 className="text-2xl font-['Playfair_Display'] absolute top-6 inset-x-0 flex items-center justify-center text-slate-200 group-hover:text-yellow-500 transition-all duration-300 group-hover:translate-y-[8px]">
              Technical
            </h2>
            <div className="text-slate-400 px-4 absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 group-hover:text-yellow-500 translate-y-[-30px] group-hover:translate-y-[40px] transition-all duration-300">
              <p className="font-semibold mb-2">Data Analysis</p>
              <p className="font-semibold mb-2">Coding</p>
              <p>html, css, c#</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
