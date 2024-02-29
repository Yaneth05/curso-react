
import './App.css'
import Card from './components/Card';//importamos card

function App() {
  return (
    <div className="App">
      <h1>Hola react</h1>
        <div className='container'>
          {/* llamamos al archivo card */}
          <Card />
          <Card />
          <Card />
          <Card />{/*asi podemos crear varias tarjetas solo duplicando el card */}
        </div>
    </div>
      
  );
}

export default App;
