import Carousel from '@components/common/Carousel';
import Footer from '@components/common/Footer';
import Nav from '@components/common/Nav';
import ResponsiveList from '@components/common/ResponsiveList';
import TextField from '@components/common/TextField';
import Events from '@components/Events';
import Headline from '@components/Headline';
import Facebook from '@components/icons/Facebook';
import Google from '@components/icons/Google';
import Hamburger from '@components/icons/Hamburger';
import Magnifier from '@components/icons/Magnifier';
import PinterestCircle from '@components/icons/PinterestCircle';
import Play from '@components/icons/Play';
import Plus from '@components/icons/Plus';
import Twitter from '@components/icons/Twitter';
import Story from '@components/Story';
import Tweets from '@components/Tweets';

const Home = () => (
  <div className='flex min-h-screen flex-col items-center overflow-hidden bg-deepspace-600'>
    <header className='flex w-full flex-col items-center'>
      <Nav />
      <section className='my-20 flex flex-col items-center'>
        <h2 className='text-3xl font-[300] text-white transition-all md:text-[2.5rem]'>
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
              'w-[20rem] focus:w-[21rem] md:w-[26rem] transition-all md:focus:w-[27rem]',
          }}
        />
      </section>
    </header>
    <section className='mt-48 flex text-white'>
      <Play className='w-12 cursor-pointer' />
      <div className='mx-4 flex flex-col'>
        <span className='text-xs uppercase'>Live Stream</span>
        <span className='font-bold'>Expedition 51 Launch</span>
        <span className='text-xs'>Start at 12:00</span>
      </div>
    </section>
    <section className='mt-48 flex flex-col items-center'>
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
          size={'large'}
          className={'md:row-span-2 md:row-start-1'}
        />
        <Story
          title={'NASA Runs First-Ever Test of New Jet Engine Tech'}
          tag={'aeronautics'}
          className={''}
        />
        <Story
          title={
            "NASA Administrator Statement on ESA's Commitment to Space Station"
          }
          className={''}
        />
        <Story
          title={'TIMED: 15 Years Exploring Our Interface to Space'}
          tag={'timed'}
          className={''}
        />
        <Story
          title={'Cassini Beams Back First Images from New Orbit'}
          tag={'cassini'}
          className={''}
        />
        <Story
          title={'Curiosity Rover Team Examining New Drill Hiatus'}
          tag={'mars curiosity'}
          className={''}
        />
        <Story title={'Interstellar trailer'} className={''} />
        <Headline
          title={"Modern Figures: NASA's Past and Future"}
          tag={"nasa's modern figures"}
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
            'relative min-h-[40rem] rounded-md bg-bordeaux-700 hover:bg-bordeaux-600 lg:col-span-2 xl:col-span-3'
          }
        >
          <span className='absolute top-0 left-0 bg-[rgba(0,0,0,0.1)] px-4 py-1 text-sm uppercase text-white'>
            image of the day
          </span>
          <div
            className={
              'absolute -bottom-14 right-[12.5%] flex min-h-[15rem] w-3/4 flex-col items-start rounded-md bg-[rgba(0,0,0,0.2)] p-4 hover:bg-[rgba(0,0,0,0.4)] md:p-6 lg:-right-14 lg:top-[12.5%] lg:h-3/4 lg:w-80'
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
    <section className='mt-20 flex flex-col items-center'>
      <h1 className='text-[2.5rem] font-extrabold text-white'>Our missions</h1>
      <p className='mx-2 mt-5 max-w-[45rem] text-center leading-7'>
        Ten field centers and a variety of installations conduct the day-to-day
        work, in labora-tories, on air fields, in wind tunnels and in control
        rooms.
      </p>
    </section>
    <section className='mt-16 w-5/6 max-w-[91rem] lg:w-3/4'>
      <Carousel />
    </section>
    <section className='flex h-[45rem] items-center justify-center text-4xl font-extrabold text-white'>
      #TODO
    </section>
    <footer className='mb-6'>
      <Footer />
    </footer>
  </div>
);

export default Home;
