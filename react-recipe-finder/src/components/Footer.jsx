export default function Footer() {
  return (
    <footer className="bg-blue-300 text-black-200 text-center py-6 mt-12">
      <p>© {new Date().getFullYear()} Recipe Finder. All rights reserved.</p>
      <div className="flex justify-center space-x-6 mt-2">
        <a href="https://www.facebook.com/share/174Gdccfr5/?mibextid=wwXIfr" target="_blank" rel="noreferrer" className="hover:text-blue-900">Facebook</a>
        <a href="https://x.com/teemilexy7?s=21&t=7jCzWAkjBUJpmwfNpkaSiw" target="_blank" rel="noreferrer" className="hover:text-blue-900">Twitter</a>
        <a href="https://www.instagram.com/teemilexy?igsh=dGJmZW43MTdmYTJz&utm_source=qr" target="_blank" rel="noreferrer" className="hover:text-pink-900">Instagram</a>
        <a href="http://linkedin.com/in/akinloye-timilehin" target="_blank" rel="noreferrer" className="hover:text-blue-900">Linkedin</a>
      </div>
    </footer>
  );
}
