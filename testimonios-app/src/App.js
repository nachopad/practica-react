import './App.css';
import Testimonio from './componentes/Testimonio.js';
import datosTestimonios from './datos/datosTestimonios.js';

function App() {
  return (
    <div className="App">
      <div className='contenedor-principal'>
        <h1>Esto es lo que dicen nuestros antiguos alumnos sobre freeCodeCamp:</h1>
        {datosTestimonios.map((testimonio, index) => (
          <Testimonio key={index} {...testimonio} />
        ))}
      </div>
    </div>
  );
}

export default App;
