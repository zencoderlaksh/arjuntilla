import AmenityCard from "./AmenityCard";
import { amenitiesData } from "./amenitiesData";

export default function AmenitiesGrid() {
  return (
    <section className="bg-sand py-24">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="text-center mb-16">
          <h2 className="serif-heading text-4xl font-bold mb-4">
            Refined Amenities
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {amenitiesData.map((item, index) => (
            <AmenityCard key={index} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
