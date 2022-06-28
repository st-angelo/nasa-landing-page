import { Fragment } from 'react';
import Typography from './Typography';

const TextBuilder = ({ components, className }) => (
  <span>
    {components.map((component, idx) => {
      if (component.type === 'hashtag')
        return (
          <Typography
            key={idx}
            className={`cursor-pointer uppercase text-horizon-500 hover:text-horizon-700 ${className}`}
          >
            {component.value}
          </Typography>
        );
      if (component.type === 'anchor')
        return (
          <Typography
            key={idx}
            className={`cursor-pointer text-horizon-500 hover:text-horizon-700 hover:underline ${className}`}
          >
            {component.value}
          </Typography>
        );
      return (
        <Typography key={idx} className={className}>
          {component.value}
        </Typography>
      );
    })}
  </span>
);

export default TextBuilder;
