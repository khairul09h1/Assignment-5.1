/**
 * Sidebar panel showing the technologies the user has added to their stack.
 * Props:
 *  - stack: array of technology objects currently selected
 *  - onRemove: (id) => void, remove a single item
 *  - onRemoveAll: () => void, clear the whole stack
 */
export default function YourStack({ stack, onRemove, onRemoveAll }) {
  const count = stack.length;

  return (
    <aside className="bg-white border border-slate-200 rounded-2xl p-5 h-fit md:sticky md:top-24">
      <h3 className="font-bold text-slate-900 text-lg">Your Stack</h3>
      <p className="text-sm text-slate-400 mt-0.5">
        {count === 0 ? 'No technologies selected yet.' : `${count} Technology Selected`}
      </p>

      {/* Conditional rendering: empty state vs. list of selected items */}
      {count === 0 ? (
        <div className="mt-4 border border-dashed border-slate-200 rounded-xl py-10 text-center text-sm text-slate-400">
          Your stack is empty.
        </div>
      ) : (
        <>
          <div className="mt-4 flex flex-col gap-2 max-h-96 overflow-y-auto stack-scroll pr-1">
            {stack.map((item) => (
              <div
                key={item.id}
                className="flex items-center gap-3 border border-slate-200 rounded-xl px-3 py-2.5"
              >
                <img
                  src={item.icon}
                  alt={`${item.name} logo`}
                  className="w-7 h-7 object-contain shrink-0"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-semibold text-slate-900 truncate">{item.name}</p>
                  <p className="text-xs text-slate-400">{item.category}</p>
                </div>
                <button
                  type="button"
                  aria-label={`Remove ${item.name} from stack`}
                  onClick={() => onRemove(item.id)}
                  className="text-slate-400 hover:text-rose-500 transition-colors shrink-0"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={2}
                    className="w-4 h-4"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            onClick={onRemoveAll}
            className="mt-4 w-full py-2.5 rounded-lg font-semibold text-sm text-rose-500 border border-rose-200 hover:bg-rose-50 transition-colors"
          >
            Remove All
          </button>
        </>
      )}
    </aside>
  );
}
