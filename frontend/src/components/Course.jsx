import React from "react";
import { useState,useEffect } from "react"; // Importing useState for state management
import Cards from "./Cards"; // Assuming Cards is a component that displays course cards
import { Link } from "react-router-dom"; // Importing Link for navigation
import { use } from "react";
import axios from "axios"; // Importing axios for making HTTP requests  

function Course() {
  const[books, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const res= await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBooks(res.data);
      }
      catch (error) {
        console.log("Error fetching books:", error);
      }
    }
    getBooks();
  }, []);

        
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 ">
        <div className="mt-20 mb-10 flex flex-col items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> here :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Distinctio
            saepe soluta fugiat facilis praesentium, ut earum qui ab! Nisi,
            suscipit! Labore ipsum, nulla ea voluptas asperiores officia sit
            corrupti recusandae?Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Tempora, maxime assumenda possimus laboriosam ad,
            veritatis ducimus, ipsa provident fugiat impedit eum commodi
            pariatur vero porro! Tempore molestias eos repellendus deleniti?
          </p>
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 hover:bg-pink-700 duration-300 mt-6">
              Back
            </button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {books.map((item) => (
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Course;
