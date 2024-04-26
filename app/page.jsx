import MainPage from "@/components/MainPage";
import MobileMenu from "@/components/MobileMenu";

export default function Home() {
  return (
    <aside className="w-full h-full lg:h-screen lg:overflow-hidden">
      <MobileMenu />
      <MainPage />
    </aside>
  );
}
