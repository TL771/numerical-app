import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Menu from './Component/Menu/Menu';
import Binarystyle from './Component/RootOfEquation/BisectionAndFalsePosition/BisectionAndFalsePosition'
import Newtonrapson from './Component/RootOfEquation/NR/NR';
import OnePointIteration from './Component/RootOfEquation/OnePointIteration/OnePointIteration'
import Secant from './Component/RootOfEquation/Secant/Secant';
import Cramer from './Component/LinerSystem/Cramer/Cramer';
import GEM from './Component/LinerSystem/GuessEliminateMethod/GuessEliminateMethod'
import GJM from './Component/LinerSystem/GaussJordanMethod/GaussJordanMethod'
import Jacobi from './Component/LinerSystem/JacobiIterationMethod/JacobiIterationMethod';
import Seidel from './Component/LinerSystem/GaussSeidelIterationMethod/GaussSeidelIterationMethod';
import Conjugate from './Component/LinerSystem/ConjugateGradientMethod/ConjugateGradientMethod';
import Newtondiff from './Component/Interpolation/Newtondivideddifferences/NewtonDiff';
import Largrange from './Component/Interpolation/Largrange/LargrangeIntepolation';
import Regression from './Component/Regression/Regression';


function App() {
  
  return (
    <div>
      <Router>
        <Menu/>
        <Routes>
            <Route path="/newton-rapson" element={<Newtonrapson />} />  
        </Routes>
      </Router>
    </div>
  );
}

export default App;
