import React, { useState } from 'react'
import styled from 'styled-components';

const ModelBackground = styled.div`
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100vw;
    height: 100vh;
    overflow: auto;
    background-color: rgba(0,0,0,0.4);
`

const ModalBody = styled.div`
    background-color: #fefefe;
    margin: 15% auto;
    padding: 20px;
    border: 1px solid #888;
    width: 80%;
`

const Modal = ({ children }) => {

    const [showModal, setShowModal] = useState(false);

    return (
        <>

            <button onClick={() => setShowModal(true)}>show Modal</button>
            {showModal &&
                <ModelBackground onClick={() => setShowModal(false)}>
                    <ModalBody onClick={(e) => e.stopPropagation()}>
                        <button onClick={() => setShowModal(false)}>Hide Modal</button>
                        {children}
                    </ModalBody>
                </ModelBackground>
            }

        </>
    )
}

export default Modal
