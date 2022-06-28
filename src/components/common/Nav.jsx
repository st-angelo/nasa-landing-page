import Nasa from '@components/icons/Nasa';
import Share from '@components/icons/Share';
import ResponsiveList from './ResponsiveList';

const Nav = () => {
  const items = [
    'Missions',
    'Galleries',
    'Nasa TV',
    'Follow NASA',
    'Downloads',
    'About',
    'Nasa Audiences',
  ];

  return (
    <nav className='flex w-5/6 justify-between pt-5 lg:w-4/5'>
      <Nasa className={'w-16 shrink-0 cursor-pointer'} />
      <div className={'flex shrink-0 gap-4 sm:gap-4 md:gap-1 lg:gap-4'}>
        <ResponsiveList
          items={items}
          listClasses={'text-xs'}
          popoverClasses={'top-5 right-5 w-48'}
        />
        <Share className={'w-5 cursor-pointer fill-white'} />
      </div>
    </nav>
  );
};

export default Nav;
