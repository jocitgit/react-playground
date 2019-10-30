import React from 'react';
// import logo from '../../assets/images/logo.svg';
import './app.css';
import Clock from '../clock/Clock';
import Game from '../game/Game';
import Form from '../form/Form';
import TempCalculator from '../temp-calculator/TempCalculator';
import ProductTable from '../product-table/ProductTable';
import Lazy from '../lazy/Lazy';
import ShowContext from '../context/Context';
import RefDemo from '../ref/RefDemo';
import HocDemo from '../hoc/HocDemo';
import MouseDemo from '../render-prop/Mouse';
import FileInput from '../file/FileInput';
import HookDemo from '../hooks/HookDemo';
import HookClock from '../hooks/HookClock.js';
import { ActionLink, BindOptions, Conditional, HideMe, ShowContainer, WelcomeTitle } from '../experiments/experiments.js';

function App() {
  return (
    <div>
      <Clock />
      <HookClock />
      <Game />
      <ActionLink />
      <BindOptions />
      <Conditional showNumber={0}/>
      <Conditional showNumber={3}/>
      <HideMe hide={true}/>
      <HideMe hide={false}/>
      <Form />
      <TempCalculator />
      <ShowContainer />
      <WelcomeTitle />
      <ProductTable />
      <Lazy />
      <ShowContext />
      <RefDemo />
      <HocDemo />
      {/* <MouseDemo /> */}
      <FileInput />
      <HookDemo />
    </div>
  );
}

export default App;
