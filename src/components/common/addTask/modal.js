import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
/**
 * 
 * id: 9,
    type: "Personal",
    text: "Dinner with the in-laws at 8 p.m.",
    urgenty: false,
    completed: false,
 */
function Modalform({ show, handleClose }) {
  const [showM, setShowM] = useState();

  useEffect(() => {
    setShowM(show); //Toggle Show modal
  }, [show]);

  const createTodo = (e) => {
    e.preventDefault();
    console.log(e);
  };

  return (
    <>
      {showM === true ? (
        <section className="modal">
          <div>
            <div className="modal_header">
              <h4>Create new ToDo</h4>
              <button type="button" onClick={handleClose}>
                X
              </button>
            </div>
            <div className="modal_body">
              <p>Please complete the form</p>
              <form onSubmit={createTodo}>
                <div>
                  <label htmlFor="catogory">Category:</label>
                  <select id="category">
                    <option value="prueba">Prueba</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="description">ToDo description:</label>
                  <textarea
                    id="description"
                    placeholder="Describe ToDo"
                    rows="3"
                  />
                </div>
                <div>
                  <label htmlFor="importance">Is it an important ToDo?</label>
                  <div className="switch-field" id="importance">
                    <input
                      type="radio"
                      id="radio_one"
                      name="switch_one"
                      value="yes"
                      defaultChecked
                    />
                    <label htmlFor="radio_one">Yes</label>
                    <input
                      type="radio"
                      id="radio_two"
                      name="switch_one"
                      value="no"
                    />
                    <label htmlFor="radio_two">No</label>
                  </div>
                </div>
                <div className="form_buttons">
                  <button type="button" onClick={handleClose}>
                    Cancel
                  </button>
                  <button type="submit">Add</button>
                </div>
              </form>
            </div>
          </div>
        </section>
      ) : null}
    </>
  );
}

export { Modalform };

export default function Modal({ show, handleClose }) {
  return ReactDOM.createPortal(
    <Modalform show={show} handleClose={handleClose} />,
    document.getElementById("modal-root")
  );
}
