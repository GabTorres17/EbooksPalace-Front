import React from "react";
import Cards from "../../components/Cards/Cards";
import NavBar from "../../components/Nav/Nav";
import Filters from "../../components/Filters/Filters";
import './Home.css';

const Home = () => {

  const handleFilter = (filteredBooks) => {
    setInfo(filteredBooks.books);
    setTotalPages(filteredBooks.totalPages);
    setCurrentPage(1);
  };

  return (
    <div>
      <NavBar />
      <div className="home-container">
        <Filters onFilter={handleFilter} />
        <Cards />
      </div>
    </div>
  )

};

export default Home;
