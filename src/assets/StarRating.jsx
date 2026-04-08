import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";
 
function StarRating({ rating }) {
  return (
    <div className="flex items-center gap-1">
      {[1, 2, 3, 4, 5].map((i) => {
        if (rating >= i) {
          return <FaStar key={i} className="text-sm text-yellow-400" />;
        }
        else if (rating >= i - 0.5) {
          return <FaStarHalfAlt key={i} className="text-sm text-yellow-400" />;
        }
        else {
          return <FaRegStar key={i} className="text-sm text-gray-300" />;
        }
      })}
    </div>
  );
}
 
export default StarRating;
 