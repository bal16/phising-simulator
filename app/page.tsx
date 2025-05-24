'use client';

import Link from 'next/link';
import Image from 'next/image';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { slider1, slider2, slider3 } from '../assets';

const sliderImages = [
  { src: slider1, alt: 'Banner Naruto' },
  { src: slider2, alt: 'Naruto' },
  { src: slider3, alt: 'Sasuke' },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 4000,
  arrows: false,
  pauseOnHover: false,
};

export default function NewRootPage() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-tr from-purple-900 via-slate-900 to-blue-900 bg-cover bg-no-repeat bg-center text-white flex flex-col items-center justify-center px-4 py-10 sm:px-6 lg:px-8 selection:bg-yellow-400 selection:text-slate-900">
        <main className="w-full max-w-3xl text-center space-y-6">
          <div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight mb-3">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 via-orange-400 to-red-500">
                FREE
              </span>{' '}
              Exclusive Skin!
            </h1>
            <p className="text-base sm:text-lg md:text-xl text-slate-300">
              As a thank you to our amazing community, a special gift is waiting
              for you.
            </p>
          </div>

          {/* Slider */}
          <div className="rounded-xl overflow-hidden shadow-2xl shadow-yellow-500/30">
            <Slider {...settings}>
              {sliderImages.map((item, index) => (
                <div key={index} className="relative aspect-[16/9] w-full">
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 800px"
                    className="object-cover"
                    priority={index === 0}
                  />
                </div>
              ))}
            </Slider>
          </div>

          <div className="space-y-4">
            <p className="text-slate-400 text-sm sm:text-base md:text-lg">
              This is your chance to get a unique skin, absolutely free!
              Participate in our special event to unlock it.
            </p>
            <Link
              href="/claim"
              className="inline-block w-full sm:w-auto bg-gradient-to-r from-yellow-500 via-orange-500 to-red-600 hover:from-yellow-600 hover:to-red-700 text-white font-bold text-base sm:text-lg md:text-xl py-3 px-6 sm:px-10 rounded-lg shadow-lg transform transition duration-150 ease-in-out hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400 focus:ring-opacity-50"
            >
              Claim Your Free Skin Now!
            </Link>
          </div>

          <p className="text-xs text-slate-300 animate-pulse">
            Event ends soon. Don&apos;t miss out!
          </p>
        </main>

        <footer className="mt-10 text-center text-slate-400 text-xs">
          <p>
            &copy; {new Date().getFullYear()} Special Event Promotions. All
            rights reserved (for this demo).
          </p>
        </footer>
      </div>
    </>
  );
}
