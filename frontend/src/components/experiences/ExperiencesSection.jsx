import ExperienceCard from "./ExperienceCard";
import { experiencesData } from "./experiencesData";

export default function ExperiencesSection() {
  return (
    <section className="py-24 bg-background-light border-t border-[#e6d7d0]">
      <div className="max-w-[1280px] mx-auto px-6 lg:px-20">
        <div className="mb-12">
          <span className="text-primary font-bold uppercase tracking-widest text-sm">
            Beyond The Walls
          </span>
          <h2 className="serif-heading text-4xl font-bold mt-2">
            Curated Experiences
          </h2>
        </div>

        <div className="flex flex-col gap-8">
          {experiencesData.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}
