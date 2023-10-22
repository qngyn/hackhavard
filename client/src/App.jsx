import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Instruction from './pages/Instruction'
import Introduction from './pages/Introduction'
import MainPage from './pages/MainPage'
import AnimatedCursor from 'react-animated-cursor'
import ExampleProject from './pages/ExampleProject'
import Result from './pages/Result'

import './App.css'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/introduction', 
      element: <Introduction />
    },
    {
      path: '/instruction',
      element: <Instruction />
    },
    {
      path: '/mainpage',
      element: <MainPage />
    },
    {
      path: '/result',
      element: <Result />
    }, 
    {
      path: '/example',
      element: <ExampleProject />
    }
    
  ])

  return (
    <div className="App">
      <AnimatedCursor
        innerSize={5}
        outerSize={35}
        innerScale={1}
        outerScale={1.5}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: 'var(--cursor-color)'
        }}
        outerStyle={{
          border: '1px solid var(--cursor-color)'
        }}
      />
      { element }
    </div>
  )
}

export default App
