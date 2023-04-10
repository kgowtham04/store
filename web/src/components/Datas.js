import React, { useEffect, useState } from "react";
import "./Form.css";
import DataTable from "react-data-table-component";
const Datas = () => {
  const [value, setValue] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filterValue, setFilterValue] = useState([]);
  const column = [
    { name: "ID", selector: (row) => row.id, sortable: true },
    { name: "TITLE", selector: (row) => row.title, sortable: true },
    { name: "BODY", selector: (row) => row.body },
  ];
  const customStyle = {
    headRow: {
      style: {
        backgroundColor: "green",
        color: "white",
      },
    },
    headCells: {
      style: {
        fontSize: "16px",
        fontWeight: "600",
      },
    },
    cells: {
      style: {
        fontSize: "15px",
        padding: "10px",
      },
    },
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then((data) => {
        return data.json();
      })
      .then((response) => {
        setLoading(false);
        setValue(response);
        setFilterValue(response);
      })
      .catch((err) => console.log(err));
  }, []);

  if (loading) {
    return <p className="loading">Loading...</p>;
  }
  const handleFilter = (e) => {
    const newData = filterValue.filter((row) => {
      return row.title.toLowerCase().includes(e.target.value.toLowerCase());
    });
    setValue(newData);
  };
  return (
    <div className="tablewrap">
      <h1>REST API datas</h1>
      <div className="inputwrap">
        <input
          type="text"
          placeholder="Search..."
          onChange={handleFilter}
          style={{ padding: "10px 10px" }}
        />
      </div>
      <DataTable
        columns={column}
        data={value}
        customStyles={customStyle}
        pagination
        selectableRows
      ></DataTable>
    </div>
  );
};
export default Datas;
