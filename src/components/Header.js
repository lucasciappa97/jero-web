import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full z-50 bg-transparent text-white px-4 lg:px-8 py-8 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
