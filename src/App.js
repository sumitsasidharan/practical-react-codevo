import './App.css';
import ReactIcons from './Comps/React-Icons';
import ToastNotif from './Comps/ToastNotif';
import ReactModal from './Comps/ReactModal';
import Modal from 'react-modal';

Modal.setAppElement('#root');
function App() {
   return (
      <div className="App">
         <h1>React Tuts</h1>
         <ReactModal />
      </div>
   );
}

export default App;

// https://reactcommunity.org/react-modal/