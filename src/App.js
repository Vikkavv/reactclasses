import Comics from "./components/Comics";
import Contador from "./components/Contador";
import DibujosComplejosArray from "./components/DibujosComplejosArray";
import DibujosComplejosRender from "./components/DibujosComplejosRender";
import NumeroPadre from "./components/NumeroPadre";
import Polideportivo from "./components/Polideportivo";


function App() {
  return (
    <>
      { false &&
        <>
          <Contador startIn={5}/>
          <Contador startIn={15}/>
          <DibujosComplejosArray/>
          <DibujosComplejosRender/>
          <Polideportivo/>
          <Comics  />
        </>
      }

        <NumeroPadre cantidadDeNumerosIniciales={3}/>
    </>
  );
}

export default App;
