import { render,  screen  , fireEvent} from '@testing-library/react';
import { round } from 'mathjs';
import bisection from './Component/RootOfEquation/Module/Bisection';
import falseposition from './Component/RootOfEquation/Module/FalsePosition';
import NR from './Component/RootOfEquation/Module/NR';
import App from './App';
import BisectionMockup from './MockComponent/Bisection';
import BisectionTestSet from './TestData/Bisection.json';
import Newtonrapson from './MockComponent/NRMockTest';
import NRTestSet from './TestData/NewtonRapson.json'
//error test
test('renders error', () => {
  render(<App />);
  screen.debug()
});

//unit test

test("Bisection Unit Test",()=>{
  //case ได้คำตอบ
  expect(round(bisection('x^4-13',1.5,2.0).x,6)).toEqual(1.898829);
  expect(round(bisection('x^2-4',1,2.5).x,6)).toEqual(2)
  expect(round(bisection('x^2-15',2,6).x,6)).toEqual(3.872982);
  //case ผิด
  expect(bisection('x^2 + 15',2,6)).toEqual(-1);
  expect(bisection('x^2-4',1,1.5)).toEqual(-1);
})

test("False-Position Unit Test",()=>{
  //case ได้คำตอบ
  expect(round(falseposition('x^4-13',1.5,2.0).x,6)).toEqual(1.898829);
  expect(round(falseposition('x^2-4',1,2.5).x,6)).toEqual(2)
  expect(round(falseposition('x^2-15',2,6).x,6)).toEqual(3.872983);
  //case ผิด
  expect(falseposition('x^2 + 15',2,6)).toEqual(-1);
  expect(falseposition('x^2-4',1,1.5)).toEqual(-1);
})

test("NR Unit Test",()=>{
  //case ได้คำตอบ
  expect(round(NR('x^4-13', '4*x^3' , -5).xn,6)).toEqual(-1.898829);
  expect(round(NR('x^4-13', '4*x^3' , 1).xn,6)).toEqual(1.898829);
  expect(round(NR('x^2-4', '2*x' , 4).xn,6)).toEqual(2)
  expect(round(NR('x^2-15','2*x' , 1).xn,6)).toEqual(3.872983);
  //case ผิด
  expect(NR('x^4-13', '4*x^3', 0)).toEqual(-1);
})

test("Bisection Component Test",()=>{
  render(<BisectionMockup/>);
  const test=(eqa,xl,xr,real_answer)=>{
    const input_eqation = screen.getByTestId('equation')
    const input_xl = screen.getByTestId('xl');
    const input_xr = screen.getByTestId('xr');
    const submit_button = screen.getByTestId('submit')
    const answer = screen.getByTestId('x')
    fireEvent.change(input_eqation,{target:{value:eqa}})
    fireEvent.change(input_xl,{target:{value : xl}})
    fireEvent.change(input_xr,{target:{value: xr}})
    fireEvent.click(submit_button)
    expect(parseFloat(answer.value)).toBe(real_answer);
  }
  for (let value of BisectionTestSet) {
    test(value.equation , value.xl , value.xr , value.expect_value);
  }
})

test("Newton-Rapson Component Test",()=>{
  render(<Newtonrapson/>);
  const test=(eqa,x,real_answer)=>{
    const input_eqation = screen.getByTestId('equation')
    const input_x = screen.getByTestId('xi');
    const submit_button = screen.getByTestId('submit')
    const answer = screen.getByTestId('x')
    fireEvent.change(input_eqation,{target:{value:eqa}})
    fireEvent.change(input_x,{target:{value : x}})
    fireEvent.click(submit_button)
    expect(parseFloat(answer.value)).toBe(real_answer);
  }
  for(let i of NRTestSet){
    test(i.equation,i.x,i.expect_value);
  }
})