import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
//importar cosas de react
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import vehicles from './data/vehicles.js'; //importar los vehiculos
import VehicleView from "./views/VehicleView.jsx";

//array de rutas
const routes = [
  {
    /**cd ruta va ser un bjto un path y un elmnt */
    path: "/",
    element: <App />,
  },
];
//agregar en estas rutas los dif vehiculos x cd vehicu crear una ruta
vehicles.forEach(vehicle => {
  routes.push({
    path: vehicle.name,
    element: <VehicleView vehicle={vehicle} /> //importamos la vista q creamos 
  });
});


const router = createBrowserRouter(routes)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
