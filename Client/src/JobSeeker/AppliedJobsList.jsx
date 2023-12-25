import React from "react";
import { useState, useEffect, useRef } from "react";
import { Row, Col, Container } from "react-bootstrap";
import axios from "axios";
import Jobitem from "./Job_item";
import classes from "./Modalf.module.css";
import Config from "../config/Config.json";

let jobsData = [];
const AppliedJobs = () => {
  const [jobs, setJobs] = useState([]);
  const statusInputRef = useRef();
  const statusChangeHandler = (event) => {
    if (event.target.value === "All") {
      setJobs(jobsData);
    } else {
      setJobs(
        jobsData.filter((job) => job.status.includes(event.target.value))
      );
    }
  };

  const jobSearchHandler = (event) => {
    const status = statusInputRef.current.value;
    if (status === "All") {
      setJobs(
        jobsData.filter((job) =>
          job.title.toLowerCase().includes(event.target.value.toLowerCase())
        )
      );
    } else {
      setJobs(
        jobsData.filter(
          (job) =>
            job.title
              .toLowerCase()
              .includes(event.target.value.toLowerCase()) &&
            job.status.includes(status)
        )
      );
    }
  };

  useEffect(() => {
    axios
      .get(`${Config.SERVER_URL + "user/jobsApplied"}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        jobsData = response.data.jobsApplied;
        setJobs(response.data.jobsApplied);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div className="bg-gray-200">
        <div className="mx-24 max-sm:mx-0">
          <div className="block columns-1">
            {jobs.map((jobItem) => (
              <Jobitem key={jobItem._id} item={jobItem} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppliedJobs;
