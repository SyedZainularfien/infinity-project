const DateTimeDisplay = ({ value, type }) => {
  return (
    <div className="countdown text-white">
      <div className="pcountdown">
        <p className="text-white text-2xl font-bold">{value}</p>
      </div>
      <div className="tcountdown">
        <span className="text-white text-sm">{type}</span>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
