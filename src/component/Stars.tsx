import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const Stars = ({ rating }: { rating: number }) => {
  const stars = [];

  for (let i = 1; i <= 5; i++) {
    if (rating >= i) {
      stars.push(<FaStar key={i} className="text-white" />);
    } else if (rating >= i - 0.5) {
      stars.push(<FaStarHalfAlt key={i} className="text-white" />);
    } else {
      stars.push(<FaRegStar key={i} className="text-white" />);
    }
  }

  return <div className="flex justify-start gap-1">{stars}</div>;
};

export default Stars;