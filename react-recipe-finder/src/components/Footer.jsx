export default function Footer() {
  return (
    <footer className="bg-green-600 text-white text-center py-4 mt-6">
      &copy; {new Date().getFullYear()} Recipe Finder. All rights reserved.
    </footer>
  );
}
