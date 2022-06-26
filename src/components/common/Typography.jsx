import { useMemo } from 'react';

const Typography = ({ variant: Variant = 'span', className, children }) => {
  const fragments = useMemo(() => {
    if (typeof children === 'string') return children.split('#nl#');
    return [children];
  }, [children]);

  return (
    <Variant className={className}>
      {fragments.map((f, idx) => (
        <>
          {f}
          {idx !== fragments.length - 1 && <br />}
        </>
      ))}
    </Variant>
  );
};

export default Typography;
