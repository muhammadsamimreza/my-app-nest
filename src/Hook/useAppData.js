import { useEffect, useState } from "react";

const useAppData = () => {
  const [appData, setAppData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(()=> {
    fetch("/appData.json")
    .then((res) => res.json())
    .then((data) => setAppData(data))
    .catch(err=> setError(err))
    .finally(()=> setLoading(false))

}, [])
return { appData, loading, error}
};

export default useAppData;
