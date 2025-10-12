import React from "react";
import Container from "../components/Container/Container";
import downlowdIcon from "../assets/icon-downloads.png"
import ratingsIcon from "../assets/icon-ratings.png"
import { removedLocalStorage } from "../Utilities/AddToLocalStorage";

const InstalledAppCard = ({app, handleRemovedApp}) => {
    const { title, image, ratingAvg, downloads, size, id} = app;
    const handleUninstall = (id) =>{
        removedLocalStorage(id)
        handleRemovedApp(id)
    }

  return (
    <div>
      <Container>
        <div className="my-5 bg-gray-200 p-5 rounded-2xl">
          <div className="flex justify-between items-center gap-7 md:gap-0">
            <div className="w-24 md:w-32  md:h-36 bg-gray-300 rounded-2xl p-1 md:p-2">
              <img
                className="w-full h-full object-cover rounded-xl"
                src={image}
                alt=""
              />
            </div>
            <div className="flex flex-1 flex-col md:flex-row md:justify-between md:items-center md:ml-14">
              <div className="space-y-2 md:space-y-4">
                <div>
                  <h1 className="md:text-xl font-semibold">{title}</h1>
                </div>
                <div className="flex items-center gap-2 md:gap-12 text-gray-400">
                  <div className="flex items-center gap-2">
                    <img
                      className="w-3 md:w-4 md:h-4 "
                      src={downlowdIcon}
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-xs md:text-[16px]">{downloads}</h1>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      className="w-3 md:w-4 md:h-4"
                      src={ratingsIcon}
                      alt=""
                    />
                    <div className="">
                      <h1 className="text-xs md:text-[16px]">{ratingAvg}</h1>
                    </div>
                  </div>
                  <div className="flex flex-col">
                    <p className="text-xs md:text-[16px]">{size} MB</p>
                  </div>
                </div>
              </div>
              <div className=" flex justify-start mt-3 md:mt-0">
                <button
                 className="btn"
                 onClick={()=>handleUninstall(id)}
                >
                  Uninstall
                </button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default InstalledAppCard;
