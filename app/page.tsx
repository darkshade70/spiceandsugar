import Image from 'next/image';
import Navbar from './navbar';
import './globals.css';

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-start h-[100vh]">
      {/* Logo and Heading */}
      <div className="text-center pt-10">
        <Image
          src="/holo-chef.png"
          width={175}
          height={175}
          alt="Holo Chef"
          className="mb-4 ml-6"
        />
        <h1 className="text-6xl text-white font-tangerine">Spice & Sugar</h1>
      </div>
      <Navbar />
      {/* Page Content */}
      <div className="w-full">
        <div className="max-w-5xl mx-auto px-16">
          <h1 className="text-gray-200 text-6xl font-bold">
            Cooking<br /> Made<br />Simple. <br />
          </h1>
          <p className="mt-4 text-gray-200 text-base">
            Recipes from your favourite anime, tv-shows, movies and more.
          </p>

          <div>
            <h1 className='text-gray-200 text-4xl font-semibold'><br /><br />Recipes Of the Week</h1>
          </div>

        </div>
      </div>
    </section>
  );
}