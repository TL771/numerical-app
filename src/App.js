import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,Link
} from "react-router-dom";
import Binarystyle from './Component/RootOfEquation/BisectionAndFalsePosition/BisectionAndFalsePosition';
import Falseposition from './Component/RootOfEquation/False-position/Falsepos'
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
    <div className="app">
      <Router>
        <div className={"container-link"}>
          <ul>
            <li>Root of Equation
            <ul>
              <li><Link to="/bisection">Bisection Method</Link></li>
              <li><Link to="/false-position">False-Position Method</Link></li>
              <li><Link to="/one-point-iteration">One-point-iteration Method</Link></li>
              <li><Link to="/newton-rapson">Newton Rapson</Link></li>
              <li><Link to="/secant">Secant Method</Link></li>
            </ul></li>
            <li>Liner System 
            <ul>
              <li><Link to="/cramerule">Cramerule</Link></li>
              <li><Link to="/GuessEliminateMethod">Guess Eliminate Method</Link></li>
              <li><Link to="/GaussJordanMethod">Gauss Jordan Method</Link></li>
              <li><Link to="/JocobiIterationMethod">Jocobi Iteration Method</Link></li>
              <li><Link to="/GaussSeidelIterationMethod">Gauss Seidel Iteration Method</Link></li>
              <li><Link to="/ConjugateGradientMethod">Conjugate Gradient Method</Link></li>
            </ul></li>
            <li>Intepolation
            <ul>
              <li><Link to="/Newtondivideddifferences">Newton Divided Differences</Link></li>
              <li><Link to="/Largrange">Largrange</Link></li>
            </ul></li>
            <li><Link to="/Regression">Regression</Link></li>
          </ul>
        </div>

        <Switch className="content">
            <Route path="/newton-rapson" exact component={Newtonrapson} />  
            <Route path="/bisection" exact component={Binarystyle} />
            <Route path="/one-point-iteration" exact component={OnePointIteration} />  
            <Route path="/false-position" exact component={Falseposition} />
            <Route path="/secant" exact component={Secant} />

            <Route path="/cramerule" exact component={Cramer} />
            <Route path="/GuessEliminateMethod" exact component={GEM} />
            <Route path="/GaussJordanMethod" exact component={GJM} />
            <Route path="/JocobiIterationMethod" exact component={Jacobi} />
            <Route path="/GaussSeidelIterationMethod" exact component={Seidel} />
            <Route path="/ConjugateGradientMethod" exact component={Conjugate} />

            <Route path="/Newtondivideddifferences" exact component={Newtondiff} />
            <Route path="/Largrange" exact component={Largrange} />
            

            <Route path="/Regression" exact component={Regression} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
