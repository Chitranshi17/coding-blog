import React from "react";
import "../Card/Card.style.css";
const BlogCard = ({ item }) => {
  console.log(item);
  return (
    <div className="w-[25%] h-[12rem] bg-slate-400 card flex items-center justify-center">
      <div className="w-[30%] h-[100%] flex items-center justify-center">
        <img src={item.img} alt="" />
      </div>
      <div className="w-[70%] h-[100%] flex items-center justify-center flex-col">
        <a className="card1" href="#">
          <p>{item.title}</p>
          <p className="small">{item.author}</p>
          <div className="go-corner" href="#">
            <div className="go-arrow text-xl font-bold">→</div>
          </div>
        </a>
      </div>
    </div>
  );
};

export default BlogCard;
