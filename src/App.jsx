import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero";
import Course from "./pages/Kelas";
import DetailCourse from "./pages/DetailCourse";
import DataCourse from "./components/Course/DataCourse";
import DataDetailCourse from "./components/DetailCourse/DataDetailCourse";
import SliderDetailCourse from "./components/DetailCourse/SliderDetailCourse";

function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />
        <Header />
        <Hero />
        <Routes>
          <main>
            <Route path="/" element={<Hero />} />
            <Route path="/kursus" element={<Course />} />
            <Route path="/data-kursus" element={<DataCourse />} />
            {/* Route untuk halaman detail training */}
            <Route path="/kursus/:id" element={<DataDetailCourse />} />
            <Route path="/kursus/:id" element={<SliderDetailCourse />} />
            <Route path="/kursus/:id" element={<DetailCourse />} />
            <Route path="/kursus/:id" element={<SliderDetailCourse />} />
          </main>

        </Routes>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
