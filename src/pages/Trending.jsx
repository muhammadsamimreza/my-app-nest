import React from "react";
import useAppData from "../Hook/useAppData";
import { FaArrowTrendUp } from "react-icons/fa6";
import AppCard from "./AppCard";
import Container from "../components/Container/Container";

const Trending = () => {
  const { appData } = useAppData();

  const trenApp = appData.slice(0, 8);

  return (
    <div>
      <Container>
        <div>
          <h1 className="text-3xl font-bold flex justify-center items-center gap-3 my-5">
            {" "}
            <span>Trending App</span>{" "}
            <span>
              <FaArrowTrendUp />
            </span>
          </h1>
        </div>
        <div className="my-20 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {trenApp.map((app) => (
            <AppCard key={app.id} app={app}></AppCard>
          ))}
        </div>
        <div className="flex justify-center mb-20">
           <button className="btn">See All App</button>
        </div>
      </Container>
    </div>
  );
};

export default Trending;
