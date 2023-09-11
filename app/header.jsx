import Image from "next/image";

export default function Header() {
  return (
    <header className="h-screen relative mb-5">
      <div className="absolute -z-10">
        <Image className="h-screen object-cover" src="/img/mainvisual.jpg" width={1920} height={640}></Image>
      </div>
      <ul className="flex justify-end pt-5">
        <li className="drop-shadow text-white pr-10">MENU</li>
        <li className="drop-shadow text-white pr-10">ABOUT</li>
        <li className="drop-shadow text-white pr-10">LOCATION</li>
      </ul>
      <Image
        className="drop-shadow mx-auto py-[43vh]"
        src="/img/logo.svg"
        width={500}
        height={500}
      ></Image>
    </header>
  );
}
