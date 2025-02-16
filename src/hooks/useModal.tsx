import { useState } from 'react';
import Modal from 'react-modal';

const useModal = (
  contentLabel: string,
  confirmAction: () => void,
  cancelAction: () => void,
  selectedDate: Date | null
) => {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const ModalComponent = (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel={contentLabel}
      className="modal-react-modal"
      overlayClassName="overlay-react-modal"
    >
      <h4>{contentLabel}</h4>
      <p>Would you like to confirm this appointment?</p>
      {selectedDate && (
        <p>
          <span className="modal-selected-date">
            <i className="bi bi-calendar3 me-2"></i>
            {selectedDate.toLocaleString()}
          </span>
        </p>
      )}
      <div className="modal-buttons">
        <button onClick={cancelAction} className="button-secondary">
          Cancel
        </button>
        <button onClick={confirmAction} className="button-primary">
          Confirm
        </button>
      </div>
    </Modal>
  );

  return {
    isOpen,
    openModal,
    closeModal,
    ModalComponent,
  };
};

export default useModal;
