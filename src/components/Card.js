const Card = ({ name, level }) => {
  return (
    <div className="bg-gray-700 p-4 rounded-lg text-center shadow-lg">
      <h3 className="text-xl font-semibold">{name}</h3>
      <p className="text-gray-400">{level}</p>
    </div>
  );
};

export default Card;
