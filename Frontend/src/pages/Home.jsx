import { Link } from "react-router-dom";

 export function Home() {
   return (
     <div className="min-h-screen bg-gradient-to-r from-slate-900 via-purple-900/30 to-blue-900/30 lg:flex-row items-center justify-center gap-16 px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
       {/* Left - Content */}
       <div className="lg:w-1/2 text-center lg:text-left max-w-2xl mx-auto lg:mx-0">
         <div className="inline-block mb-6 p-4 bg-white/10 backdrop-blur-sm rounded-3xl border border-white/20">
           <span className="text-sm font-medium text-blue-300 tracking-wider uppercase">
             Welcome
           </span>
         </div>

         <h1 className="text-5xl md:text-7xl lg:text-8xl font-black bg-gradient-to-r from-white via-blue-100 to-purple-200 bg-clip-text text-transparent mb-8 leading-tight drop-shadow-2xl">
           MICHELLE
           <br />
           <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">
             WANGARI
           </span>
         </h1>

         <p className="text-xl md:text-2xl text-white/90 font-light leading-relaxed mb-12 max-w-lg mx-auto lg:mx-0 backdrop-blur-sm">
           Full-Stack Developer crafting innovative solutions from Nairobi
         </p>

         <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
           <Link
             to="/About"
             className="group relative bg-gradient-to-r from-emerald-500 via-green-500 to-emerald-600 text-white px-10 py-6 rounded-3xl font-bold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-500 shadow-2xl hover:shadow-3xl hover:-translate-y-2 transform backdrop-blur-sm border border-white/20 hover:border-white/40"
           >
             Explore My Work
             <span className="absolute inset-0 rounded-3xl bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
           </Link>

           <a
             href="/Michelle-Muchoki-Resume.pdf"
             download="Michelle-Muchoki-Resume.pdf"
             className="group bg-white/10 backdrop-blur-sm text-white px-10 py-6 rounded-3xl font-semibold text-lg border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300 hover:-translate-y-1 flex items-center justify-center gap-2"
           >
             📄 Resume
           </a>
         </div>
       </div>
     </div>
   );
 }


    