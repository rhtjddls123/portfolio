import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="text-gray-600 body-font sticky top-0 bg-white shadow-md">
      <div className=" mx-auto flex flex-wrap justify-around p-5 flex-col md:flex-row items-center md:mx-24">
        <Link
          href={"/"}
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <Image src="/logo.png" alt="logo" width={40} height={40} />
          <span className="ml-3 text-xl">KSI-Portfolio</span>
        </Link>
        <nav className="md:ml-4 flex flex-wrap items-center text-base justify-center">
          <Link href={"/AboutMe"} className="mr-5 hover:text-gray-900">
            About Me
          </Link>
          <Link href={"/Archive"} className="mr-5 hover:text-gray-900">
            Archive
          </Link>
          <Link href={"/Skills"} className="mr-5 hover:text-gray-900">
            Skills
          </Link>
          <Link href={"/Projects"} className="mr-5 hover:text-gray-900">
            Projects
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
