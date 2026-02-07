export default function HeroSearch() {
  return (
    <div className="w-full max-w-[900px] bg-white p-3 rounded-xl shadow-2xl flex flex-col md:flex-row gap-2">
      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer">
        <span className="material-symbols-outlined text-primary">
          calendar_month
        </span>
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold text-gray-400">
            Check-in / Out
          </p>
          <p className="text-sm font-medium">Select Dates</p>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer">
        <span className="material-symbols-outlined text-primary">group</span>
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold text-gray-400">
            Guests
          </p>
          <p className="text-sm font-medium">2 Adults, 1 Child</p>
        </div>
      </div>

      <div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-lg hover:bg-gray-50 cursor-pointer">
        <span className="material-symbols-outlined text-primary">bed</span>
        <div className="text-left">
          <p className="text-[10px] uppercase font-bold text-gray-400">
            Room Type
          </p>
          <p className="text-sm font-medium">Royal Suite</p>
        </div>
      </div>

      <button className="bg-primary text-white px-8 py-4 rounded-lg font-bold hover:bg-terracotta transition-colors flex items-center justify-center gap-2">
        <span className="material-symbols-outlined">search</span>
        Check Availability
      </button>
    </div>
  );
}
