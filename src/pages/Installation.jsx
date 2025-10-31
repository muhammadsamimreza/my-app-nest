import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import useAppData from "../Hook/useAppData";
import { getToLocalStorage } from "../Utilities/AddToLocalStorage";
import InstalledAppCard from "./InstalledAppCard";
import Loader from "../components/Loading/Loading";


const Installation = () => {
  const { appData } = useAppData();
  const [installedApp, setInstalledApp] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sort, setSort] = useState('none')
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const getData = getToLocalStorage();
    if (!getData) {
      return <h1>No Install App</h1>;
    } else {
      const installedData = appData.filter((app) =>
        getData.map(Number).includes(app.id)
      );
      setInstalledApp(installedData);
    }
  }, [appData]);
  if (loading) return <Loader></Loader>;
  const handleRemovedApp = (id) => {
    const preData = getToLocalStorage(id);
    if (!preData) {
      return <h1>No Install App</h1>;
    } else {
      const updatedData = appData.filter((app) =>
        preData.map(Number).includes(app.id)
      );
      setInstalledApp(updatedData);
    }
  };

  const handleSortByHighLow = (type) =>{
    setSort(type)
    if(type==="High>Low"){
      const sortHighToLow = installedApp.sort((a,b)=> parseFloat(b.downloads)- parseFloat(a.downloads))
      setInstalledApp(sortHighToLow)
    }
  }
  const handleSortByLowHigh = (type) =>{
    setSort(type)
    const sortLowToHigh = installedApp.sort((a,b)=> parseFloat(a.downloads)- parseFloat(b.downloads))
      setInstalledApp(sortLowToHigh)
    
  }

  return (
    <div>
      <Container>
        <title>Nest title</title>
        <div className="flex justify-between items-center mt-10 mb-20">
          <h1 className="text-xl font-bold">({installedApp.length}) Installed App</h1>
          <div>
            <div className="dropdown dropdown-bottom dropdown-center">
              <div tabIndex={0} role="button" className="btn m-1">
                Sort by: {sort} ⬇️ 
              </div>
              <ul
                tabIndex="-1"
                className="dropdown-content menu bg-base-100 w-36 rounded-box z-1 p-2 shadow-sm"
              >
                <li>
                  <button onClick={()=> handleSortByHighLow('High>Low')}>{`High>Low`}</button>
                </li>
                <li>
                  <button onClick={()=> handleSortByLowHigh('Low>High')}>{`Low>High`}</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {installedApp &&
          installedApp.map((app) => (
            <InstalledAppCard
              key={app.id}
              app={app}
              handleRemovedApp={handleRemovedApp}
            ></InstalledAppCard>
          ))}
      </Container>
    </div>
  );
};

export default Installation;
