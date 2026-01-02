import { Routes, Route } from 'react-router-dom';
import Hero from "./components/Hero";
import Postscript from './components/Postscript';
import About from './components/About';
import AuthorsNote from './components/AuthorsNote';
import ChapterOne from './components/ChapterOne';
import ChapterTwo from './components/ChapterTwo';
import ChapterThree from './components/ChapterThree';
import ChapterFour from './components/ChapterFour';
import ChapterFive from './components/ChapterFive';
import ChapterSix from './components/ChapterSix';
import ChapterSeven from './components/ChapterSeven';
import FinalChapter from './components/FinalChapter';
import BackCover from './components/BackCover';
import Copyright from './components/Copyright';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Hero />} />
      <Route path="/postscript" element={<Postscript />} />
      <Route path="/about" element={<About />} />
      <Route path="/author" element={<AuthorsNote />} />
      <Route path="/one" element={<ChapterOne />} />
      <Route path="/two" element={<ChapterTwo />} />
      <Route path="/three" element={<ChapterThree />} />
      <Route path="/four" element={<ChapterFour />} />
      <Route path="/five" element={<ChapterFive />} />
      <Route path="/six" element={<ChapterSix />} />
      <Route path="/seven" element={<ChapterSeven />} />
      <Route path="/final" element={<FinalChapter />} />
      <Route path="/cover" element={<BackCover />} />
      <Route path="/copyright" element={<Copyright />} />

      
    </Routes>
  );
}

export default App;