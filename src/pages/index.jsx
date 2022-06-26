import Nav from '@components/common/Nav';
import TextField from '@components/common/TextField';
import Events from '@components/Events';
import Headline from '@components/Headline';
import Hamburger from '@components/icons/Hamburger';
import Magnifier from '@components/icons/Magnifier';
import Play from '@components/icons/Play';
import Story from '@components/Story';

const Home = () => {
  return (
    <div className='flex min-h-screen flex-col items-center bg-deepspace-600'>
      <header className='flex w-full flex-col items-center'>
        <Nav />
        <section className='my-20 flex flex-col items-center'>
          <h2 className='text-3xl font-[300] text-white md:text-[2.5rem]'>
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
        <Play className='w-12' />
        <div className='mx-4 flex flex-col'>
          <span className='text-xs uppercase'>Live Stream</span>
          <span className='font-bold'>Expedition 51 Launch</span>
          <span className='text-xs'>Start at 12:00</span>
        </div>
      </section>
      <section className='mt-48 flex flex-col items-center'>
        <h1 className='text-3xl font-extrabold text-white md:text-[2.5rem]'>
          What Does NASA Do?
        </h1>
        <p className='mt-5 max-w-[45rem] text-center leading-7'>
          We reach for new heights and reveal the unknown for the benefit of
          humankind. Thousands of people have been working around the world -
          and off of it - for more than 50 years, finding answers. What&apos;s
          out there? What will we find? What can we learn there, or learn just
          by trying to get there, that will make life better here on Earth?
        </p>
      </section>
      <section className='mt-40 w-5/6 max-w-[88rem] lg:w-3/4'>
        <div className='md:grid-rows:5 grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:grid-rows-4 xl:grid-cols-4 xl:grid-rows-3'>
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
            title={"Modern Figures: NASA's#nl#Past and Future"}
            tag={"nasa's modern figures"}
            content={
              'The book and film "Hidden Figures" tell the story of Katherine Jognson (left) and other African-American women who were essential to the success of early spaceflight.'
            }
            className={
              'sm:row-start-5 md:col-span-2 md:col-start-1 md:row-start-4 lg:row-start-3 xl:col-start-2 xl:row-start-2'
            }
          />
          <Events
            className={
              'sm:row-start-2 md:col-start-2 md:row-span-2 md:row-start-1 lg:col-start-3 lg:row-start-1 xl:col-start-4'
            }
          />
        </div>
        <div className='my-5 flex cursor-pointer justify-center rounded-md bg-bordeaux-700 p-4 text-sm uppercase text-white hover:bg-bordeaux-600'>
          More stories
        </div>
      </section>
      <section className='mt-48 flex flex-col items-center'>
        <h1 className='text-[2.5rem] font-extrabold text-white'>
          Our missions
        </h1>
        <p className='mt-5 max-w-[45rem] text-center leading-7'>
          Ten field centers and a variety of installations conduct the
          day-to-day work, in labora-tories, on air fields, in wind tunnels and
          in control rooms.
        </p>
      </section>
      <section className='grow'></section>
      <footer className='mt-20'>
        <button className={'block w-6 my-6 fill-white md:hidden'}>
          <Hamburger />
        </button>
        <ul className='hidden flex-wrap items-center py-6 text-xs md:flex'>
          <li className='px-2 lg:px-4 cursor-pointer hover:text-white'>No Fear Act</li>
          <li className='px-2 lg:px-4 cursor-pointer hover:text-white'>FOIA</li>
          <li className='px-2 lg:px-4 cursor-pointer hover:text-white'>Privacy</li>
          <li className='px-2 lg:px-4 cursor-pointer hover:text-white'>Office of Inspector General</li>
          <li className='px-2 lg:px-4 cursor-pointer hover:text-white'>Agency Financial Reports</li>
          <li className='px-2 lg:px-4 cursor-pointer hover:text-white'>Contact NASA</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
