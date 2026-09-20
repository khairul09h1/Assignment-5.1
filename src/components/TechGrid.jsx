import TechCard from './TechCard.jsx';

/**
 * Responsive grid of technology cards.
 * Props:
 *  - technologies: array of tech objects to display
 *  - stackIds: Set of ids already added to the stack
 *  - onAdd: (tech) => void
 */
export default function TechGrid({ technologies, stackIds, onAdd }) {
  return (
    <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-5">
      {technologies.map((tech) => (
        <TechCard
          key={tech.id}
          tech={tech}
          isAdded={stackIds.has(tech.id)}
          onAdd={onAdd}
        />
      ))}
    </div>
  );
}
