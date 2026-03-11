export function Projects() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-8 text-center">
          My Projects
        </h1>

        <div className="bg-white/80 backdrop-blur-sm shadow-lg rounded-2xl p-6 sm:p-8 border border-slate-200">
          <h2 className="text-xl sm:text-2xl font-semibold text-slate-900 mb-3">
            Animal Adoption Project
          </h2>

          <p className="text-sm text-slate-500 mb-4">
            Group project · Class assignment
          </p>

          <p className="text-slate-700 leading-relaxed mb-6">
            Animal adoption project is a website where anyone interested in
            adopting an animal can access the app and choose the animal of their
            liking. This project was a group effort and was part of our class
            assignment. Below is our README link that documents all the steps.
          </p>

          <div className="flex flex-wrap gap-3">
            <a
              href="https://www.loom.com/share/7a4dc3ffcef8431c9a37803e1df57d31?sid=60454285-38ba-4829-8030-46fe0961ad3c"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium shadow-sm hover:bg-indigo-700 transition-colors"
            >
              Watch demo
            </a>

            <a
              href="https://github.com/M-muchoki-i/animal-adoption-project#"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-4 py-2 rounded-lg border border-slate-300 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors"
            >
              View README
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
