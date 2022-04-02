import "../style.css";
import Modal from "../modal";
import { useState } from "react";

function AddTaksButton() {
  const [show, setShow] = useState(false);

  //Open modal
  const addTaks = () => {
    setShow(true);
  };
  //Close modal
  const handleClose = () => {
    setShow(false);
  };

  return (
    <>
      <Modal show={show} handleClose={handleClose} />
      <div className="addTask">
        <button className="addTask__button" type="button" onClick={addTaks}>
          +
        </button>
      </div>
    </>
  );
}

export { AddTaksButton };
