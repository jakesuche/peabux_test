import React, { ReactNode } from "react";
import styled from "styled-components";

// Define TypeScript types for the modal props
interface ModalProps {
  isOpen?: boolean;
  onClose: () => void;
  children: ReactNode;
  width?:string
}



const ModalOverlay = styled.div<Pick<ModalProps, 'isOpen'>>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
  opacity: ${(props) => (props.isOpen ? 1 : 0)};
  transition: opacity 0.3s ease;
`;

const ModalContent = styled.div<Pick<ModalProps, 'width'>>`
  background: white;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  animation: fadeIn 0.3s ease;
  width: 100%;
  position:relative;
  max-width: ${({width})=>width ? width:'550px'};
  .close_button{
    background:#000;
    color:white;
    border:none;
    padding:10px;
    position: absolute;
    right: 10px;
    cursor: pointer;


  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const SimpleModal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  return (
    <ModalOverlay isOpen={isOpen} onClick={onClose}>

      <ModalContent onClick={(e) => e.stopPropagation()}>
        <button onClick={onClose} className="close_button">
            Close
        </button>
        {children}
      </ModalContent>
    </ModalOverlay>
  );
};

export default SimpleModal;
