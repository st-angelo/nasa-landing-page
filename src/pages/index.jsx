import Nav from '@components/common/Nav';
import TextField from '@components/common/TextField';
import Feature from '@components/Feature';
import Magnifier from '@components/icons/Magnifier';
import Play from '@components/icons/Play';
import Story from '@components/Story';

const Home = () => {
  return (
    <div className="flex flex-col items-center min-h-screen bg-deepspace-600">
      <header className="w-full flex flex-col items-center">
        <Nav />
        <section className="flex flex-col items-center my-20">
          <h2 className="text-white text-[2.5rem] font-[300]">
            Welcome home, Earthling
          </h2>
          <TextField
            id={'search'}
            name={'search'}
            placeholder={'Search...'}
            className={'my-5'}
            inputProps={{
              endOrnament: <Magnifier />,
              classes: 'w-[26rem] transition-all focus:w-[27rem]',
            }}
          />
        </section>
      </header>
      <section className="mt-48 flex text-white">
        <Play className="w-12" />
        <div className="flex flex-col mx-4">
          <span className="text-xs uppercase">Live Stream</span>
          <span className="font-bold">Expedition 51 Launch</span>
          <span className="text-xs">Start at 12:00</span>
        </div>
      </section>
      <section className="mt-48 flex flex-col items-center">
        <h1 className="text-white text-[2.5rem] font-extrabold">
          What Does NASA Do?
        </h1>
        <p className="w-[45rem] mt-5 text-center leading-7">
          We reach for new heights and reveal the unknown for the benefit of
          humankind. Thousands of people have been working around the world -
          and off of it - for more than 50 years, finding answers. What&apos;s
          out there? What will we find? What can we learn there, or learn just
          by trying to get there, that will make life better here on Earth?
        </p>
      </section>
      <section className="mt-40 grid grid-rows-3 grid-columns-4 w-2/3">
        <Story
          title={'NASA Scientists see Asteroid through robotic eyes'}
          tag={'osiris-rex'}
          className={'row-start-1 row-span-2'}
        />
        <Story
          title={'NASA Runs First-Ever Test of New Jet Engine Tech'}
          tag={'aeronautics'}
          className={'row-start-1 row-span-2'}
        />
        <Story
          title={
            "NASA Administrator Statement on ESA's Commitment to Space Station"
          }
          className={'row-start-1 row-span-2'}
        />
        <Story
          title={'TIMED: 15 Years Exploring Our Interface to Space'}
          tag={'timed'}
          className={'row-start-1 row-span-2'}
        />
        <Story
          title={'Cassini Beams Back First Images from New Orbit'}
          tag={'cassini'}
          className={'row-start-1 row-span-2'}
        />
        <Story
          title={'Curiosity Rover Team Examining New Drill Hiatus'}
          tag={'mars curiosity'}
          className={'row-start-1 row-span-2'}
        />
        <Story
          title={'Interstellar trailer'}
          className={'row-start-1 row-span-2'}
        />
        <Feature
          title={"Modern Figures: NASA's Past and Future"}
          tag={"nasa's modern figures"}
          content={
            'The book and film "Hidden Figures" tell the story of Kather-ine Jognson (left) and other African-American women who were essential to the success of early spaceflight.'
          }
          className={'row-start-1 row-span-2'}
        />
      </section>
      <section className="mt-48 flex flex-col items-center">
        <h1 className="text-white text-[2.5rem] font-extrabold">
          Our missions
        </h1>
        <p className="w-[45rem] mt-5 text-center leading-7">
          Ten field centers and a variety of installations conduct the
          day-to-day work, in labora-tories, on air fields, in wind tunnels and
          in control rooms.
        </p>
      </section>
      <section className="grow"></section>
      <footer className="mt-20">
        <ul className="flex items-center text-xs py-6">
          <li className="px-4">No Fear Act</li>
          <li className="px-4">FOIA</li>
          <li className="px-4">Privacy</li>
          <li className="px-4">Office of Inspector General</li>
          <li className="px-4">Agency Financial Reports</li>
          <li className="px-4">Contact NASA</li>
        </ul>
      </footer>
    </div>
  );
};

export default Home;
