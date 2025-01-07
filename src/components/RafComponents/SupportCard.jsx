const SupportCard = ({ icon, title, description }) => {
    return (
      <div className=" card shadow-md text-center p-6 hover:shadow-lg transition-shadow duration-300">
        <div className="text-primary text-4xl mb-4">{icon}</div>
        <h3 className="font-bold text-xl mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    );
  };
  
  export default SupportCard;