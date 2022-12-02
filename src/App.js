import './App.css';
import { RouterProvider } from 'react-router-dom';
import router from './Router/Routs/Routs';
import { PhotoProvider, PhotoView } from 'react-photo-view';
import 'react-photo-view/dist/react-photo-view.css';

function App() {

  return (
    <div>
      <RouterProvider router={router}> </RouterProvider>
    </div>
  );
}

export default App;
