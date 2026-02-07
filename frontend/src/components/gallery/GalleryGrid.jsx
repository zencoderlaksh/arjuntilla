import { galleryImages } from "./galleryImages";

export default function GalleryGrid() {
  return (
    <section className="py-24 px-6 lg:px-20 max-w-[1280px] mx-auto">
      <div className="flex justify-between items-end mb-12">
        <div>
          <h2 className="serif-heading text-4xl font-bold mb-2">
            Villa Gallery
          </h2>
          <p className="text-gray-500">Glimpses into your private sanctuary</p>
        </div>

        <button className="text-sm font-bold uppercase tracking-wider text-primary border border-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-all">
          View All
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 auto-rows-[250px]">
        {galleryImages.map((img, index) => (
          <div
            key={index}
            className={`overflow-hidden rounded-xl ${img.className}`}
          >
            <img
              src={img.src}
              alt=""
              className="w-full h-full object-cover hover:scale-110 transition duration-500"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
