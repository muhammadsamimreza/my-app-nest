import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import useAppData from "../Hook/useAppData";
import { getToLocalStorage } from "../Utilities/AddToLocalStorage";
import InstalledAppCard from "./InstalledAppCard";

const Installation = () => {
  const { appData} = useAppData();
  const [installedApp, setInstalledApp] = useState([]);
  
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

  return (
    <div>
      <Container>
        {installedApp &&
          installedApp.map((app) => (
            <InstalledAppCard key={app.id} app={app} handleRemovedApp={handleRemovedApp}></InstalledAppCard>
          ))}
      </Container>
    </div>
  );
};

export default Installation;
