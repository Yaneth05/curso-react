
import './App.css'
import Card from './components/Card';//importamos card
import ShowHide from './components/ShowHide';//importar showhide en la vista
import vehicles from "./data/vehicles";



function App() {
  {/* crear una lista */}
  const vehicleList = vehicles.map(v => {
    {/**retornamos una tarjeta por cada vehiculo */}
    return <Card title={v.name} description={v.description}/>
  })


  return (
    <div className="App">
      <h1>Hola react</h1>
        <div className='container'>
          {/**asi podremos ver todas nuestras tarjetas renderizada en la vista */}
          {vehicleList}
          {/* llamamos al archivo card */}
          {/*<Card title="titulo"
          description="la descripcion"/>
          <Card title="titulo2"
          description="la descripcion"/>
          <Card title="titulo3"
          description="la descripcion"/>
          <Card title="titulo4"
          description="la descripcion"/>*/}{/*asi podemos crear varias tarjetas solo duplicando el card */}
        </div>
        <ShowHide/>
    </div>
      
  );
}

export default App;
