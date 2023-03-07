//import Nav from './components/nav/Nav';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import Cards from './components/Cards';
import ComponentWithChildren from './components/ComponentWithChildren';
import ErrorNotFound from './components/ErrorNotFound';
import FormInput from './components/FormInput';
import Home from './components/Home';
import BootstrapNavbar from './components/nav/bootstrap-navbar';
import StateExample from './components/State';
import img1 from './images/1.png';
import img2 from './images/2.png';
import img3 from './images/3.png';
import img4 from './images/4.png';

import React, { useContext } from 'react';
import {colorContext} from './components/useContext';
import UseRefExample from './components/useRef';
import UseMemoExample from './components/useMemo';
import UseReducerEample from './components/useReducer';
import UseCustomHooks from './components/useCustomHooks';

function App() {
  const {dataContext} = useContext(colorContext);
  const data = [
    { title: "Title1", description: "description 1", img: img1 },
    { title: "Title2", description: "description 2", img: img2 },
    { title: "Title3", description: "description 3", img: img3 },
    { title: "Title4", description: "description 4", img: img4 }
  ];
  //changeData('Green')

  return (
    <div>
      <BootstrapNavbar />
      <h1>{dataContext.id}</h1>
      <h1>{dataContext.name}</h1>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/cards" element={<Cards data={data}/>}></Route>
          <Route path="/componentWithChildren" element={<ComponentWithChildren>
            <h3>Child1</h3>
            <span>Child2</span>
          </ComponentWithChildren>}></Route>
          <Route path="/formInput" element={<FormInput />}></Route>
          <Route path="/state" element={<StateExample />}></Route>
          <Route path="/ref" element={<UseRefExample />}></Route>
          <Route path="/memo" element={<UseMemoExample />}></Route>
          <Route path="/reducer" element={<UseReducerEample />}></Route>
          <Route path="/data" element={<UseCustomHooks />}></Route>

          <Route path="*" element={<ErrorNotFound />}></Route>
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
