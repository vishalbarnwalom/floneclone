const TextGridOne = () => {
  const data = [
    {
      id: "1",
      title: "Our Vision",
      text: "Flone provides how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."
    },
    {
      id: "2",
      title: "Our Mission",
      text: "Flone provides how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."
    },
    {
      id: "3",
      title: "Our Goal",
      text: "Flone provides how all this mistaken idea of denouncing pleasure and praising pain was born and will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth."
    }
  ];

  return (
    <div className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
        {data.map((item) => (
          <div
            key={item.id}
            className="bg-gray-100 p-6 rounded-lg shadow hover:shadow-lg transition duration-300 text-center"
          >
            <h3 className="text-xl font-semibold mb-3 text-gray-900">{item.title}</h3>
            <p className="text-gray-600 text-sm">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TextGridOne;
