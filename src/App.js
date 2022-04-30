import './App.css';
import ReactIcons from './Comps/React-Icons';
import ToastNotif from './Comps/ToastNotif';
import ReactModal from './Comps/ReactModal';
import Modal from 'react-modal';
import ToolTippy from './Comps/ToolTippy';

Modal.setAppElement('#root');
function App() {
   return (
      <div className="App">
         <h1>React Tuts</h1>
         <ToolTippy />
      </div>
   );
}

export default App;

// https://reactcommunity.org/react-modal/