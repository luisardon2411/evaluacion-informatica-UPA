import { Suspense, lazy } from "react"
import { BrowserRouter, Route } from "react-router-dom"

const NotFound = lazy(() => import('./pages/NotFound/NotFound'))
const Home = lazy(() => import('./pages/Welcome/Welcome'))



const App = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<h1>Loading...</h1>}>
        <NotFound>
          <Route path='/' element={<Home />} />
        </NotFound>
      </Suspense>
    </BrowserRouter>
  )
}

export default App