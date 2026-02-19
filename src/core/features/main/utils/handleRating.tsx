import { Star } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { rateProduct } from "../../../api-route/site/handlers/rate/rateProduct";

function ProductRating({ pid }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  async function handleRating(value: number) {
    setRating(value);

    try {
      const ratep = await rateProduct(pid, rating);
      console.log(ratep);
      if (ratep.success === true) {
        toast.success(`${value} star rating was recorded`);
      } else {
        toast.error(ratep.message);
      }
    } catch {
      toast.error("Error in registering points");
    }
  }

  return (
    <div className="flex gap-1 mt-2">
      {[1, 2, 3, 4, 5].map((star) => (
        <button
          key={star}
          onClick={() => handleRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
          className="focus:outline-none"
        >
          <Star
            className={`w-5 h-5 ${
              star <= (hover || rating)
                ? "fill-yellow-400 text-yellow-400"
                : "text-gray-300"
            }`}
          />
        </button>
      ))}
    </div>
  );
}

export default ProductRating;
