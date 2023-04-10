import React from "react";
import "./Form.css";

const Paginate = ({ datasPerPage, totalDatas, Pagination, handlePrevious,handleNext}) => {
  const noofPages = [];
  for (let i = 1; i <= Math.ceil(totalDatas / datasPerPage); i++) {
    noofPages.push(i);
  }
  return (
    <div className="page">
      <ul className="pageList">
        <li >
        <a onClick={handlePrevious}>&laquo;</a></li>
        {noofPages.map((num, i) => {
          return (
            <li key={i}>
              <a href="#" onClick={() => Pagination(num)}>
                {num}
              </a>
            </li>
          );
        })}
        <li><a onClick={()=>handleNext(noofPages)}>&raquo;</a></li>
      </ul>
    </div>
  );
};
export default Paginate;
