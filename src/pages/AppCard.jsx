import React from "react";

const AppCard = ({ app }) => {
  const { title, downloads, ratingAvg, image } = app;
  return (
    <div>
      <div className="card bg-base-300 shadow-sm">
        <div className="w-full h-54 overflow-hidden rounded-2xl px-3 pt-3">
          <img className="w-full h-full object-fit rounded-2xl" src={image} alt="" />
        </div>
        <div className="card-body space-y-2">
          <h2 className="card-title">
            {title}
          </h2>
          <div className="card-actions justify-between">
            <div className="badge badge-outline">{downloads}</div>
            <div className="badge badge-outline">{ratingAvg}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppCard;
