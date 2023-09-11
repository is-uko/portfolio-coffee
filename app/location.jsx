import Image from "next/image";

export default function Page() {
  return (
    <div className="pb-24">
      <h2 className="bg-[url('/img/location.jpg')] bg-cover lg:bg-fixed text-white text-[64px] font-bold text-center leading-[16rem] h-64 mb-10">
        LOCATION
      </h2>
      <div className="w-11/12 lg:w-2/3 mx-auto pb-10">
        <h3 className="text-center text-4xl font-bold underline underline-offset-8 decoration-8 decoration-red-500 pb-10">
          OUR STORE
        </h3>
        <iframe
          className="mx-auto w-full grayscale pb-10"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6484.628240765611!2d139.70201389916426!3d35.64463169039622!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188b40ba660b1b%3A0x8858088b6942f55f!2z44CSMTUwLTAwMjIg5p2x5Lqs6YO95riL6LC35Yy65oG15q-U5a-_5Y2X!5e0!3m2!1sja!2sjp!4v1694147423905!5m2!1sja!2sjp"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
        <div className="pb-5">
          <p>X-XX-XX, Ebisuminami, Shibuya-ku, Tokyo 150-0022</p>
          <p>東京都渋谷区恵比寿南X-XX-XX</p>
        </div>
        <div className="pb-5">
          <p>Open 7 days a Week</p>
          <p>9:00am to 10:00pm</p>
        </div>
        <p>Tel：XX-XXXX-XXXX</p>
      </div>
    </div>
  );
}
