import Header from "./Header";
import Sidebar from "./Sidebar";
import Slider from "./Slider";
import {BrowserRouter} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Sidebar />
      <main>
      <Slider/>
     </main>
      </BrowserRouter>
      
    
  );
}

export default App;
