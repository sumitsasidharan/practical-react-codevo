import React, { useState } from 'react'
import Modal from 'react-modal'

const ReactModal = () => {
   const [modalShow, setModalShow] = useState(false);

  return (
     <div>
        <Modal isOpen={modalShow} onRequestClose={() => setModalShow(false)} style={{
           overlay: {
              backgroundColor: 'rgba(0,0,0,0.6)',
           },
           content: {
              color: 'orange',
           }
        }}>
           <h2>This is a react modal</h2>
           <p>
              Coming from the traditional tech world, I was used to the path of
              applying through Linkedin, then getting a few online tests and
              finally moving to the interview stages. In web3, the process was
              not like the traditional route. I think that's why it seems like a
              scary process, but the reality is that it's not hard it's just
              different. You'll need to take a few steps yourself and be more
              creative, since there isn't a clear path just yet.
           </p>

           <button onClick={() => setModalShow(false)}>Modal Close</button>
        </Modal>

        <button onClick={() => setModalShow(true)}>Modal Open</button>
     </div>
  );
}

export default ReactModal