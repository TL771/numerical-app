import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,Link
} from "react-router-dom";
import { Navbar,Container,Nav ,NavDropdown} from 'react-bootstrap';
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
        <Link to="/bisection">Bisection Method</Link>
        <Link to="/false-position">False-Position Method</Link>
        <Link to="/one-point-iteration">One-point-iteration Method</Link>
        <Link to="/newton-rapson">Newton Rapson</Link>
        <Link to="/secant">Secant Method</Link>
        <Link to="/cramerule">Cramerule</Link>
        <Link to="/GuessEliminateMethod">Guess Eliminate Method</Link>
        <Link to="/GaussJordanMethod">Gauss Jordan Method</Link>
        <Link to="/JocobiIterationMethod">Jocobi Iteration Method</Link>
        <Link to="/GaussSeidelIterationMethod">Gauss Seidel Iteration Method</Link>
        <Link to="/ConjugateGradientMethod">Conjugate Gradient Method</Link>
        <Link to="/Newtondivideddifferences">/Newton Divided Differences</Link>
        <Link to="/Largrange">Largrange</Link>
        <Link to="/Regression">Regression</Link>
        <Switch>
        <Switch>
            <Route path="/newton-rapson" exact component={Newtonrapson} />  
            <Route path="/bisection" exact component={Newtonrapson} />
            <Route path="/one-point-iteration" exact component={OnePointIteration} />  
            <Route path="/false-position" exact component={Newtonrapson} />
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
        </Switch>
      </Router>
    </div>
  );
}

export default App;
