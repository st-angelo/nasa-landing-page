import Nasa from '@components/icons/Nasa';
import Share from '@components/icons/Share';
import NavItem from './NavItem';

const Nav = () => (
  <nav className="flex justify-between text-xs pt-5 w-4/5">
    <Nasa classes={"w-16"} />
    <ul className="flex items-center">
      <NavItem name={'Missions'} />
      <NavItem name={'Galleries'} />
      <NavItem name={'Nasa TV'} />
      <NavItem name={'Follow NASA'} />
      <NavItem name={'Downloads'} />
      <NavItem name={'About'} />
      <NavItem name={'Nasa Audiences'} />
      <li>
        <Share classes={"w-5"} />
      </li>
    </ul>
  </nav>
);

export default Nav;
