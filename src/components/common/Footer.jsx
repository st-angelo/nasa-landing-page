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
      popoverClasses={'bottom-5 left-1/2 -translate-x-1/2 w-60'}
    />
  );
};

export default Footer;
