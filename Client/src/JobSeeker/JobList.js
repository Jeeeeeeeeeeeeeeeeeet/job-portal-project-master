import React from "react";
import { useState, useEffect } from "react";
import { IoSearch } from "react-icons/io5";
import axios from "axios";
import Jobitem from "./Job_item";
import ApplyModal from "./ApplyModal";
import Config from "../config/Config.json";

let jobsData = [];
const Jobs = () => {
  const [modal, setModal] = useState(false);
  const [action, setAction] = useState(false);
  const [jobSet, setjobSet] = useState("");
  const [jobs, setJobs] = useState([]);

  const closeModalHandler = () => {
    setModal(false);
  };

  const jobApply = (applyData) => {
    setModal(true);
    setjobSet(applyData);
  };

  const jobSearchHandler = (event) => {
    event.preventDefault();
    setJobs(
      jobsData.filter((job) =>
        job.title.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  };

  useEffect(() => {
    axios
      .get(`${Config.SERVER_URL + "user/jobsAvailable"}`, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((response) => {
        jobsData = response.data.jobs;
        setJobs(response.data.jobs);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [action]);

  return (
    <>
      <div>
        <div
          className="h-screen"
          style={{
            backgroundImage: `url(https://images.pexels.com/photos/392018/pexels-photo-392018.jpeg)`,
            backgroundSize: `cover`,
          }}
        >
          <div className="text-center text-base mx-24 max-sm:mx-2">
            <div className="bg-white bg-opacity-10 absolute top-1/2 w-10/12 rounded-full my-2">
              <IoSearch className="relative text-white top-10 ml-10 h-16 w-16" />
              <input
                type="text"
                onChange={jobSearchHandler}
                className="w-10/12 relative bottom-5 text-white text-5xl mx-4 px-4 max-sm:w-10/12 bg-black bg-opacity-0 mb-7 outline-none"
              />
            </div>
          </div>
        </div>
        <div className="bg-gray-200">
          <div className="mx-24 max-sm:mx-0">
            <div className="block columns-1">
              {jobs.map((jobItem) => (
                <Jobitem key={jobItem._id} item={jobItem} jobApply={jobApply} />
              ))}
              {modal && (
                <ApplyModal
                  job={jobSet}
                  onOpen={modal}
                  onClose={closeModalHandler}
                  changes={setAction}
                />
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Jobs;
