import DesktopNavbar from "./DesktopNavbar";
import MobileNavbar from "./MobileNavbar";

export default function Navbar() {
  return (
    <>
      {/* Desktop */}
      <div className="hidden md:block">
        <DesktopNavbar />
      </div>

      {/* Mobile */}
      <div className="md:hidden">
        <MobileNavbar />
      </div>
    </>
  );
}
