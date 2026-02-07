import Hero from "../components/hero/Hero";
import About from "../components/about/About";
import AmenitiesGrid from "../components/amenities/AmenitiesGrid";
import GalleryGrid from "../components/gallery/GalleryGrid";
import ExperiencesSection from "../components/experiences/ExperiencesSection";

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <AmenitiesGrid />
      <GalleryGrid />
      <ExperiencesSection />
    </>
  );
}
