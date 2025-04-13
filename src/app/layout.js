import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Image from "next/image";
import AvatarImg from "@/../public/Avatar.png";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';
import LinkImg1 from "@/image/帝寶.png"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "cc's digital profile",
  description: "瀏覽人次達 1000 萬，好評熱賣中",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        
        <div className="w-screen h-screen overflow-y-auto flex flex-col sm:flex-row gap-5 bg-slate-800 p-8">

          <div className=" min-w-[320px] w-full sm:w-[320px] h-full rounded-2xl bg-white flex 
          justify-start items-center flex-col p-[30px] pt-[80px] overflow-y-auto overflow-x-hidden">
            
            <Image src={AvatarImg} alt="Avatar" className="w-[80px] h-[80px] rounded-full" />
        
            <h1 className="mt-2">賴玟希</h1>
            <p className="max-w-[380px] text-center">
              新聞三在數位內容垂死掙扎中  <br/>想休學尋找大秘寶
            </p>
            
            {/* 社群連結 */}
            <div className="flex gap-4 my-3">
              <a href="https://www.facebook.com/qwaznik/" target="_blank" className="text-gray-600 hover:text-blue-600 transition-colors">
                <FaFacebook size={24} />
              </a>

              <a href="https://www.instagram.com/qwaznik?igsh=YnpiaDNqYmltcDhw&utm_source=qr" target="_blank" className="text-gray-600 hover:text-pink-600 transition-colors">
                <FaInstagram size={24} />
              </a>

              <a href="https://www.linkedin.com/in/wensyi-lai " target="_blank" className="text-gray-600 hover:text-blue-700 transition-colors">
                <FaLinkedin size={24} />
              </a>
            </div>

            {/* 頁面切換 */}
            <div className="w-full flex flex-col gap-2">
              
              <Link href="/about">
                {/* <div className="w-full h-[84px] bg-gray-300 rounded-xl">About</div> */}
                <div className={`w-full h-[84px] bg-gray-300 rounded-xl`}>About</div>
              </Link>

              <Link href="/expertise">
                <div className="w-full h-[84px] bg-gray-300 rounded-xl">Expertise</div>
              </Link>

              <Link href="/experience">
                <div className="w-full h-[84px] bg-gray-300 rounded-xl">Experience</div>
              </Link>
              
              
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">Work</div>
              <div className="w-full h-[84px] bg-gray-300 rounded-xl">Contact</div>
            </div>

          </div>

          {children}

        </div>

      </body>
    </html>
  );
}
