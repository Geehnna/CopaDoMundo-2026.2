import { Outlet, Link, useLocation } from "react-router";
import { Trophy, Calendar, Users, Target } from "lucide-react";

export function Layout() {
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-200 via-white to-green-200">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-3">
              <Trophy className="w-8 h-8 text-yellow-600" />
              <div>
                <h1 className="font-bold text-gray-900 text-xl">Copa do Mundo 2026</h1>
                <p className="text-xs text-gray-600">EUA • Canadá • México</p>
              </div>
            </Link>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex items-center gap-1 mt-4 overflow-x-auto">
            <Link
              to="/"
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                isActive("/") && location.pathname === "/"
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Trophy className="w-4 h-4" />
              Início
            </Link>
            <Link
              to="/calendario"
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                isActive("/calendario")
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Calendar className="w-4 h-4" />
              Calendário
            </Link>
            <Link
              to="/grupos"
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                isActive("/grupos")
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Users className="w-4 h-4" />
              Grupos
            </Link>
            <Link
              to="/eliminatorias"
              className={`px-3 py-2 rounded-lg transition-all flex items-center gap-2 whitespace-nowrap text-sm ${
                isActive("/eliminatorias")
                  ? "bg-purple-600 text-white"
                  : "text-gray-700 hover:bg-gray-100"
              }`}
            >
              <Target className="w-4 h-4" />
              Eliminatórias
            </Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-6">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-white/80 backdrop-blur-md border-t border-gray-200 mt-12">
        <div className="container mx-auto px-4 py-6 text-center text-gray-600 text-sm">
          <p>Copa do Mundo FIFA 2026 • EUA, Canadá e México</p>
          <p className="mt-1">11 de junho - 12 de julho de 2026</p>
        </div>
      </footer>
    </div>
  );
}
