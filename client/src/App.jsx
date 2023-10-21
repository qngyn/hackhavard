import { useRoutes } from 'react-router-dom'
import Home from './pages/Home'
import Instruction from './pages/Instruction'
import MainPage from './pages/MainPage'
import AnimatedCursor from 'react-animated-cursor'

import './App.css'

function App() {
  let element = useRoutes([
    {
      path: '/',
      element: <Home />
    },
    {
      path: '/instruction',
      element: <Instruction />
    },
    {
      path: '/mainpage',
      element: <MainPage />
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
