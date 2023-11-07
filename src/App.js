import logo from './logo.svg';
import './App.css';
import ColorBox from './components/colorbox';
import Grid from './components/grid';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>
             <ColorBox/> 
             <p color='white'>Click the boxes!</p>
        </div>
        <Grid/>
      </header>
    </div>
  );
}

export default App;
