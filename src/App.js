import './App.css';
import Header from './Header'
import Sidebar from './Sidebar'
import Recommended from './Recommended'

function App() {
  return (
    <div className="App">
     <Header />
     <div className='app-page'>
       <Sidebar className='app-side' />
       <Recommended className='app-recommended' />
     </div>
    </div>
  );
}

export default App;
