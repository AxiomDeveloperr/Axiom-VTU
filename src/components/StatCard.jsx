// eslint-disable-next-line react/prop-types
const StatCard = ({ title, value }) => {
  return (
    <div>
      <div className="text-center">
        <p className="text-tt-primary font-semibold mb-2">{title}</p>
        <p className="text-tt-black text-4xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default StatCard;
