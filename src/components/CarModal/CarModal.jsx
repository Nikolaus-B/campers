import { useEffect } from "react";
import Modal from "react-modal";

const customStyles = {
  overlay: {
    position: "fixed",
    width: "100vw",
    // height: "100vh",
    padding: "40px 0 40px 0",
    background: "rgba(0, 0, 0, 0.8)",
  },

  content: {
    width: "982px",
    height: "720px",
    margin: "0 auto 20px auto ",
    // overflow: "hidden",
    //   WebkitOverflowScrolling: "touch",
    borderRadius: "4px",
    outline: "none",
    // padding: "20px",
    bottom: "20px",
  },
};

Modal.setAppElement("#root");

export const CarModal = ({ modalIsOpen, closeModal }) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    if (modalIsOpen) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
    } else {
      const scrollY = parseInt(document.body.style.top || "0");
      document.body.style.overflow = originalOverflow;
      document.body.style.position = "";
      document.body.style.top = "";
      window.scrollTo(0, scrollY * -1);
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.position = "";
      document.body.style.top = "";
    };
  }, [modalIsOpen]);

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      style={customStyles}
      contentLabel="Car Modal"
    >
      <div style={{ overflowY: "scroll", maxHeight: "80vh" }}>
        {/* Your modal content here */}
      </div>
    </Modal>
  );
};
