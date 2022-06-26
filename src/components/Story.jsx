import Typography from './common/Typography';

const Story = ({ title, tag, background, size = 'small', className }) => (
  <div
    className={`relative flex flex-col justify-end rounded-md min-h-[16rem] bg-bordeaux-700 hover:bg-bordeaux-600 ${className}`}
  >
    {tag && (
      <span className='absolute top-0 left-0 bg-[rgba(0,0,0,0.1)] px-4 py-1 text-sm uppercase text-white'>
        {tag}
      </span>
    )}
    <Typography
      variant={'h3'}
      className={`p-5 font-extrabold text-white ${
        size === 'small' ? 'text-lg' : 'text-2xl'
      }`}
    >
      {title}
    </Typography>
  </div>
);

export default Story;
