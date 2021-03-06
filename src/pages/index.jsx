import Carousel from '@components/common/Carousel';
import Footer from '@components/common/Footer';
import Nav from '@components/common/Nav';
import TextField from '@components/common/TextField';
import Events from '@components/Events';
import Headline from '@components/Headline';
import Facebook from '@components/icons/Facebook';
import Google from '@components/icons/Google';
import Magnifier from '@components/icons/Magnifier';
import PinterestCircle from '@components/icons/PinterestCircle';
import Play from '@components/icons/Play';
import Plus from '@components/icons/Plus';
import Twitter from '@components/icons/Twitter';
import Story from '@components/Story';
import Tweets from '@components/Tweets';
import Image from 'next/image';

const Home = () => (
  <div className='flex min-h-screen flex-col items-center overflow-hidden bg-deepspace-600'>
    <div className='earth-background-wrapper flex w-full flex-col items-center'>
      <header className='flex w-full flex-col items-center'>
        <Nav />
        <section className='my-32 flex flex-col items-center'>
          <h2 className='whitespace-nowrap text-2xl font-[300] text-white transition-all md:text-[2.5rem]'>
            Welcome home, Earthling
          </h2>
          <TextField
            id={'search'}
            name={'search'}
            placeholder={'Search...'}
            className={'my-5'}
            inputProps={{
              endOrnament: <Magnifier />,
              classes:
                'w-[15rem] focus:w-[16rem] md:w-[26rem] transition-all md:focus:w-[27rem]',
            }}
          />
        </section>
      </header>
      <section className='earth-hiding-gradient flex w-full justify-center pt-48 pb-60 text-white'>
        <Play className='w-12 cursor-pointer' />
        <div className='mx-4 flex flex-col'>
          <span className='text-xs uppercase'>Live Stream</span>
          <span className='font-bold'>Expedition 51 Launch</span>
          <span className='text-xs'>Start at 12:00</span>
        </div>
      </section>
    </div>
    <section className='flex w-full flex-col items-center'>
      <h1 className='text-3xl font-extrabold text-white transition-all md:text-[2.5rem]'>
        What Does NASA Do?
      </h1>
      <p className='mx-2 mt-5 max-w-[45rem] text-center leading-7'>
        We reach for new heights and reveal the unknown for the benefit of
        humankind. Thousands of people have been working around the world - and
        off of it - for more than 50 years, finding answers. What&apos;s out
        there? What will we find? What can we learn there, or learn just by
        trying to get there, that will make life better here on Earth?
      </p>
    </section>
    <section className='mt-40 w-5/6 max-w-[91rem] lg:w-3/4'>
      <div className='grid gap-4 md:grid-cols-2 md:grid-rows-5 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3'>
        <Story
          title={'NASA Scientists see Asteroid through robotic eyes'}
          tag={'osiris-rex'}
          imageUrl={'/story-asteroid.jpg'}
          size={'large'}
          className={'md:row-span-2 md:row-start-1'}
        />
        <Story
          title={'NASA Runs First-Ever Test of New Jet Engine Tech'}
          tag={'aeronautics'}
          imageUrl={'/story-jet-engine.gif'}
          className={''}
        />
        <Story
          title={
            "NASA Administrator Statement on ESA's Commitment to Space Station"
          }
          imageUrl={'/story-sattelite.jpg'}
          className={''}
        />
        <Story
          title={'TIMED: 15 Years Exploring Our Interface to Space'}
          tag={'timed'}
          imageUrl={'/story-timed.jpg'}
          className={''}
        />
        <Story
          title={'Cassini Beams Back First Images from New Orbit'}
          tag={'cassini'}
          imageUrl={'/story-cassini.jpg'}
          className={''}
        />
        <Story
          title={'Curiosity Rover Team Examining New Drill Hiatus'}
          tag={'mars curiosity'}
          imageUrl={'/story-curiosity.jpg'}
          className={''}
        />
        <Story
          title={'Interstellar trailer'}
          imageUrl={'/story-interstellar.jpg'}
          playable
          className={''}
        />
        <Headline
          title={"Modern Figures: NASA's Past and Future"}
          tag={"nasa's modern figures"}
          imageUrl={'/headline.png'}
          content={
            'The book and film "Hidden Figures" tell the story of Katherine Jognson (left) and other African-American women who were essential to the success of early spaceflight.'
          }
          className={
            'row-start-1 md:col-span-2 md:col-start-1 md:row-start-4 lg:row-start-3 xl:col-start-2 xl:row-start-2'
          }
          titleClasses={'w-[22ch]'}
        />
        <Events
          className={
            'row-start-2 md:col-start-2 md:row-span-2 md:row-start-1 lg:col-start-3 lg:row-start-1 xl:col-start-4'
          }
        />
      </div>
      <div className='my-5 flex cursor-pointer justify-center rounded-md bg-bordeaux-700 p-4 text-sm uppercase text-white hover:bg-bordeaux-600'>
        More stories
      </div>
    </section>
    <section className={'mt-20 w-5/6 max-w-[91rem] lg:w-3/4'}>
      <div className={'grid gap-4 lg:grid-cols-3 xl:grid-cols-4'}>
        <Tweets />
        <div
          className={
            'relative min-h-[40rem] cursor-pointer rounded-md lg:col-span-2 xl:col-span-3'
          }
        >
          <Image
            src={'/image-of-the-day.jpg'}
            layout={'fill'}
            objectPosition={'50% 50%'}
            objectFit={'cover'}
            className={'rounded-md'}
            alt={`a`}
          />
          <span className='absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] px-4 py-1 text-sm uppercase text-white'>
            image of the day
          </span>
          <div
            className={
              'absolute -bottom-14 right-[12.5%] flex min-h-[15rem] w-3/4 flex-col items-start rounded-md bg-[rgba(0,0,0,0.4)] p-4 hover:bg-[rgba(0,0,0,0.6)] md:p-6 lg:-right-14 lg:top-[12.5%] lg:h-3/4 lg:w-80'
            }
          >
            <h3
              className={
                'w-5/6 text-lg font-extrabold text-white md:text-xl lg:mt-5'
              }
            >
              Space Station Flight Over the Southern Tip of Italy
            </h3>
            <p className={'mt-5 grow text-xs leading-7 md:w-11/12'}>
              The southern tip of Italy is visible in this image taken by the
              Expedition 49 crew aboard the Iternational Space Station on Sept.
              17, 2016. The brightly lit city of Naples can be seen in the
              bottom section of the image. A Russian Soyuz spacecraft can be
              seen in the foreground.
            </p>
            <div className={'mt-5 flex w-full items-center justify-between'}>
              <span
                className={
                  'cursor-pointer text-xs uppercase text-horizon-500 hover:text-horizon-700'
                }
              >
                download
              </span>
              <div className={'flex'}>
                <Facebook
                  className={'mx-1 w-4 cursor-pointer fill-white sm:mx-2'}
                />
                <Twitter
                  className={'mx-1 w-4 cursor-pointer fill-white sm:mx-2'}
                />
                <PinterestCircle
                  className={'mx-1 w-4 cursor-pointer fill-white sm:mx-2'}
                />
                <Google
                  className={'mx-1 w-4 cursor-pointer fill-white sm:mx-2'}
                />
                <Plus
                  className={'mx-1 w-4 cursor-pointer fill-white sm:mx-2'}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <div
      className={'rocket-background-wrapper flex w-full flex-col items-center'}
    >
      <section className='flex w-full flex-col items-center bg-deepspace-600 py-20'>
        <h1 className='text-[2.5rem] font-extrabold text-white'>
          Our missions
        </h1>
        <p className='mx-2 mt-5 max-w-[45rem] text-center leading-7'>
          Ten field centers and a variety of installations conduct the
          day-to-day work, in labora-tories, on air fields, in wind tunnels and
          in control rooms.
        </p>
      </section>
      <section className='rocket-hiding-gradient flex w-full justify-center'>
        <div className='w-5/6 max-w-[91rem] lg:w-3/4'>
          <Carousel />
        </div>
      </section>
      <section className='flex h-[45rem]'></section>
      <footer className='mb-6'>
        <Footer />
      </footer>
    </div>
  </div>
);

export default Home;
