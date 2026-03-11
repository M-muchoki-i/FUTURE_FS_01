import { Link } from "react-router-dom";


const skills = [
  // Moved outside component to fix scope issue
  { name: "React.js", category: "Frontend", level: "Beginer" },
  { name: "JavaScript", category: "Frontend", level: "Beginer" },
  { name: "Python", category: "Backend", level: "Beginer" },
  { name: "Flask", category: "Backend", level: "Beginer" },
  { name: "SQL", category: "Database", level: "Intermediate" },
  { name: "PostgreSQL", category: "Database", level: "Intermediate" },
];

export function About() {
  
  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50">
      {/* Header */}
      <div className="text-center mb-16">
        <h1 className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent mb-6">
          About Me
        </h1>
      </div>

      {/* Two-column layout: Bio LEFT, Skills RIGHT */}
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-start mb-20">
        
        {/* About Bio - LEFT SIDE */}
        <div className="lg:pr-8">
          <div className="p-8 bg-white/80 backdrop-blur-sm bg-opacity-90 rounded-3xl shadow-2xl border border-white/50 hover:shadow-3xl transition-all duration-500">
            <h2 className="text-3xl font-bold text-gray-900 mb-6 bg-gradient-to-r from-gray-900 to-gray-700 bg-clip-text text-transparent">
              About Michelle
            </h2>
            <p className="text-lg leading-relaxed text-gray-700 font-light tracking-wide">
              I'm Michelle Wangari, a passionate full-stack developer from Nairobi. I recently graduated with a Diploma in Computer Science and earned a certification in software development, fueling my drive to build innovative solutions. With hands-on expertise in React.js for dynamic frontends, Python and Flask for robust backends, plus SQL and PostgreSQL for efficient data handling, I create seamless, scalable web applications. My projects blend clean code with user-focused design to solve real-world challenges.
            </p>
          </div>
        </div>

        {/* Skills Section - RIGHT SIDE */}
        <div className="lg:pl-8">
          <div className="p-8 bg-white/80 backdrop-blur-sm bg-opacity-90 rounded-3xl shadow-2xl border border-white/50 sticky top-24">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Skills
            </h2>
            <p className="text-xl text-gray-600 mb-8 max-w-md">
              Technologies I use to build scalable, modern web applications
            </p>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="group bg-gradient-to-r from-indigo-50 to-blue-50 p-6 rounded-2xl border border-indigo-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 hover:border-blue-200 cursor-pointer"
                >
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors">
                      {skill.name}
                    </h3>
                    <span className="px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full group-hover:bg-blue-200 transition-colors">
                      {skill.level}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-3">{skill.category}</p>
                  <div className="w-full bg-gray-200 rounded-full h-2 group-hover:bg-gray-300 transition-colors">
                    <div 
                      className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-700"
                      style={{ width: skill.level === 'Advanced' ? '90%' : '70%' }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Resume Download + Navigation */}
      <div className="text-center space-y-4">
        <a
          href="/Michelle Wangari Muchoki-resume.pdf" // Replace with your actual resume file path
          download="Michelle Wangari Muchoki-resume.pdf"
          className="inline-block bg-gradient from-emerald-500 to-green-600 text-red px-8 py-4 rounded-xl font-semibold text-lg hover:from-emerald-600 hover:to-green-700 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 transform"
        >
          📄 Download My Resume
        </a>

        <Link
          to="/Home"
          className="inline-block bg-gray-800 text-white px-6 py-3 rounded-lg font-medium hover:bg-gray-900 transition-colors duration-200 ml-4"
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
