import Logo from "./Logo";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="absolute top-0 left-0 w-full h-[12-rem] z-50 bg-white-200 text-white px-4 lg:px-8 py-3 transition-all duration-300">
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <Logo />
        <Navigation />
      </div>
    </header>
  );
}
