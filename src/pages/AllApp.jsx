import React, { useEffect, useState } from "react";
import Container from "../components/Container/Container";
import { TbBrandAppgallery } from "react-icons/tb";
import useAppData from "../Hook/useAppData";
import AppCard from "./AppCard";
import Loader from "../components/Loading/Loading";

const AllApp = () => {
  const { appData } = useAppData();
  const [search, setSearch] = useState("");
  const searchInput = search.trim().toLowerCase();
  const [loading, setLoading] = useState(true);
  const [searchLoading, setSearchLoading] = useState(false);
  const [searchTimer, setSearchTimer] = useState(null);
  useEffect(() => {
    const time = setTimeout(() => {
      setLoading(false);
    }, 300);
    return () => clearTimeout(time);
  }, []);

  if (loading) return <Loader></Loader>;

  const filterdData = search
    ? appData.filter((app) =>
        app.title.trim().toLowerCase().includes(searchInput)
      )
    : appData;

  const handleSearch = (e) => {
    setSearch(e.target.value);
    setSearchLoading(true);

    if (searchTimer) clearTimeout(searchTimer);

    const timer = setTimeout(() => {
      setSearchLoading(false);
    }, 300);
    setSearchTimer(timer);
  };
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
          <h1>({filterdData.length}) App Found</h1>
          <div>
            <label className="input">
              <svg
                className="h-[1em] opacity-50"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              ></svg>
              <input
                type="search"
                value={search}
                onChange={handleSearch}
                required
                placeholder="Search"
              />
            </label>
          </div>
        </div>
        <div>
          {searchLoading ? (
            <Loader inline></Loader>
          ) : filterdData.length === 0 ? (
            <div>
              <h1 className="w-64 mx-auto text-2xl md:text-3xl text-center">No App Found</h1>
            </div>
          ) : (
            <div className="my-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10">
              {filterdData.map((app) => (
                <AppCard key={app.id} app={app}></AppCard>
              ))}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};

export default AllApp;
