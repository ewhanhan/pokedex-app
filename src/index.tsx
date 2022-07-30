import ReactDOM from 'react-dom/client';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import './index.css';
import {Landing, PokemonProfile} from './pages/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Landing />}></Route>
      <Route path=":id" element={<PokemonProfile />} />
    </Routes>
  </BrowserRouter>
);
