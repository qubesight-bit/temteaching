import { Button } from "@/components/ui/button";
import { Bell, Menu, Settings, User } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <button className="lg:hidden p-2 hover:bg-secondary rounded-lg">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl gradient-primary flex items-center justify-center">
              <span className="text-white font-bold text-lg">E</span>
            </div>
            <span className="font-display font-bold text-xl hidden sm:block">
              English<span className="text-primary">Path</span>
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="hidden lg:flex items-center gap-1">
          {['Dashboard', 'Gramática', 'Vocabulario', 'Práctica', 'Tests'].map((item, index) => (
            <button
              key={item}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                index === 0 
                  ? 'bg-primary/10 text-primary' 
                  : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
              }`}
            >
              {item}
            </button>
          ))}
        </nav>

        {/* Right side */}
        <div className="flex items-center gap-2">
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-5 h-5" />
            <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-accent rounded-full" />
          </Button>
          <Button variant="ghost" size="icon">
            <Settings className="w-5 h-5" />
          </Button>
          <div className="w-9 h-9 rounded-full bg-secondary flex items-center justify-center ml-2">
            <User className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>
    </header>
  );
}
