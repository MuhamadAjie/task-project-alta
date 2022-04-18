import React from "react";
import { Modal } from "react-bootstrap";
import { ProgressBar } from "react-bootstrap";

const Fight = () => {
  return(
    <>
      <Modal.Dialog>
        <Modal.Header closeButton>
          <Modal.Title>Modal title</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <p>Modal body text goes here.</p>
          <ProgressBar animated now={45} />
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary">Close</Button>
          <Button variant="primary">Save changes</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </>
  )
}

export default Fight