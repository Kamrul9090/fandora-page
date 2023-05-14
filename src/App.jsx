import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routers } from './routers/Router';

function App() {
  return (
    <div className='max-w-screen-2xl mx-auto'>
      <RouterProvider router={routers}></RouterProvider>
    </div>
  )
}

export default App
