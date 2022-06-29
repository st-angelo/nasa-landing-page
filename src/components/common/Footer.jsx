import ResponsiveList from './ResponsiveList';

const Footer = () => {
  const items = [
    'No Fear Act',
    'Privacy',
    'Office of Inspector General',
    'Agency Financial Reports',
    'Contact NASA',
  ];

  return (
    <ResponsiveList
      items={items}
      listClasses={'text-xs'}
      popoverClasses={{
        open: 'bottom-5 left-1/2 -translate-x-1/2 translate-y-0 w-60',
        closed: 'bottom-0 left-1/2 -translate-x-1/2 translate-y-full',
      }}
    />
  );
};

export default Footer;
