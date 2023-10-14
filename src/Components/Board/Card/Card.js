import React from "react";
import "./Card.css";
import {BsFillCircleFill ,BsExclamationSquareFill} from "react-icons/bs";
const Card = ({ id, title, tags, status }) => {
  return (
    <div className="container box">
      <div className="cardHeading2" style={{ justifyContent: "space-between" }}>
        <span style={{ textTransform: "uppercase", color: "darkgrey" }}>
          {id}
        </span>

        <div className="image">
            <div class="img">N</div>
          

          {/* <div className="status"></div> */}
        </div>
      </div>

      <div className="title">
        <p class="ptitle">{title}</p>
      </div>

      <div className="tags">
      <div className="tag">
      <BsExclamationSquareFill />

        </div>
        {tags?.map((element, index) => {
          return (
            <div key={index} className="tag">
               <BsFillCircleFill /> {element}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Card;