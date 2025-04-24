import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalComponent({ show, handleClose, handleShow }) {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure want to logout</Modal.Title>
                </Modal.Header>
                <Modal.Body>Logging off !</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleShow}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;