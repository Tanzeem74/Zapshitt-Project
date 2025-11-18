const WorkCard = ({ icon, title, description }) => {
    return (
        <div className="
      bg-[#F6F8F6] 
      rounded-xl 
      p-6 
      shadow-sm 
      hover:shadow-md 
      transition 
      cursor-pointer
    ">
            <div className="text-4xl mb-4">{icon}</div>

            <h3 className="text-lg font-semibold mb-2 text-gray-800">
                {title}
            </h3>

            <p className="text-gray-500 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default WorkCard;
