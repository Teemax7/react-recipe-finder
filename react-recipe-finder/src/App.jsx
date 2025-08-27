import Navbar from "./components/Navbar";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <main className="mx-auto max-w-6xl px-4 py-10">
        <section className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">
            Find Your Perfect Recipe
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Search by ingredient or dish name and save your favorites.
          </p>
        </section>
      </main>
    </div>
  );
}
