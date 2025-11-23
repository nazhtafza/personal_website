import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ModeToggle } from "@/components/mode-toggle";
import { Sheet, SheetContent, SheetTrigger, SheetClose } from "@/components/ui/sheet"; 
import { Menu } from "lucide-react"; 

const Navbar = () => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Skills", path: "/skills" },
    { name: "Portfolio", path: "/portfolio" },
  ];

  return (
    <nav className="border-b py-4 px-6 flex justify-between items-center bg-background/95 backdrop-blur supports-backdrop-filter:bg-background/60 sticky top-0 z-50 transition-colors">
      {/* LOGO */}
      <Link to="/">
        <h1 className="text-xl font-bold cursor-pointer">Zeensabbath</h1>
      </Link>

      {/*Desktop*/}
      <div className="hidden md:flex items-center gap-4">
        <div className="flex gap-2">
          {navLinks.map((link) => (
            <Link key={link.path} to={link.path}>
              <Button variant={isActive(link.path) ? "default" : "ghost"}>
                {link.name}
              </Button>
            </Link>
          ))}
        </div>
        {/* Dark Mode Toggle Desktop */}
        <ModeToggle />
      </div>

      {/* mobile*/}
      <div className="flex md:hidden items-center gap-2">
      
        <ModeToggle />

        <Sheet>
         
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-5 w-5" />
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>

       
          <SheetContent side="right"> 
            <div className="flex flex-col gap-4 mt-8">
              <h2 className="text-lg font-semibold mb-2">Menu</h2>
              {navLinks.map((link) => (
          
                <SheetClose asChild key={link.path}>
                  <Link to={link.path}>
                    <Button 
                      variant={isActive(link.path) ? "default" : "ghost"} 
                      className="w-full justify-start text-lg" 
                    >
                      {link.name}
                    </Button>
                  </Link>
                </SheetClose>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;