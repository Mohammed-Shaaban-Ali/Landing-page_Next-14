import Image from "next/image";
import logo from "../../public/assets/Logo.svg";
import menu from "../../public/assets/Menu.svg";
import user from "../../public/assets/User.svg";

const navbar = ["Features", "Pricing", "Enterprise", "Careers"];
const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between px-[20px] py-[16px] lg:container lg:mx-auto">
      {/* left */}
      <div className="flex items-center gap-14">
        <Image priority width={40} src={logo} alt="Logo" />
        <ul className=" items-center gap-10 hidden lg:flex">
          {navbar.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>

      {/* right */}
      <div className="flex items-center gap-x-5">
        <div className="flex items-center">
          <h1 className="text-[#36485C] font-medium hidden lg:block mr-14 ">
            Open an Account
          </h1>
          <div className="flex items-center gap-4 ">
            <Image priority width={32} src={user} alt="user" />
            <h1 className="text-[#36485C] font-medium hidden lg:block">
              Sign In
            </h1>
          </div>
        </div>

        <Image
          priority
          width={32}
          src={menu}
          alt="menu"
          className="lg:hidden"
        />
      </div>
    </nav>
  );
};

export default Navbar;
