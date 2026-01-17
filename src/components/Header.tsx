import { Button } from "@/components/ui/button";
import { Bell, Menu, Settings, User } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";

const navItems = [
  { label: 'Dashboard', path: '/' },
  { label: 'Gramática', path: '/grammar' },
  { label: 'Vocabulario', path: '/vocabulary' },
  { label: 'Práctica', path: '/practice' },
  { label: 'Tests', path: '/tests' },
];

export function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 hover:bg-secondary rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
          <button 
            className="flex items-center gap-2"
            onClick={() => navigate("/")}
          >
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              English<span className="text-primary">Path</span>
            </span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => navigate(item.path)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                location.pathname === item.path 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </Button>
          <Button variant="ghost" size="icon" onClick={() => navigate("/settings")}>
            <Settings className="w-5 h-5" />
          </Button>
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center ml-2 cursor-pointer hover:bg-secondary/80">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
