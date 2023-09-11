import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="pb-20">
      <h2 className="bg-[url('/img/about.jpg')] bg-cover lg:bg-fixed text-white text-[64px] font-bold text-center leading-[16rem] h-64 mb-10">
        ABOUT
      </h2>
      <div className="pb-10">
        <h3 className="text-center text-4xl font-bold underline underline-offset-8 decoration-8 decoration-red-500 pb-10">
          COFFEE
        </h3>
        <div className="w-11/12 lg:w-2/3 mx-auto lg:flex lg:justify-between">
          <div>
            <p className="pb-5">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="pb-5">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
          <div>
            <p className="pb-5">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
            <p className="pb-14">
              テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト
            </p>
          </div>
        </div>
        <div className="text-center">
          <Link
            className="relative
                             before:absolute before:duration-150 before:-top-3 before:-left-5 before:border-t-2 before:border-l-2 before:border-red-500 before:w-5 before:h-5 before:hover:w-[132px] before:hover:h-[44px]
                             after:absolute after:duration-150 after:-bottom-3 after:-right-5 after:border-b-2 after:border-r-2 after:border-red-500 after:w-5 after:h-5 after:hover:w-[132px] after:hover:h-[44px]"
            href="#"
          >
            READ MORE
          </Link>
        </div>
      </div>
    </div>
  );
}
