import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Painting1 from "@/image/1.png"
import Painting2 from "@/image/2.png"
import Painting3 from "@/image/3.png"
import Painting4 from "@/image/4.png"

export default function Experience() {
  return (
    <div className="w-full h-full rounded-2xl bg-white/40 p-12 text-amber-50 overflow-y-auto">
      {/* Header */}
      <h1 className="text-7xl font-['Playfair_Display'] text-center mb-12">
        Experience
      </h1>

      {/* Description */}
      <p className="text-2xl text-center max-w-4xl mx-auto mb-24 leading-relaxed">
        I have experience leading and creating sustainability initiatives at international associations and local foundation, 
        participating in COP28 negotiations as an UAE youth delegate, and advocating for institutional sustainability in Taiwan.
      </p>

      {/* Experience Grid with Divider */}
      <div className="relative grid grid-cols-1 md:grid-cols-2 gap-16">
        {/* Vertical Divider Line */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-amber-200/30 -translate-x-1/2"></div>

        {/* Volunteering Section */}
        <div className="flex justify-center">
          <div className="max-w-md space-y-8">
            <h2 className="text-4xl font-['Playfair_Display'] text-amber-300/70 mb-8">
              volunteering
            </h2>

            <div className="space-y-4">
              <p className="text-amber-200/90">Jan 2020 - present | Taipei, Taiwan</p>
              <h3 className="text-2xl text-amber-200">Digital Archeive & Education</h3>
              <p className="text-xl">CHI PO-LIN FOUNDATION</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-4 py-1 bg-amber-900/30 rounded-full">sustainability</span>
                <span className="px-4 py-1 bg-amber-900/30 rounded-full">leadership</span>
                <span className="px-4 py-1 bg-amber-900/30 rounded-full">advocacy</span>
              </div>
            </div>
          </div>
        </div>

        {/* Professional Section */}
        <div className="flex justify-center">
          <div className="max-w-md space-y-8">
            <h2 className="text-4xl font-['Playfair_Display'] text-amber-300/70 mb-8">
              professional
            </h2>

            <div className="space-y-4">
              <p className="text-amber-200/90">Jul 2023 - Sep 2023 | Abu Dhabi, UAE</p>
              <h3 className="text-2xl text-amber-200">SUMMER INTERN</h3>
              <p className="text-xl">FORMOSA CLIMATE SMART SERVICE LIMITED</p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-4 py-1 bg-amber-900/30 rounded-full">sustainability</span>
                <span className="px-4 py-1 bg-amber-900/30 rounded-full">research</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
