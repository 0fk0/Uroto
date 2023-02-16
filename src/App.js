import Introduction from './components/Introduction';
import Contents from './components/Contents';
import Header from './components/Header';
import "./style/style.css";

function App(){
  return (
    <div className="App">
      <Header/>
      <Contents/>
    </div>
  );
}

export default App;