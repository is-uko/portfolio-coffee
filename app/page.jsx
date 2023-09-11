import Header from "./header";
import Menu from "./menu";
import About from "./about";
import Location from "./location";

export default function Home() {
  return (
    <>
      <main>
        <Header></Header>
        <Menu></Menu>
        <About></About>
        <Location></Location>
      </main>
      <p className="text-center pb-5">&copy; COFFEE</p>
    </>
  );
}
