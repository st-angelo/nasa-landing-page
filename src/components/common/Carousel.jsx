import ChevronLeft from '@components/icons/ChevronLeft';
import ChevronRight from '@components/icons/ChevronRight';
import { useScreenSize } from '@utils/utils';
import Image from 'next/image';
import { useCallback, useEffect, useRef, useState } from 'react';

const Carousel = ({}) => {
  const slides = [
    {
      title: 'Hubble',
      subtitle: 'Space Telescope',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
    {
      title: 'Juno',
      subtitle: 'Mission at Jupiter',
      alignY: 'bottom',
      alignX: 'right',
      source: '/cat.jpg',
    },
    {
      title: 'New Horizon',
      subtitle: 'Pluto and Beyond',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
    {
      title: 'Cassini',
      subtitle: 'Mission at Saturn',
      alignY: 'center',
      alignX: 'right',
      source: '/cat.jpg',
    },
    {
      title: 'Curiosity',
      subtitle: 'Mars Rover',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
    {
      title: 'Curiosity',
      subtitle: 'Mars Rover',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
    {
      title: 'Curiosity',
      subtitle: 'Mars Rover',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
    {
      title: 'Curiosity',
      subtitle: 'Mars Rover',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
    {
      title: 'Curiosity',
      subtitle: 'Mars Rover',
      alignY: 'top',
      alignX: 'left',
      source: '/cat.jpg',
    },
  ];

  const [size, setSize] = useState(4);
  const [offset, setOffset] = useState(0);

  const screenSize = useScreenSize();

  useEffect(() => {
    switch (screenSize) {
      case 'sm':
        setSize(1);
        break;
      case 'md':
        setSize(2);
        break;
      case 'lg':
        setSize(3);
        break;
      default:
        setSize(4);
    }
  }, [screenSize]);

  const handleMoveLeft = useCallback(() => setOffset(prev => prev - 1), []);
  const handleMoveRight = useCallback(() => setOffset(prev => prev + 1), []);

  return (
    <div className='relative w-full'>
      <ChevronLeft
        onClick={handleMoveLeft}
        className={`absolute top-1/2 -left-6 z-10 w-3 -translate-y-1/2 cursor-pointer fill-horizon-100 hover:fill-white ${
          offset === 0 ? 'pointer-events-none fill-deepspace-200' : ''
        }`}
      />
      <ChevronRight
        onClick={handleMoveRight}
        className={`absolute top-1/2 -right-6 z-10 w-3 -translate-y-1/2 cursor-pointer fill-horizon-100 hover:fill-white ${
          offset === slides.length - size
            ? 'pointer-events-none fill-deepspace-200'
            : ''
        }`}
      />
      <div className='relative flex'>
        {slides &&
          slides.map((slide, idx) => (
            <figure
              key={idx}
              className={`relative mx-2 h-[24rem] w-[22rem] shrink-0 cursor-pointer rounded-md bg-bordeaux-700 transition-all first:ml-0 last:mr-0 hover:bg-bordeaux-600 hover:brightness-[.85] ${
                idx < offset || idx >= offset + size ? 'opacity-20' : ''
              }`}
              style={{ transform: `translateX(${23 * -offset}rem)` }}
            >
              {/* <Image
                src={slide.source}
                layout={'fill'}
                objectFit={'cover'}
                className={'rounded-md'}
                alt={`a`}
              /> */}
              <figcaption
                className={`absolute ${
                  slide.alignX === 'right'
                    ? 'right-0 text-end'
                    : slide.alignX === 'center'
                    ? 'left-1/2 -translate-x-1/2'
                    : 'left-0'
                } ${
                  slide.alignY === 'bottom'
                    ? 'bottom-0'
                    : slide.alignY === 'center'
                    ? 'top-1/2 -translate-y-1/2'
                    : 'top-0'
                }`}
              >
                <div className={'flex flex-col p-5'}>
                  <span className={'text-lg font-bold text-white'}>
                    {slide.title}
                  </span>
                  <span className={'text-xs uppercase text-white'}>
                    {slide.subtitle}
                  </span>
                </div>
              </figcaption>
            </figure>
          ))}
      </div>
    </div>
  );
};

export default Carousel;
