import './App.css';
import ReactIcons from './Comps/React-Icons';
import ToastNotif from './Comps/ToastNotif';
import ReactModal from './Comps/ReactModal';
import Modal from 'react-modal';
import ToolTippy from './Comps/ToolTippy';
import ReactCountup from './Comps/ReactCountup';
import ReactIdleTimer from './Comps/ReactIdleTimer';
import ColorPicker from './Comps/ColorPicker';
import CreditCards from './Comps/CreditCards';
import DatePickerComp from './Comps/DatePicker';
import VideoPlayer from './Comps/VideoPlayer';
import ReactSpinner from './Comps/ReactSpinner';
import ChartJsDemo from './Comps/ChartJsDemo';
import LineChart from './Comps/LineChart';

Modal.setAppElement('#root');
function App() {
   return (
      <div className="App">
         <LineChart />
      </div>
   );
}

export default App;

// https://reactcommunity.org/react-modal/