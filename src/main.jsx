import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactDOM from 'react-dom/client'
// import { Router } from './09-useContext/router/Router'
// import HooksApp from './HooksApp'
// import {CounterWithCustomHooks} from './01-useState/CounterWithCustomHooks'
import './index.css'
// import { MainApp } from './09-useContext/MainApp'
import { MultipleCustomHook } from './03-examples/MultipleCustomHook'

// import { TodoApp } from './08-useReducer/TodoApp'
// import { HomePage } from './09-useContext/HomePage';
// import { SimpleForm } from './02-useEffect/SimpleForm'
// import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook'
// import { MultipleCustomHook } from './03-examples/MultipleCustomHook'
// import { FocusScreen } from './04-useRef/FocusScreen'
// import { Layout } from './05-useLayoutEffect/Layout'
// import { Memorize } from './06-Memo/Memorize'
// import { MemoHook } from './06-Memo/MemoHook'
// import CallbackHook from './06-Memo/CallbackHook'
// import { Padre } from './07-tarea-memo/Padre'
// import './08-useReducer/intro-reducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BrowserRouter>
      <MainApp/>
    </BrowserRouter> */}
    <MultipleCustomHook/>
  </React.StrictMode>
)
