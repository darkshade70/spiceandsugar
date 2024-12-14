import Image from 'next/image';
import Navbar from '../navbar';
import '../globals.css';

export default function Contact() {
  return (
      <section className="flex flex-col items-center justify-start h-[100vh] pt-10">
        <div className="text-center">
          <Image
            src="/holo-chef.png"
            width={175}
            height={175}
            alt="Holo Chef"
            className="mb-4 ml-6"
          />
          <h1 className="text-6xl text-gray-100 font-tangerine">Spice & Sugar</h1>
        </div>
        <Navbar/>
        <div className=''>
          <h1 className='text-gray-200 text-4xl static'>Contact</h1>
        </div>
      </section>
  );
}