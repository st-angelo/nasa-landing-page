import { useMemo } from 'react';

const Typography = ({ variant: Variant = 'span', className, children }) => {
  const fragments = useMemo(() => {
    if (typeof children === 'string') return children.split('#nl#');
    return [children];
  }, [children]);

  return (
    <Variant className={className}>
      {fragments.map((f, idx) => (
        <span key={idx}>
          {f}
          {idx !== fragments.length - 1 && <br />}
        </span>
      ))}
    </Variant>
  );
};

export default Typography;
