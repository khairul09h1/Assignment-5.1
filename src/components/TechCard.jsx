/**
 * A single technology card.
 * Props:
 *  - tech: the technology object from the JSON data
 *  - isAdded: whether this tech is already in the user's stack
 *  - onAdd: (tech) => void, called when "Add to Stack" is clicked
 */
export default function TechCard({ tech, isAdded, onAdd }) {
  const { name, category, description, icon, rating, difficulty, badge } = tech;

  return (
    <div className="bg-white border border-slate-200 rounded-2xl p-5 flex flex-col hover:shadow-md transition-shadow">
      <div className="flex items-start justify-between mb-4">
        <img
          src={icon}
          alt={`${name} logo`}
          className="w-9 h-9 object-contain"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.style.display = 'none';
          }}
        />
        <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-pink-50 text-pink-600 border border-pink-100">
          {badge}
        </span>
      </div>

      <h3 className="font-bold text-slate-900 text-lg">{name}</h3>
      <p className="mt-1.5 text-sm text-slate-500 flex-1">{description}</p>

      <div className="mt-4 flex flex-wrap items-center gap-2 text-xs">
        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
          {category}
        </span>
        <span className="px-2.5 py-1 rounded-full bg-slate-100 text-slate-600 font-medium">
          {difficulty}
        </span>
        <span className="flex items-center gap-1 text-amber-500 font-semibold ml-auto">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="w-4 h-4"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.958a1 1 0 00.95.69h4.162c.969 0 1.371 1.24.588 1.81l-3.368 2.447a1 1 0 00-.363 1.118l1.287 3.958c.3.921-.755 1.688-1.538 1.118l-3.367-2.447a1 1 0 00-1.176 0l-3.367 2.447c-.783.57-1.838-.197-1.538-1.118l1.287-3.958a1 1 0 00-.364-1.118L2.063 9.385c-.783-.57-.38-1.81.588-1.81h4.163a1 1 0 00.95-.69l1.285-3.958z" />
          </svg>
          {rating}
        </span>
      </div>

      <button
        type="button"
        disabled={isAdded}
        onClick={() => onAdd(tech)}
        className={
          isAdded
            ? 'mt-5 w-full py-2.5 rounded-lg font-semibold text-sm bg-emerald-50 text-emerald-600 border border-emerald-200 cursor-not-allowed'
            : 'mt-5 w-full py-2.5 rounded-lg font-semibold text-sm bg-slate-900 text-white hover:bg-slate-800 transition-colors'
        }
      >
        {isAdded ? '✓ Added to Stack' : 'Add to Stack'}
      </button>
    </div>
  );
}
