import React from "react";
import Container from "../components/Container/Container";
import { TbBrandAppgallery } from "react-icons/tb";
import useAppData from "../Hook/useAppData";
import AppCard from "./AppCard";

const AllApp = () => {
  const {appData} = useAppData()
  console.log(appData)
  return (
    <div>
      <Container>
        <div>
          <h1 className="text-3xl font-bold flex justify-center items-center gap-3 my-5">
            {" "}
            <span>Our All App</span>{" "}
            <span>
              <TbBrandAppgallery />
            </span>
          </h1>
        </div>
        <div className="flex justify-between items-center my-10">
          <h1>({appData.length}) App Found</h1>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
              </svg>
              <input type="search" required placeholder="Search" />
            </label>
          </div>
        </div>
        <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
           {
            appData.map(app=> <AppCard  key={app.id} app={app}></AppCard>)
           }
        </div>
      </Container>
    </div>
  );
};

export default AllApp;
