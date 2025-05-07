import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./component.css";

function ModalComponent({ show, handleClose, onConfirm }) {
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Are you sure you want to log out?</Modal.Title>
                </Modal.Header>
                <Modal.Body>Logging off!</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={onConfirm}>
                        Yes
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        No
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default ModalComponent;