import Link from "next/link";
import Banner from "./components/Banner";
import DashboardIntro from "./components/DashboardIntro";
import CompanyUpdates from "./components/CompanyUpdates";
import SwiperComponent from "./components/SwiperComponent";

export default function Home() {
  return (
    <>
      <Banner />
      <DashboardIntro />
      <CompanyUpdates />
      <SwiperComponent />
    </>
  );
}
