const TextField = ({ id, name, placeholder, className, inputProps }) => {
  return (
    <div className={className}>
      <div className='relative w-full rounded-full bg-[rgba(255,255,255,0.2)] py-3 px-5'>
        <input
          id={id}
          name={name}
          className={`w-full bg-transparent text-sm outline-none placeholder:text-sm ${inputProps.classes}`}
          placeholder={placeholder}
        />
        <div className='absolute right-5 top-4 w-4'>
          {inputProps.endOrnament}
        </div>
      </div>
    </div>
  );
};

export default TextField;
