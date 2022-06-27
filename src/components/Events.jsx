import Typography from './common/Typography';
import Calendar from './icons/Calendar';
import Clock from './icons/Clock';
import Rocket from './icons/Rocket';

const Events = ({ className }) => {
  const events = [
    {
      date: 'Friday, Dec. 9',
      content:
        'Launch of JAXA HTV-6 Cargo Craft to Space Station, 8:26 a.m. EST (NASA TV Begins 8:00)',
    },
    {
      date: 'Saturday, Dec. 10',
      content: 'CYGNSS Prelaunch News Conference, 1 p.m. EST, NASA TV',
    },
    {
      date: 'Saturday, Dec. 10',
      content: 'CYGNSS Science Briefing, 1:45 p.m. EST, NASA TV',
    },
    {
      date: 'Monday, Dec. 12',
      content:
        'Monday, Dec. 12: CYGNSS Hurricane Mission Launch Coverage, NASA TV, 6:45 a.m. EST (Launch Window Opens 8:19 a.m.)',
    },
  ];

  return (
    <div
      className={`relative flex flex-col rounded-md bg-deepspace-700 p-5 hover:bg-deepspace-500 ${className}`}
    >
      <Typography
        variant={'h3'}
        className={`mb-3 text-lg font-extrabold text-white`}
      >
        NASA Events
      </Typography>
      {events.map((event, idx) => (
        <div key={idx} className={'my-3 flex flex-col'}>
          <div className={'flex items-center'}>
            <Clock className={'w-[.9rem] fill-horizon-500'} />
            <span className={'mx-1 text-xs font-bold text-horizon-500'}>
              {event.date}
            </span>
          </div>
          <p
            className={'mt-1 cursor-pointer text-xs leading-5 hover:text-white'}
          >
            {event.content}
          </p>
        </div>
      ))}
      <div className='flex grow items-end justify-between'>
        <div className='flex items-center'>
          <Calendar className={'w-4 fill-white'} />
          <span
            className={'ml-1 cursor-pointer text-[.6rem] uppercase text-white'}
          >
            Calendar
          </span>
        </div>
        <div className='mt-4 flex items-center'>
          <Rocket className={'w-4 fill-white'} />
          <span
            className={'ml-1 cursor-pointer text-[.6rem] uppercase text-white'}
          >
            Launches and landings
          </span>
        </div>
      </div>
    </div>
  );
};

export default Events;
