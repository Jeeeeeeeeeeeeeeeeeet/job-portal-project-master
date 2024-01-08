import { Card, ListGroupItem, ListGroup, Button } from "react-bootstrap";
import classes from "./Modalf.module.css";

function Jobitem({ item, jobApply }) {
  const tag = item.title.split(" ")[0].toLowerCase();
  return (
    <>
    
      <div className="bg-white rounded-lg px-10 py-5 m-5 hover:scale-105 transition ease-in-out">
        <div>
          <div className="float-right max-sm:hidden">
            <img
              alt="job pic"
              width="150px"
              src="https://img.freepik.com/free-vector/new-app-development-desktop_23-2148684987.jpg?w=740&t=st=1703262702~exp=1703263302~hmac=463884f000b02955e4ff88f31ac69aa0bf61c6eb9b50828b8b52f8abaefec051"
            />
          </div>

          <div className="text-bold">Job Title : {item.title}</div>

          <div className="text-justify">Job Description : {item.description}</div>
          <div className="text-justify">Job Category : {item.category}</div>
          <div className="text-justify">Applicant can apply upto {item.endDate}</div>
          {!item.status && (
            <button name="jobclick"
              onClick={() => {
                jobApply(item);
              }}
              className="bg-black text-white p-2 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300"
            >
              Apply
            </button>
          )}
          {item.status && (
            <button
              variant={
                item.status.includes("Applied") ? "secondary" : "success"
              }
              disabled={true}
            >
              {item.status === "Shortlisted" ? (
                <span>
                  Shortlisted <i className="bi bi-heart-fill"></i>
                </span>
              ) : (
                item.status
              )}
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Jobitem;
