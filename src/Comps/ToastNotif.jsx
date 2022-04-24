import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// toast.configure();
const ToastNotif = () => {

   const notify = () => {
      toast('Uploading Successfull!!');
   }

  return (
     <div>
        <h1>Toastify Demo</h1>
        <button onClick={notify}>Notify!</button>
        <ToastContainer />
     </div>
  );
}

export default ToastNotif

// 1.34