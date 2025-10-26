import React from 'react';
import Image from 'next/image';

const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-20 lg:pt-28">
      <div className="relative z-10 container px-4 mx-auto">
        <div className="relative mb-24 text-center md:max-w-4xl mx-auto">
          <Image
            className="absolute top-44 -left-36"
            src="/images/star2.svg"
            alt=""
            width={24}
            height={24}
          />
          <Image
            className="absolute top-10 -right-36"
            src="/images/star2.svg"
            alt=""
            width={24}
            height={24}
          />
          <span className="inline-block mb-2.5 text-sm text-green-400 font-medium tracking-tighter">
            Savings Card
          </span>
          <h1 className="font-heading mb-10 text-7xl lg:text-8xl xl:text-10xl text-white tracking-tighter">
            Making credit history with our card
          </h1>
          <a
            className="inline-block px-8 py-4 tracking-tighter bg-green-400 hover:bg-green-500 text-black focus:ring-4 focus:ring-green-500 focus:ring-opacity-40 rounded-full transition duration-300"
            href="#"
          >
            Start now
          </a>
        </div>
        <div className="relative max-w-max mx-auto">
          <Image src="/images/card-half.png" alt="" width={400} height={300} />
          <Image
            className="absolute top-7 -right-64"
            src="/images/star.svg"
            alt=""
            width={32}
            height={32}
          />
        </div>
      </div>
      <Image
        className="absolute bottom-0 right-0"
        src="/images/lines2.svg"
        alt=""
        width={300}
        height={200}
      />
    </section>
  );
};

export default HeroSection;