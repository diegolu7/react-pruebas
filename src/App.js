import './App.css';
import Blog from './components/Blog/index.js'
import Imagen from './components/Imagen/index.js'
import Button from './components/Button/index.js'


function App() {
  function handleTip(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <Blog />
      <Imagen />
      <Button />
      <Blog />
      <input onChange={handleTip}></input>
    </div>
  );
}

export default App;
