import './App.css';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './Componentes/Navbar';
import SectionManga from './Componentes/SectionManga';
import SectionMangaMx from './Componentes/SectionMangaMx';
import SectionAnime from './Componentes/SectionAnime';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <SectionManga />
      <SectionMangaMx />
      <SectionAnime />
    </BrowserRouter>
  );
}

export default App;