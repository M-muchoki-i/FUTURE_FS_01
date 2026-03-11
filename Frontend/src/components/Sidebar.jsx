
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export function Sidebar({ isOpen, onClose, routes }) {
  const location = useLocation();

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isOpen]);

  return (
    <>
      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-50 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar - FIXED: Narrower width */}
      <aside
        className={`
        fixed lg:static inset-y-0 left-0 z-50 w-48 lg:w-48 bg-white/90 backdrop-blur-sm  /* w-64 → w-48 (12rem) */
        shadow-2xl border-r border-slate-200 transform transition-transform duration-300 ease-in-out
        ${isOpen ? "translate-x-0" : "-translate-x-full"} lg:translate-x-0
      `}
      >
        <div className="flex flex-col h-full">
          {/* Logo/Header - Compact */}
          <div className="p-4 border-b border-slate-200">
            {" "}
            {/* Reduced padding */}
            <h2 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              {" "}
              {/* text-2xl → text-xl */}
              Michelle
            </h2>
            <p className="text-xs text-slate-500 mt-1">
              {" "}
              {/* text-sm → text-xs */}
              Portfolio Dashboard
            </p>
          </div>

          {/* Navigation - Compact spacing */}
          <nav className="flex-1 py-4 px-3 space-y-1">
            {" "}
            {/* Reduced padding/spacing */}
            {routes.map((route) => {
              const isActive = location.pathname === route.path;
              return (
                <Link
                  key={route.path}
                  to={route.path}
                  className={`flex items-center px-3 py-2.5 rounded-lg font-medium transition-all text-sm group ${
                    /* Smaller padding */
                    isActive
                      ? "bg-indigo-600 text-white shadow-md"
                      : "text-slate-700 hover:bg-indigo-50 hover:text-indigo-700"
                  }`}
                  onClick={onClose}
                >
                  <svg
                    className="w-4 h-4 mr-2.5 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    {" "}
                    {/* Smaller icons */}
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d={route.icon}
                    />
                  </svg>
                  {route.label}
                </Link>
              );
            })}
          </nav>

          {/* Footer - Compact */}
          <div className="p-4 border-t border-slate-200 mt-auto">
            {" "}
            {/* Reduced padding */}
            <div className="text-xs text-slate-500 text-center">
              © 2026 Michelle Muchoki • Nairobi
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}
