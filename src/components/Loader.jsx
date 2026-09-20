export default function Loader() {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-3">
      <div className="w-10 h-10 rounded-full border-4 border-slate-200 border-t-pink-500 animate-spin" />
      <p className="text-sm text-slate-500">Loading technologies…</p>
    </div>
  );
}
