import ab1 from "../../assets/abanner-1.jpg";
import ab2 from "../../assets/abanner-2.jpg";
import ab3 from "../../assets/abanner-3.jpg";
import { LuCircleArrowRight } from "react-icons/lu";

const BannerOne = () => {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Banner 1 */}
        <div className="relative overflow-hidden  group">
  <img
    src={ab1}
    alt="Watches"
    className="w-full h-64 object-cover transform group-hover:scale-120 transition duration-500"
  />
  <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-black z-20">
    <h4 className="text-lg font-medium drop-shadow">Starting at</h4>
    <h2 className="text-2xl font-bold mb-2 drop-shadow">Watches</h2>
    <span className="text-xl font-semibold mb-4 drop-shadow">$99.00</span>
    <a href="/shop-grid-standard">
      <LuCircleArrowRight className="text-4xl" />
    </a>
  </div>
</div>


        {/* Banner 2 */}
        <div className="relative overflow-hidden group">
          <img
            src={ab2}
            alt="Plo Bag"
            className="w-full h-64 object-cover transform group-hover:scale-120 transition duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-black z-20">
            <h4 className="text-lg font-medium drop-shadow">Starting at</h4>
            <h2 className="text-2xl font-bold mb-2 drop-shadow">Plo Bag</h2>
            <span className="text-xl font-semibold mb-4 drop-shadow">$79.00</span>
            <a
              href="/shop-grid-standard"
            >
              <LuCircleArrowRight className="text-4xl" />
            </a>
          </div>
        </div>

        {/* Banner 3 */}
        <div className="relative overflow-hidden group">
          <img
            src={ab3}
            alt="Sunglass"
            className="w-full h-64 object-cover transform group-hover:scale-120 transition duration-500"
          />
          <div className="absolute inset-0 flex flex-col justify-center items-start p-6 text-black z-20">
            <h4 className="text-lg font-medium drop-shadow">Starting at</h4>
            <h2 className="text-2xl font-bold mb-2 drop-shadow">Sunglass</h2>
            <span className="text-xl font-semibold mb-4 drop-shadow">$29.00</span>
            <a
              href="/shop-grid-standard"
            
            >
            <LuCircleArrowRight className="text-4xl" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BannerOne;
