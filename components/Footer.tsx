import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="text-gray-600 body-font bg-black">
      <div className=" h-32 px-5 py-8 mx-auto flex justify-around items-center sm:flex-row flex-col">
        <p className="text-medium text-slate-200 sm:ml-4 sm:pl-4 sm:py-2 sm:mt-0 mt-4">
          © 2024 KOSEONGIN All rights reserved.
        </p>
        <span className="inline-flex">
          <Link href={"https://github.com/rhtjddls123"} target="_blank">
            <Image
              src={"/github-mark.png"}
              alt="github-mark"
              width={30}
              height={30}
              className="mr-4"
            />
          </Link>
          <Link href={"https://velog.io/@jjjk0605"} target="_blank">
            <Image
              src={"/blog-mark.png"}
              alt="blog-mark"
              width={30}
              height={30}
              className="mr-4"
            />
          </Link>
          <Link href={"https://www.instagram.com/jjjk0605/"} target="_blank">
            <Image
              src={"/instagram-mark.png"}
              alt="instagram-mark"
              width={30}
              height={30}
            />
          </Link>
        </span>
      </div>
    </footer>
  );
};

export default Footer;
