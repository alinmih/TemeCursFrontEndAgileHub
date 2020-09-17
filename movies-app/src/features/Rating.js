import React from "react";

export default function Rating({ rating }) {
  return (
    <div>
      {rating.Source} - {rating.Value}
    </div>
  );
}
