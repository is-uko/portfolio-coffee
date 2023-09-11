import Image from "next/image";

export default function Menu() {
  return (
    <div className="pb-20">
      <h2 className="bg-[url('/img/menu.jpg')] bg-cover lg:bg-fixed text-white text-[64px] font-bold text-center leading-[16rem] h-64 mb-10">
        MENU
      </h2>
      <div className="lg:w-2/3 mx-auto lg:flex lg:justify-between">
        <div className="pb-10 lg:w-1/2 lg:border-r-2">
          <h3 className="text-center text-4xl font-bold underline underline-offset-8 decoration-8 decoration-red-500 pb-10">
            COFFEE
          </h3>
          <table className="w-11/12 mx-auto">
            <tr>
              <td className="w-11/12 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td>¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5 ">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
            <tr>
              <td className="pt-5 border-b border-dotted border-black">
                XXXXXXXX
              </td>
              <td className="pt-5">¥500</td>
            </tr>
          </table>
        </div>
        <div className="lg:w-1/2">
          <div className="pb-10">
            <h3 className="text-center text-4xl font-bold underline underline-offset-8 decoration-8 decoration-red-500 pb-10">
              FOOD
            </h3>
            <table className="w-11/12 mx-auto">
              <tr>
                <td className="w-11/12 border-b border-dotted border-black">
                  XXXXXXXX
                </td>
                <td>¥500</td>
              </tr>
              <tr>
                <td className="pt-5 border-b border-dotted border-black">
                  XXXXXXXX
                </td>
                <td className="pt-5">¥500</td>
              </tr>
              <tr>
                <td className="pt-5 border-b border-dotted border-black">
                  XXXXXXXX
                </td>
                <td className="pt-5">¥500</td>
              </tr>
            </table>
          </div>
          <div>
            <h3 className="text-center text-4xl font-bold underline underline-offset-8 decoration-8 decoration-red-500 pb-10">
              OTHER
            </h3>
            <table className="w-11/12 mx-auto">
              <tr>
                <td className="w-11/12 border-b border-dotted border-black">
                  XXXXXXXX
                </td>
                <td>¥500</td>
              </tr>
              <tr>
                <td className="pt-5 border-b border-dotted border-black">
                  XXXXXXXX
                </td>
                <td className="pt-5">¥500</td>
              </tr>
              <tr>
                <td className="pt-5 border-b border-dotted border-black">
                  XXXXXXXX
                </td>
                <td className="pt-5">¥500</td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
