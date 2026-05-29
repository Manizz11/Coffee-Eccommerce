import React from "react";
import { FaMoneyBillWave } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { BsBagXFill } from "react-icons/bs";
import { FaBoxOpen } from "react-icons/fa6";
import ProductContent from "../section/ProductContent";
const Subscribe = () => {
  return (
    <>
      {/* Wrapper */}
      <div className="relative w-full">

        {/* Background Image */}
        <img
          className="w-full h-[700px] object-cover"
          src="/background.png"
          alt=""
        />

        {/* Overlay Text */}
        <div className="absolute top-0 left-0 w-full h-full flex items-center">

          <div className="max-w-7xl mx-auto px-6 w-full">

            {/* Text Container */}
            <div className="max-w-xl mt-20 text-white text-left">

              <h1 className="text-[65px]  text-5xl font-bold font-display">
                WELCOME TO
              </h1>

              <h1 className="text-[65px] leading-[1.2]  font-bold font-display">
                THE SOCIETY OF
              </h1>

              <h1 className="text-[65px] leading-[1] font-bold font-display">
                STRONG COFFEE
              </h1>

              <p className="mt-4 text-lg text-white/80">
                Start a coffee subscription to unlock subscriber-only perks
                including 30% off your first shipment, early access to new releases
                and more.
              </p>

              <div className="flex gap-4 mt-6">
                <button className="bg-red-600 text-white border-2 border-red-600 py-2 px-6  hover:bg-transparent transition">
                  CHOOSE YOUR COFFEE
                </button>

                <button className="bg-red-600 border-2 border-red-600 text-white py-2 px-6  hover:bg-transparent transition">
                  SHOP EXCLUSIVE MERCH
                </button>
              </div>
            </div>
          </div>
        </div>
        <h1 className="text-5xl text-center font-bold font-display text-white mt-7">SOCIETY BENEFITS</h1>
      </div>
      <div className="max-w-7xl mx-auto mt-16 px-6 text-white grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

  {/* Card 1 */}
  <div className="text-center">
    <FaMoneyBillWave className="text-4xl text-red-600 mb-4 mx-auto w-28 h-28" />
    <p className="font-bold text-2xl mb-3">
      BUY MORE, SAVE MORE
    </p>

    <p className="text-white/70 leading-relaxed">

      You’ve entered the elite realm of caffeinators. Save up to 30% off
      subscription-eligible coffee products. The more you buy, the more
      you save.
    </p>
  </div>

  {/* Card 2 */}
  
  <div className="text-center">
    <TbTruckDelivery className="text-4xl text-red-600 mb-4 mx-auto w-28 h-28" />
    <p className="font-bold text-2xl mb-3">
      FREE SHIPPING FOR SOCIETY MEMBERS
    </p>

    <p className="text-white/70 leading-relaxed">
      Shipping for all subscription orders to the Continental U.S. is on
      the house for our ride or dies.
    </p>
  </div>

  {/* Card 3 */}
  
  <div className="text-center">
    <FaBoxOpen className="text-4xl text-red-600 mb-4 mx-auto w-28 h-28" />
    <p className="font-bold text-2xl mb-3">
      FLEXIBLE SHIPMENTS
    </p>

    <p className="text-white/70 leading-relaxed">
      Get it when and where you want it. Shipments available every 30,
      60 or 90 days, and you can swap or cancel anytime.
    </p>
  </div>

  {/* Card 4 */}
  
  <div className="text-center">
     <BsBagXFill className="text-4xl text-red-600 mb-4 mx-auto w-28 h-28" />
    <p className="font-bold text-2xl mb-3">
      EXCLUSIVE ACCESS
    </p>

    <p className="text-white/70 leading-relaxed">
      Your status in the Society of Strong Coffee earns you exclusive
      access to subscriber-only merch, events, forums, and more.
    </p>
  </div>

</div>
<h1 className="text-5xl text-center font-bold font-display text-white mt-7">CHOOSE YOUR COFFEE</h1>
<ProductContent />


    </>
  );
};

export default Subscribe;