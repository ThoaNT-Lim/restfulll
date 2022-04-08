import APISauce from './apisauce';
import './App.css';
import DemoAxios from './axios';
import DemoFetch from './fetch';
import DemoUmiRequest from './umiRequest';

function App() {
  return (
    <div className="App">
      <APISauce />
      <DemoAxios />
      <DemoFetch />
      <DemoUmiRequest />
    </div>
  );
}

export default App;
