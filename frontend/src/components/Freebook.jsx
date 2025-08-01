import React from "react";
import Cards from "./Cards";
import { useState, useEffect } from "react"; // Importing useState for state management
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios"; // Importing axios for making HTTP requests  

function Freebook() {
   const[books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data.filter((data) => data.category === "Free"));
      }
      catch (error) {
        console.log("Error fetching books:", error);
      }
    }
    getBooks();
  }, []);
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 mt-5">
        <div>
          <h1 className="font-bold">Free offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, vel
            veniam quaerat placeat minima quod delectus perferendis quibusdam!
            Iusto, facere incidunt. Ipsa laboriosam, blanditiis officia deleniti
            reprehenderit eos ipsam id!
          </p>
        </div>

        <div>
          <Slider {...settings}>
            {books.map((item) => (<Cards item={item} key={item.id} />))}
          </Slider>
        </div>
      </div>
    </>
  );
}

export default Freebook;
