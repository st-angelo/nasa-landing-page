import Typography from './common/Typography';

const Headline = ({ title, tag, content, background, className }) => (
  <div
    className={`relative rounded-md bg-bordeaux-700 hover:bg-bordeaux-600 ${className}`}
  >
    {tag && (
      <span className='absolute bottom-0 left-0 px-5 py-2 text-sm uppercase text-white'>
        {tag}
      </span>
    )}
    <div className='m-5 mb-28 flex w-[60%] flex-col'>
      <Typography className='text-lg font-extrabold text-white'>
        {title}
      </Typography>
      <p className='text-sm mt-2'>{content}</p>
    </div>
  </div>
);

export default Headline;
