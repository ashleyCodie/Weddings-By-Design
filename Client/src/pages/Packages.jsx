import React from "react";
import { useDispatch, useSelector } from "react-redux";
import SideNavbar from "../components/SideNavbar";
import SidePackages from "../components/SidePackages"
import GradientText from "../components/GradientText";
import venue from "../assets/images/venue.jpg";
import venue1 from "../assets/images/venue1.jpg";
import venue2 from "../assets/images/venue2.jpg";
import castlewedding from "../assets/images/castlewedding.jpg";
import lakewedding from "../assets/images/lakewedding.jpg";
import mountainwedding from "../assets/images/mountainwedding.jpg";

const Packages = () => {
  const { loading, isLoggedIn, user } = useSelector((state) => state.auth)
  
  return (
    <div className="mb-10">
      {!isLoggedIn && <SidePackages />}
      {isLoggedIn && <SideNavbar />}
      <GradientText
        colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
        animationSpeed={3}
        showBorder={false}
        className="custom-class  brush ml-44 pl-60 mt-10 text-7xl font-extrabold text-center"
      >
        Packages
      </GradientText>

      {/* row1 */}
      <div className="grid gap-6 pb-10 md:grid-cols-2 ps-48 pe-20  ml-60 mt-10">
        <div>
          <img className="h-80 max-w-xs mt-16 rounded-lg" src={venue} alt="image description" />
        </div>
        <div>
          {/* <p>Eternal Love</p> */}
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush mt-10 text-5xl font-extrabold"
          >
            Eternal Love
          </GradientText>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Wedding Planner:</span> Included with package</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Event Coordinator:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Catering:</span> 50 Guest and Wedding Party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Cake:</span> serves 50 people</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Guest:</span> up to 50 Guest</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Priest/Minister:</span> up to 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Music/Entertainment:</span> 4 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Venue:</span> 4 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Photographer:</span> 4 hours (500 photos)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Florist/Flowers:</span> Bouquet, Toss bouquet, Bridesmaid bouquets, Groomsmen boutonnieres, Centerpieces, and Flower girls' baskets.</li></p>
        </div>
      </div>
      {/* row2 */}
      <div className="grid gap-6 pb-10 md:grid-cols-2 ps-48 pe-20  ml-60 mt-10">
        <div>
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush mt-10 text-5xl font-extrabold"
          >
            Love's Journey
          </GradientText>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Wedding Planner:</span> Included with package</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Event Coordinator:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Catering:</span> 100 Guest and Wedding Party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Cake:</span> serves 100 people</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Guest:</span> up to 100 Guest</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Priest/Minister:</span> up to 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Music/Entertainment:</span> 4 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Venue:</span> 4 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Photographer:</span> 4 hours (500 photos)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Videographer:</span> 4 hours (4 hours video footage)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Florist/Flowers:</span> Bouquet, Toss bouquet, Bridesmaid bouquets, Groomsmen boutonnieres, Centerpieces, and Flower girls' baskets.</li></p>
        </div>
        <div>
          <img
            className="h-80 max-w-xs ml-60 mt-16 rounded-lg"
            src={venue1}
            alt="image description"
          />
        </div>
      </div>
      {/* row3 */}
      <div className="grid gap-6 pb-10 md:grid-cols-2 ps-48 pe-20  ml-60 mt-10">
        <div>
          <img className="h-80 max-w-xs mt-20 rounded-lg" src={venue2} alt="image description" />
        </div>
        <div>
          {/* <p>Eternal Love</p> */}
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush mt-10 text-5xl font-extrabold"
          >
            Passionate Promise
          </GradientText>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Wedding Planner:</span> included with package</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Catering:</span> 25 Guest and Wedding Party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Cake:</span> Serves 25 people</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Guest:</span> up to 25 Guest</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Priest/Minister:</span> up to 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Music/Entertainment:</span> 2 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Venue:</span> 2 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Photographer:</span> 2 hours (1000 photos)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Videographer:</span> 2 hours (2 hours video footage)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Makeup Artist/Hair Stylist</span> For entire wedding party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Florist/Flowers:</span> Bouquet, Toss bouquet, Bridesmaid bouquets, Groomsmen boutonnieres, Centerpieces, and Flower girls' baskets.</li></p>
        </div>
      </div>
      {/* row4 */}
      <div className="grid gap-6 pb-10 md:grid-cols-2 ps-48 pe-20  ml-60 mt-10">
        <div>
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush mt-10 text-5xl font-extrabold"
          >
            Magical Matrimony
         
          </GradientText>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Wedding Planner:</span> Included with package</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Event Coordinator:</span> 8 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Catering:</span> 150 Guest and Wedding Party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Bar Services:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Cake:</span> serves 150 people</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Guest:</span> up to 150 Guest</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Priest/Minister:</span> up to 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Venue:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Music/Entertainment:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Photographer:</span> 6 hours (1000 photos)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Videographer:</span> 6 hours ( 6 hours video footage)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Makeup Artist/Hair Stylist</span> For entire wedding party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Florist/Flowers:</span> Bouquet, Toss bouquet, Bridesmaid bouquets, Groomsmen boutonnieres, Centerpieces, and Flower girls' baskets.</li></p>
        </div>
        <div>
          <img
            className="h-auto max-w-xs ml-60 mt-24 rounded-lg"
            src={castlewedding}
            alt="image description"
          />
        </div>
      </div>
      {/* row5 */}
      <div className="grid gap-6 pb-10 md:grid-cols-2 ps-48 pe-20  ml-60 mt-10">
        <div>
          <img className="h-auto max-w-xs mt-34 rounded-lg" src={mountainwedding} alt="image description" />
        </div>
        <div>
          {/* <p>Eternal Love</p> */}
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush mt-10 text-5xl font-extrabold"
          >
              Enchanted Evening
          </GradientText>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Wedding Planner:</span> Included with package</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Event Coordinator:</span> 8 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Catering:</span> 150 Guest and Wedding Party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Appetizers:</span> served for first hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Bar Services:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Transportation Services:</span> 1 hour prior to wedding and 2 hours after wedding</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Cake:</span> serves 150 people</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Guest:</span> up to 150 Guest</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Priest/Minister:</span> up to 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Venue:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Music/Entertainment:</span> 6 hours</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Photographer:</span> 6 hours (1000 photos)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Videographer:</span> 6 hours ( 6 hours video footage)</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Makeup Artist/Hair Stylist</span> For entire wedding party</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Florist/Flowers:</span> Bouquet, Toss bouquet, Bridesmaid bouquets, Groomsmen boutonnieres, Centerpieces, and Flower girls' baskets.</li></p>
          
        </div>
      </div>
      {/* row6 */}
      <div className="grid gap-6 pb-10 md:grid-cols-2 ps-48 pe-20  ml-60 mt-10">
        <div>
          <GradientText
            colors={["#f8fafc", "#71717a", "#1f2937", "#71717a", "#f8fafc"]}
            animationSpeed={3}
            showBorder={false}
            className="custom-class  brush mt-10 text-5xl font-extrabold"
          >
            Intimate Rendezvous
          </GradientText>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Wedding Planner:</span> Included with package</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Catering:</span> 10 Guest</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Priest/Minister:</span> up to 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Venue:</span> 1 hour</li></p>
          <p className="brush text-2xl"><li><span className="underline font-extrabold">Photographer:</span> 1 hour (100 photos)</li></p>
        </div>
        <div>
          <img
            className="h-auto max-w-xs ml-60 mt-4 rounded-lg"
            src={lakewedding}
            alt="image description"
          />
        </div>
      </div>
    </div>
  );
};

export default Packages;