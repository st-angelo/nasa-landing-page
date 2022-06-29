import Typography from './common/Typography';

const Headline = ({
  title,
  tag,
  content,
  imageUrl,
  className,
  titleClasses,
}) => (
  <div
    className={`relative rounded-md  ${className} cursor-pointer bg-cover bg-center bg-no-repeat hover:brightness-[.85]`}
    style={{
      backgroundImage: `linear-gradient(to right, rgba(23,23,23,1) 40%, rgba(23,23,23,0.5) 70%, transparent), url(${imageUrl})`,
    }}
  >
    {tag && (
      <span className='absolute bottom-0 left-0 px-5 py-2 text-sm uppercase text-white'>
        {tag}
      </span>
    )}
    <div className='m-5 mb-28 flex w-[60%] flex-col'>
      <Typography
        className={`text-lg font-extrabold text-white ${titleClasses}`}
      >
        {title}
      </Typography>
      <p className='mt-2 text-sm'>{content}</p>
    </div>
  </div>
);

export default Headline;
