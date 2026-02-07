export default function ExperienceCard({
  title,
  description,
  image,
  badge,
  cta,
  note,
  reverse,
}) {
  return (
    <div
      className={`flex flex-col lg:flex-row ${
        reverse ? "lg:flex-row-reverse" : ""
      } bg-white rounded-2xl overflow-hidden shadow-md group`}
    >
      <div className="lg:w-1/3 h-64 lg:h-auto overflow-hidden">
        <img
          src={image}
          alt=""
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
        />
      </div>

      <div
        className={`lg:w-2/3 p-10 flex flex-col justify-center ${
          reverse ? "text-left lg:text-right" : ""
        }`}
      >
        <div
          className={`flex ${
            reverse ? "flex-row-reverse" : ""
          } justify-between items-start mb-4`}
        >
          <h3 className="serif-heading text-2xl font-bold">{title}</h3>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-bold uppercase">
            {badge}
          </span>
        </div>

        <p className="text-gray-600 mb-6 max-w-xl">{description}</p>

        <div
          className={`flex items-center gap-6 ${
            reverse ? "flex-row-reverse" : ""
          }`}
        >
          <button className="bg-primary text-white px-6 py-2 rounded text-sm font-bold">
            {cta}
          </button>
          <span className="text-gray-400 text-sm font-medium">{note}</span>
        </div>
      </div>
    </div>
  );
}
