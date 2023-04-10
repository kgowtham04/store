import React, { useEffect, useState } from "react";
import "./Form.css";
import Paginate from "./Paginate";
const Datas = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [datasPerPage] = useState(3);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setLoading(false);
        setValue(response);
      })
      .catch((err) => console.log(err));
  }, []);
  const indexofLastData = currentPage * datasPerPage;
  const indexofFirstData = indexofLastData - datasPerPage;
  const currentDatas = value.slice(indexofFirstData, indexofLastData);
  const totalDatas = value.length;
  const Pagination = (num) => {
    setCurrentPage(num);
  };
  const handlePrevious = () => {
    if (currentPage === 1) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage - 1);
    }
  };
  const handleNext = (noofPages) => {
    if (currentPage === noofPages.length) {
      setCurrentPage(currentPage);
    } else {
      setCurrentPage(currentPage + 1);
    }
  };
  if (loading) {
    return <p className="loading">Loading...</p>;
  }
  return (
    <div className="datas">
      <h1 className="title">REST API datas</h1>
      <table>
        <tr>
          <th>TITLE</th>
          <th>DESCRIPTION</th>
        </tr>
        {currentDatas.map((val) => {
          return (
            <tr key={val.id}>
              <td>{val.title}</td>
              <td>{val.body}</td>
            </tr>
          );
        })}
      </table>
      <Paginate
        totalDatas={totalDatas}
        datasPerPage={datasPerPage}
        Pagination={Pagination}
        handlePrevious={handlePrevious}
        handleNext={handleNext}
        currentPage={currentPage}
      />
    </div>
  );
};
export default Datas;
