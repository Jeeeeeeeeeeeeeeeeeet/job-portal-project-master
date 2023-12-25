import React from "react";
import classes from "./Modalf.module.css";
import { Modal } from "react-bootstrap";
import ApplicationForm from "./ApplicationForm";

const ApplyModal = (props) => {
  // console.log(props.job);
  return (
    <React.Fragment>
      <Modal show={props.onOpen} onHide={props.onClose}>
        <div className="bg-gray-900 p-3">
          <h1 className="text-2xl text-white">
            Job Application
          </h1>
        </div>
        <div>
          <ApplicationForm
            job={props.job}
            onClose={props.onClose}
            changes={props.changes}
          />
        </div>
      </Modal>
    </React.Fragment>
  );
};

export default ApplyModal;
