import HomePage from "../components/HomePage";
import WhatIsPage from "../components/WhatIsPage";
import WhatsOnPage from "../components/WhatsOnPage";
import SeminarsPage from "../components/SeminarsPage";
import SpeakersPage from "../components/SpeakersPage";
import GalleryPage from "../components/GalleryPage";
import SponsorsPage from "../components/SponsorsPage";
import LastPage from "../components/LastPage";

export default function Home() {
  return (
    <div className="h-screen overflow-x-hidden overflow-y-auto snap-mandatory snap-y ">
      <HomePage/>
      <WhatIsPage/>
      <WhatsOnPage/>
      <SeminarsPage/>
      <SpeakersPage/>
      <GalleryPage/>
      <SponsorsPage/>
      <LastPage/>
    </div>
  )
}
