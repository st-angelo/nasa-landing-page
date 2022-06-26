const Story = ({ title, tag, background, className }) => (
  <div className={`relative bg-bordeaux-700 ${className}`}>
    {tag && (
      <span className="abosolute text-white top-0 left-0 uppercase bg-[rgba(0,0,0,0.1)]">
        {tag}
      </span>
    )}
    <h3 className="text-white">{title}</h3>
  </div>
);

export default Story;
