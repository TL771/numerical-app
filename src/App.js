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
        <nav class="navbar">
          <div class="logo">MUO</div>
          <ul class="nav-links">
            <input type="checkbox" id="checkbox_toggle" />
            <label for="checkbox_toggle" class="hamburger">&#9776;</label>
          
            <div class="menu">
              <li class="services">
                <p>Root Of Equation</p>
                <ul class="dropdown">
                  <li><Link to="/one-point-iteration">One Point Iteration</Link></li>
                  <li><Link to="/newton-rapson">Newton rapson</Link></li>
                  <li><Link to="/newton-rapson">Newton rapson</Link></li>
                  <li><Link to="/newton-rapson">Newton rapson</Link></li>
                  <li><Link to="/newton-rapson">Newton rapson</Link></li>
                </ul>
              </li>
              <li class="services">
                <p>Service</p>
                <ul class="dropdown">
                  <li><a href="/">Dropdown 1 </a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 3</a></li>
                  <li><a href="/">Dropdown 4</a></li>
                </ul>
              </li>
              <li class="services">
                <p>Service</p>
                <ul class="dropdown">
                  <li><a href="/">Dropdown 1 </a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 3</a></li>
                  <li><a href="/">Dropdown 4</a></li>
                </ul>
              </li>
              <li class="services">
                <p>Service</p>
                <ul class="dropdown">
                  <li><a href="/">Dropdown 1 </a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 2</a></li>
                  <li><a href="/">Dropdown 3</a></li>
                  <li><a href="/">Dropdown 4</a></li>
                </ul>
              </li>
              <li><a href="/">Pricing</a></li>
              <li><a href="/">Contact</a></li>
            </div>
          </ul>
        </nav>
        <Switch>
        <Switch>
            <Route path="/one-point-iteration" exact component={OnePointIteration} />  
            <Route path="/newton-rapson" exact component={Newtonrapson} />  
        </Switch>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
