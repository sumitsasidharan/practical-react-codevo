import React from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CustomToast = ({ closeToast }) => {
   return (
      <div>
         <h2>Something Went Wong!</h2>
         <button onClick={closeToast} >Close</button>
      </div>
   )
}

// toast.configure();
const ToastNotif = () => {

   const notify = () => {
      toast(<CustomToast />, {position: toast.POSITION.TOP_LEFT});
      toast.success('Success Notification!!', {position: toast.POSITION.TOP_CENTER, autoClose: 8000});
      toast.info('Info Notification!!', {position: toast.POSITION.TOP_RIGHT, autoClose: false});
      toast.warn('Warning Notification!!', {position: toast.POSITION.BOTTOM_LEFT});
      toast.error('Error Notification!!', {position: toast.POSITION.BOTTOM_CENTER});
      toast('Basic Notification!!', {position: toast.POSITION.BOTTOM_RIGHT});
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