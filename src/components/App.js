import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Personajes from './Personajes';


function App() {
  return (
    <>
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Personajes />} />
            <Route path="/reactClases" element={<Personajes />} />
            {/* <Route path="/character/:id" element={<CharacterDetail />} /> */}

        </Routes>
      </BrowserRouter>
    </>

  )
}

export default App;