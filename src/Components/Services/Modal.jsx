import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;

    return (
        <div
            onClick={onClose}
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100vw",
                height: "100vh",
                background: "rgba(0, 0, 0, 0.92)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "2rem",
                boxSizing: "border-box",
                zIndex: 1000,
            }}
        >
            <div
                onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside
                style={{
                    position: "relative",
                    backgroundColor: "#B0C5F1",
                    width: "80vw", // Set fixed width for all modals
                    height: "90vh", // Set fixed height for all modals
                    padding: "2%",
                    border: "2px solid #000",
                    borderRadius: "10px",
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
                    overflow: "auto",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    zIndex: 1001,
                }}
            >
                {/* Close Button */}
                <button
                    onClick={onClose}
                    style={{
                        position: "absolute",
                        top: "10px",
                        right: "10px",
                        background: "transparent",
                        border: "none",
                        fontSize: "20px",
                        cursor: "pointer",
                        color: "#000",
                    }}
                >
                    ✖
                </button>

                {children}
            </div>
        </div>
    );
};

export default Modal;
