import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import TechGrid from './components/TechGrid.jsx';
import YourStack from './components/YourStack.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

function App() {
  const [technologies, setTechnologies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [stack, setStack] = useState([]);

  // Fetch the technology data from the local JSON file on mount.
  // This is why useEffect is needed here: fetching is a side effect
  // that should run once, after the component renders, not during render.
  useEffect(() => {
    fetch('/technologies.json')
      .then((res) => {
        if (!res.ok) throw new Error('Failed to load technologies');
        return res.json();
      })
      .then((data) => {
        setTechnologies(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const stackIds = new Set(stack.map((item) => item.id));

  const handleAdd = (tech) => {
    if (stackIds.has(tech.id)) {
      toast.warn(`${tech.name} is already in your stack.`);
      return;
    }
    setStack((prev) => [...prev, tech]);
    toast.success(`${tech.name} added to your stack.`);
  };

  const handleRemove = (id) => {
    const removed = stack.find((item) => item.id === id);
    setStack((prev) => prev.filter((item) => item.id !== id));
    if (removed) toast.info(`${removed.name} removed from your stack.`);
  };

  const handleRemoveAll = () => {
    if (stack.length === 0) return;
    setStack([]);
    toast.info('Your stack has been cleared.');
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />

        <section id="technologies" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="mb-8">
            <h2 className="text-3xl font-extrabold text-slate-900">
              Explore the <span className="brand-gradient-text">Technologies</span>
            </h2>
            <p className="mt-2 text-slate-500">
              Pick one technology per category to build your ideal stack.
            </p>
          </div>

          {loading ? (
            <Loader />
          ) : error ? (
            <p className="text-center text-rose-500 py-16">
              Something went wrong loading the technologies: {error}
            </p>
          ) : (
            <div className="grid lg:grid-cols-[1fr_320px] gap-6 items-start">
              <TechGrid technologies={technologies} stackIds={stackIds} onAdd={handleAdd} />
              <YourStack stack={stack} onRemove={handleRemove} onRemoveAll={handleRemoveAll} />
            </div>
          )}
        </section>
      </main>
      <Footer />

      <ToastContainer
        position="bottom-right"
        autoClose={2800}
        newestOnTop
        theme="light"
      />
    </div>
  );
}

export default App;
