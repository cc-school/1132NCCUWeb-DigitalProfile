import Image from "next/image";
import ContactImg from "@/image/contact.png";

export default function Contact() {
  return (
    <div className="w-full h-full bg-white/40 rounded-2xl overflow-hidden">
      <div className="w-full h-full grid grid-cols-1 lg:grid-cols-2">
        {/* Left Side - Contact Form */}
        <div className="p-12 overflow-y-auto">
          <div className="max-w-xl">
            {/* Header */}
            <div className="mb-12">
              <h1 className="text-7xl font-['Playfair_Display'] text-slate-50 mb-4">
                Get in touch
              </h1>
              <h2 className="text-2xl font-['Playfair_Display'] text-slate-50 mb-4">
                Currently seeking new opportunities
              </h2>
              <p className="text-lg text-slate-50/80">
                I am interested in opportunities to advance climate action and am open to collaboration!
              </p>
            </div>

            {/* Contact Form */}
            <form className="space-y-6">
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-50 mb-2">First Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-slate-50/20 rounded-lg bg-transparent focus:outline-none focus:border-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-slate-50 mb-2">Last Name</label>
                  <input
                    type="text"
                    className="w-full p-3 border border-slate-50/20 rounded-lg bg-transparent focus:outline-none focus:border-slate-50"
                  />
                </div>
              </div>

              {/* Contact Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-slate-50 mb-2">Email *</label>
                  <input
                    type="email"
                    required
                    className="w-full p-3 border border-slate-50/20 rounded-lg bg-transparent focus:outline-none focus:border-slate-50"
                  />
                </div>
                <div>
                  <label className="block text-slate-50 mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full p-3 border border-slate-50/20 rounded-lg bg-transparent focus:outline-none focus:border-slate-50"
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block text-slate-50 mb-2">Subject</label>
                <input
                  type="text"
                  className="w-full p-3 border border-slate-50/20 rounded-lg bg-transparent focus:outline-none focus:border-slate-50"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-slate-50 mb-2">Leave me a message...</label>
                <textarea
                  rows={6}
                  className="w-full p-3 border border-slate-50/20 rounded-lg bg-transparent focus:outline-none focus:border-slate-50 resize-none"
                ></textarea>
              </div>

              {/* Submit Button */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="px-8 py-3 rounded-full border border-slate-50 text-slate-50 hover:bg-elate-50 hover:text-white transition-colors"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="hidden lg:block relative h-full">
          <Image
            src={ContactImg}
            alt="Contact Image"
            className="object-cover"
            fill
            sizes="50vw"
            priority
          />
        </div>
      </div>
    </div>
  );
}
