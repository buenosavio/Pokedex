import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Details from './pages/details/Details';
import Home from './pages/home/Home';
import NotFound from './pages/notFound/NotFound';

const Routers = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/detail' element={<Details />}>
            {/* <Route path=':id' element={<Details />}/> */}
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default Routers;