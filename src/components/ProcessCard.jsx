const ProcessCard = ({ title, description, index }) => {
  return (
      <div className=" flex flex-col">
        <div className="text-3xl font-bold text-tt-primary flex flex-row gap-4">
          {index}
          <h1 className="text-tt-black  text-xl pt-1 ">{title}</h1>
        </div>
        <p className="text-tt-grey py-4">{description}</p>
    </div>
  );
};

export default ProcessCard;
