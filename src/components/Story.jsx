import Typography from './common/Typography';
import PlayFill from './icons/PlayFill';

const Story = ({
  title,
  tag,
  imageUrl,
  size = 'small',
  playable,
  className,
}) => (
  <div
    className={`relative flex min-h-[18rem] flex-col justify-end rounded-md ${className} bg-cover bg-center bg-no-repeat`}
    style={{
      backgroundImage: `linear-gradient(to top, rgba(23,23,23,1) 5%, rgba(23,23,23,0.5) 25%, transparent), url(${imageUrl})`,
    }}
  >
    {tag && (
      <span className='absolute top-0 left-0 bg-[rgba(0,0,0,0.3)] px-4 py-1 text-sm uppercase text-white'>
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
    {playable && (
      <PlayFill
        className={
          'absolute top-1/2 left-1/2 w-20 -translate-x-1/2 -translate-y-1/2 cursor-pointer fill-horizon-700 hover:fill-horizon-500'
        }
      />
    )}
  </div>
);

export default Story;
