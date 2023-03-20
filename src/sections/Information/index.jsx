import React from "react";
import { FaBed, FaHome } from "react-icons/fa";
import { ImPriceTags } from "react-icons/im";
import { BsFillPlusCircleFill, BsStopwatchFill } from "react-icons/bs";
import { Link } from "react-router-dom";

const Information = () => {
  return (
    <div className="container ">
      <div className="w-[80%] mx-auto">
        <h1 className=" text-purple-primary font-bold">
          Silkstream Hendon, NW9 6FZ £420,000 - £879,000
        </h1>
        <div className="flex gap-32">
          <div className="flex gap-2">
            <div className="font-bold">
              <div className="flex items-center gap-2">
                <FaBed className="  text-purple-primary" />
                Availability
              </div>
              <div className="flex items-center gap-2">
                <ImPriceTags className="  text-purple-primary" />
                Price
              </div>
              <div className="flex items-center gap-2">
                <BsStopwatchFill className="  text-purple-primary" />
                Estimated Compoletion
              </div>
              <div className="flex items-center gap-2">
                <FaHome className="  text-purple-primary" />
                Tenure
              </div>
              <div className="flex items-center gap-2">
                <BsFillPlusCircleFill className="  text-purple-primary" />
                Rental Yield
              </div>
            </div>
            <div className="">
              <div>: 2 bed apartments</div>
              <div>: From €195,000</div>
              <div>: Q2 2024</div>
              <div>: Freehold</div>
              <div>: 7%</div>
            </div>
          </div>
          <div>
            <div class="flex items-center">
              <div class="mr-2 bg-purple-primary text-gray-700 text-xl font-bold rounded-full w-2 h-2"></div>
              <div class="text-gray-700">
                Thameslink offers a direct service into King’s Cross from Hendon
                Station.
              </div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 bg-purple-primary text-gray-700 text-xl font-bold rounded-full w-2 h-2"></div>
              <div class="text-gray-700">Exclusive gym and fitness studio.</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 bg-purple-primary text-gray-700 text-xl font-bold rounded-full w-2 h-2"></div>
              <div class="text-gray-700">
                Concierge and sociable residents’ lounge.
              </div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 bg-purple-primary text-gray-700 text-xl font-bold rounded-full w-2 h-2"></div>
              <div class="text-gray-700">Two private screening rooms.</div>
            </div>
            <div class="flex items-center">
              <div class="mr-2 bg-purple-primary text-gray-700 text-xl font-bold rounded-full w-2 h-2"></div>
              <div class="text-gray-700">
                Co-working area with meeting spaces and teleconferencing booths.
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 mt-8">
          <div>
            Silkstream is a new parkland neighbourhood in Hendon; a vibrant area
            of North West London that offers excellent schools, local shops,
            cafes and restaurants. Connections to the City are easy with Hendon
            Station 8-minutes walk away.
          </div>
          <div>
            A 1.5-acre public park and 175-metre oxbow lake form the footprint
            of the development. Running around the perimeter is the Silk Stream,
            the inspiration for its name. The residences themselves are adjacent
            to the themed landscaped gardens: Mosaic, Meadow and Woodland.
          </div>
          <div>Welcome to Silkstream. London living of a different nature.</div>
          <div>
            <h2 className="font-bold text-purple-primary">
              Sales & Marketing Suite and Showhome (where available) details:
            </h2>
            Monday through Saturday, 10am - 6pm and Sunday 10am - 5pm. Bank
            Holidays 10am - 4pm. Silkstream Sales and Marketing Suite, 4 The
            Hyde, London, NW9 6FZ
          </div>
          <Link to="#" className=" text-purple-primary underline font-bold">
            Get in touch now to arrange a chat, book an appointment or register
            your interest
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Information;
