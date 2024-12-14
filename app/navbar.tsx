import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="w-full py-10 px-12">
      <div className="max-w-4xl mx-auto">
        {/* Navigation Container with Underline */}
        <div className="flex flex-wrap items-center text-sm border-b-2 border-white">
          {/* Primary Navigation */}
          <div className="flex items-center space-x-7 flex-grow mr-7 py-4">
            <Link href="/" className="text-gray-300 hover:text-white font-bold">
              Home
            </Link>
            <Link href="/about" className="text-gray-300 hover:text-white font-bold">
              About
            </Link>
            <Link href="/components" className="text-gray-300 hover:text-white font-bold">
              Components
            </Link>
            <Link href="/recipes" className="text-gray-300 hover:text-white font-bold">
              Recipes
            </Link>
            <Link href="/catalogue" className="text-gray-300 hover:text-white font-bold">
              Catalogue
            </Link>
          </div>

          {/* Secondary Navigation */}
          <div className="flex items-center space-x-7">
            <Link href="/contact" className="text-gray-300 hover:text-white font-bold">
              Contact
            </Link>
            <Link href="/store" className="text-gray-300 hover:text-white font-bold">
              Store
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}