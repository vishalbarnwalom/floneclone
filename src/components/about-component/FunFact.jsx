import { useEffect, useState } from "react";
import { PiSuitcaseSimpleThin } from "react-icons/pi";
import { PiTrophyThin } from "react-icons/pi";
import { PiLightbulbThin } from "react-icons/pi";
import { CiFaceSmile } from "react-icons/ci";

const FunFactOne = () => {
  const stats = [
    { id: 1, icon: <PiSuitcaseSimpleThin className="text-6xl text-black-600" />, count: 360, title: "Project Done" },
    { id: 2, icon:  <PiTrophyThin  className="text-6xl text-black-600" />, count: 690, title: "Cups of Coffee" },
    { id: 3, icon: <PiLightbulbThin className="text-6xl text-black-600" />, count: 100, title: "Branding" },
    { id: 4, icon: <CiFaceSmile className="text-6xl text-black-600" />, count: 420, title: "Happy Clients" },
  ];

  const [visibleCounts, setVisibleCounts] = useState(
    stats.map(() => 0)
  );

  useEffect(() => {
    const duration = 1500;
    const frameRate = 30;
    const totalFrames = Math.round(duration / (1000 / frameRate));

    stats.forEach((stat, index) => {
      let frame = 0;
      const counter = setInterval(() => {
        frame++;
        const progress = frame / totalFrames;
        const current = Math.round(stat.count * progress);
        setVisibleCounts((prev) =>
          prev.map((val, i) => (i === index ? current : val))
        );
        if (frame === totalFrames) clearInterval(counter);
      }, 1000 / frameRate);
    });
  }, []);

  return (
    <div className="py-20 bg-white-100">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => (
          <div
            key={stat.id}
            className="flex flex-col items-center transition  duration-300"
          >
            <div className="text-4xl mb-2">{stat.icon}</div>
           <h1 className="text-3xl font-bold text-[#a749ff]">
              {visibleCounts[index]}
            </h1>
            <p className="text-gray-700 capitalize">{stat.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FunFactOne;
