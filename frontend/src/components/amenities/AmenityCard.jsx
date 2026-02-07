export default function AmenityCard({ icon, title, description }) {
  return (
    <div className="bg-white p-8 rounded-xl border border-[#e6d7d0] hover:shadow-xl transition-shadow group">
      <span className="material-symbols-outlined text-4xl text-primary mb-4 group-hover:scale-110 transition-transform">
        {icon}
      </span>
      <h3 className="font-bold text-lg mb-2">{title}</h3>
      <p className="text-sm text-gray-500">{description}</p>
    </div>
  );
}
