import React, { Component, useEffect, useState } from "react";
import axios from "axios";

function DataFechHook() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [error, setError] = useState("");
  useEffect(() => {
    setError("");

    axios
      .get(`https://localhost:7010/Mission/Get Mission?MissionId=${id}`)
      .then((response) => {
        if ((response.status = 200)) {
          setPost(response.data);
        } else {
          setError(response.data.errors.MissionId[0]);
        }
        console.log(response);
      })
      .catch((error) => {
        if (error.response && error.response.data.errors && error.response.data.errors.MissionId) {
            setError(error.response.data.errors.MissionId[0]);
          } else if (error.response && error.response.statusText === "Bad Request") {
            setError("Bad Request");
          } else {
            setError("An error occurred while fetching the data.");
          }
      });
    console.log(error);
  }, [id]);
  return (
    <>
      <input type="number" value={id} onChange={(e) => setId(e.target.value)} />
      {error !== "" ? <div style={{ color: "red" }}>{error}</div> : <div>{post.title}</div>}
    </>
  );
}

export default DataFechHook;
