import Image from 'next/image';
import Pic1 from "@/image/3.png";


export default function About() {
  return (
    <div className="w-full h-full flex items-center justify-center p-8">
      <div className="max-w-6xl w-full bg-white/40 backdrop-blur-sm rounded-3xl p-12 shadow-xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="relative h-[500px] rounded-2xl overflow-hidden">
            <Image
              src={Pic1}
              alt="Profile"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right Column - Content */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-['Playfair_Display'] mb-6 text-slate-400">About Me</h1>
            
            <div className="space-y-4 text-slate-50">
              <p className="leading-relaxed">
                Hi, I'm Anika, a passionate advocate for climate action and storytelling. 
                Currently pursuing my bachelor degree in journalism at National Chengchi University.
              </p>

              <p className="leading-relaxed">
                My passion lies in environmental advocacy. By focusing on bridging the gap between environmental policy and public understanding. 
                Through compelling storytelling, I aim to make complex international issues accessible and 
                actionable for everyone.
              </p>

              <div className="mt-8">
                <h2 className="text-xl font-semibold mb-4">Key Interests</h2>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 bg-blue-50 text-slate-950 rounded-full hover:bg-cyan-100 transition-colors cursor-pointer">
                    #PeaceJournalism
                  </span>
                  <span className="px-4 py-2 bg-sky-50 text-slate-950 rounded-full hover:bg-blue-100 transition-colors cursor-pointer">
                    #ClimatePolicy
                  </span>
                  <span className="px-4 py-2 bg-indigo-50 text-slate-950 rounded-full hover:bg-purple-100 transition-colors cursor-pointer">
                    #DigitalStorytelling
                  </span>
                  <span className="px-4 py-2 bg-cyan-50 text-slate-950 rounded-full hover:bg-teal-100 transition-colors cursor-pointer">
                    #SustainableDevelopment
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
