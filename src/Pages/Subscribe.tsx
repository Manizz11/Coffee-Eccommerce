import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

import ProductContent from "../section/ProductContent";

const Subscribe = () => {
  return (
    <>
      {/* Hero */}
      <div className="relative w-full h-[500px] sm:h-[600px] lg:h-[700px]">
        <img className="w-full h-full object-cover" src="/background.png" alt="" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="absolute inset-0 flex items-center">
          <div className="max-w-7xl mx-auto px-6 w-full">
            <div className="max-w-xl mt-16 lg:mt-20 text-white">
              <h1 className="text-4xl sm:text-5xl lg:text-[65px] font-bold leading-tight font-display">
                WELCOME TO THE SOCIETY OF STRONG COFFEE
              </h1>
              <p className="mt-4 text-sm sm:text-base text-white/80">
                Start a coffee subscription to unlock subscriber-only perks including 30% off your first shipment.
              </p>
              <div className="flex flex-wrap gap-4 mt-6">
                <button className="bg-red-600 border-2 border-red-600 text-white py-2 px-5 text-sm font-bold hover:bg-transparent transition">
                  CHOOSE YOUR COFFEE
                </button>
                <button className="bg-red-600 border-2 border-red-600 text-white py-2 px-5 text-sm font-bold hover:bg-transparent transition">
                  SHOP EXCLUSIVE MERCH
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold font-display text-white mt-10 px-4">
        SOCIETY BENEFITS
      </h1>

      {/* Benefit Cards */}
      <div className="max-w-7xl mx-auto mt-10 px-6 text-white grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        <div className="text-center flex flex-col items-center">
          <img src="/about1.png" alt="Benefit 1" className="text-red-600 mb-4 w-28 h-28" />
          <p className="font-bold text-xl mb-2">BUY MORE, SAVE MORE</p>
          <p className="text-white/70 leading-relaxed text-sm">Save up to 30% off subscription-eligible coffee products.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src="/delivery.png" alt="Benefit 1" className="text-red-600 mb-4 w-32 h-28" />
          <p className="font-bold text-xl mb-2">FREE SHIPPING</p>
          <p className="text-white/70 leading-relaxed text-sm">Shipping for all subscription orders is free for members.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          <img src="/Group.png" alt="Benefit 1" className="text-red-600 mb-4 w-28 h-28" />
    
          <p className="font-bold text-xl mb-2">FLEXIBLE SHIPMENTS</p>
          <p className="text-white/70 leading-relaxed text-sm">Get it when you want it. Swap or cancel anytime.</p>
        </div>
        <div className="text-center flex flex-col items-center">
          
          <img src="/bag.png" alt="Benefit 1" className="text-red-600 mb-4 w-28 h-28" />
          
          <p className="font-bold text-xl mb-2">EXCLUSIVE ACCESS</p>
          <p className="text-white/70 leading-relaxed text-sm">Subscriber-only merch, events, and exclusive access.</p>
        </div>
      </div>

      <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold font-display text-white mt-12 mb-8 px-4">
        CHOOSE YOUR COFFEE
      </h1>
      <ProductContent view="scroll" filter="coffee" />
      <div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl text-center font-bold font-display text-white mt-12 mb-8 px-4">
          SOCIETY MEMBER-ONLY REWARDS
        </h1>
        <p className="text-center text-white/70 max-w-2xl mx-auto px-4 text-sm sm:text-base">
          All can climb the ranks of rewards, but only Society of Strong Coffee Members receive these special perks. Subscribe and gain access to even more inner-sanctum sweetness.
        </p>
        <table border={1} className=" w-[80%] h-[120%] text-center mx-auto mt-10 border-gray-700  ">
          <tr className="bg-red-600 text-black" >
            <th colSpan={2} className="py-4 text-xl font-bold uppercase text-end pr-20">
              Society Members
            </th>
          </tr>
        <tr className="border-b border-gray-700 bg-zinc-900 ">
          <td className="py-4  px-15  text-center text-xl border-r-1 w-[70%]">Subscriber feedback forum participation</td>
          <td><AiOutlineCheck className="inline text-red-500 h-13 w-1/5 text-start pr-5" /></td>
          </tr>
          <tr className="border-b border-gray-700 bg-black-900">
          <td className="py-4 px-15 text-center text-xl border-r-1 w-[70%]">Double points days</td>
          <td><AiOutlineCheck className="inline text-red-500 h-13 w-1/5 text-center pr-5" /></td>
          </tr>
          <tr className="border-b border-gray-700 bg-zinc-900">
          <td className="py-4 px-15 text-center text-xl border-r-1 w-[70%]">Early access to exclusive releases</td>
          <td><AiOutlineCheck className="inline text-red-500 h-13 w-1/5 text-center pr-5  " /></td>
          </tr>
          <tr className="border-b border-gray-700 bg-black-900">
          <td className="py-4 px-15 text-center text-xl border-r-1 w-[70%]">Private merch drops</td>
          <td><AiOutlineCheck className="inline text-red-500 h-13 w-1/5 text-center pr-5" /></td>
          </tr>
          <tr className="border-b border-gray-700 bg-zinc-900">
          <td className="py-4 px-15 text-center text-xl border-r-1 w-[70%]">Up to 25% off recurring coffee orders</td>
          <td><AiOutlineCheck className="inline text-red-500 h-13 w-1/5 text-center pr-5" /></td>
          </tr>
          <tr className="border-b border-gray-700 bg-black-900">
          <td className="py-4 px-15 text-center text-xl border-r-1 w-[70%]">Sampling program access</td>
          <td><AiOutlineCheck className="inline text-red-500 h-13 w-1/5 text-center pr-5" /></td>
          </tr>
          </table>
      </div>
    </>
  );
};

export default Subscribe;
