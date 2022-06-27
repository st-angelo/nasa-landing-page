import Hamburger from '@components/icons/Hamburger';
import Nasa from '@components/icons/Nasa';
import Share from '@components/icons/Share';
import NavItem from './NavItem';

const Nav = () => (
  <nav className='flex w-5/6 justify-between pt-5 text-xs lg:w-4/5'>
    <Nasa className={'w-16'} />
    <button className={'block w-6 fill-white md:hidden'}>
      <Hamburger />
    </button>
    <ul className='hidden items-center md:flex'>
      <NavItem name={'Missions'} />
      <NavItem name={'Galleries'} />
      <NavItem name={'Nasa TV'} />
      <NavItem name={'Follow NASA'} />
      <NavItem name={'Downloads'} />
      <NavItem name={'About'} />
      <NavItem name={'Nasa Audiences'} />
      <li className={'cursor-pointer'}>
        <Share className={'w-5'} />
      </li>
    </ul>
  </nav>
);

export default Nav;
