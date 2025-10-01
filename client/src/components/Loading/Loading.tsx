import "./Loading.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { Line } from "rc-progress";
import { useEffect, useState } from "react";

const Loading = () => {
  const [loadingPercentage, setLoadingPercentage] = useState(0);

  useEffect(() => {
    Aos.init({
      duration: 800,
    });
    const intervalId = setInterval(() => {
      setLoadingPercentage((prevPercentage) => {
        const newPercentage = prevPercentage + 1;
        return newPercentage <= 100 ? newPercentage : prevPercentage;
      });
    }, 15);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="flex h-[100vh] w-full items-center justify-center bg-white">
      <div>
        <div className="loader">
          <div data-glitch="Rakib :)" className="glitch">
            Rakib :)
          </div>
        </div>
        <div>
          <Line
            percent={loadingPercentage}
            strokeWidth={5}
            strokeColor="#03e9f4"
            trailColor="#0a2729"
            trailWidth={5}
            strokeLinecap="butt"
          />
          <div className=" font-semibold mt-2 text-slate-700 flex items-center justify-center">
            {loadingPercentage}% Loading
            <span className="loading loading-dots loading-xs"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;