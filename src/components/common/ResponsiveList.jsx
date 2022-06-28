import Close from '@components/icons/Close';
import Hamburger from '@components/icons/Hamburger';
import { useOnScreen, useScreenSize } from '@utils/utils';
import { Fragment, useEffect, useRef, useState } from 'react';
import ClientOnlyPortal from './ClientOnlyPortal';

const ResponsiveList = ({ items, listClasses, popoverClasses }) => {
  const [open, setOpen] = useState(false);
  const handleRef = useRef(null);

  const screenSize = useScreenSize();
  const handleVisible = useOnScreen(handleRef);

  const listItems = (
    <Fragment>
      {items &&
        items.map((item, idx) => (
          <li
            className={`cursor-pointer hover:text-white md:px-2 lg:px-4`}
            key={idx}
          >
            {item}
          </li>
        ))}
    </Fragment>
  );

  useEffect(() => {
    console.log(screenSize, handleVisible);
    if (screenSize === 'md' || !handleVisible) setOpen(false);
  }, [screenSize, handleVisible]);

  return (
    <Fragment>
      <button ref={handleRef} className={'block w-6 fill-white md:hidden'}>
        <Hamburger onClick={() => setOpen(prev => !prev)} />
      </button>
      <ul className={`hidden items-center md:flex ${listClasses}`}>
        {listItems}
      </ul>
      {open && (
        <ClientOnlyPortal selector='#menus'>
          <div
            className={`fixed z-20 rounded-md bg-deepspace-300 p-5 shadow-lg shadow-deepspace-500 md:hidden ${popoverClasses}`}
          >
            <Close
              onClick={() => setOpen(false)}
              className={
                'absolute top-6 right-5 w-3 cursor-pointer fill-horizon-100 hover:fill-white'
              }
            />
            <ul className={`${listClasses} flex flex-col gap-2`}>
              {listItems}
            </ul>
          </div>
        </ClientOnlyPortal>
      )}
    </Fragment>
  );
};

export default ResponsiveList;
