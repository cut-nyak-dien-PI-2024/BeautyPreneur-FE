import "./App.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero";
import Course from "./pages/Kelas";
import DetailCourse from "./pages/DetailCourse";
import DataCourse from "./components/Course/DataCourse";
import DataDetailCourse from "./components/DetailCourse/DataDetailCourse";
import SliderDetailCourse from "./components/DetailCourse/SliderDetailCourse";
import Residencies from "./pages/Kelas-hero";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* Menampilkan Hero hanya pada halaman utama */}
          <Routes>
            <Route path="/" element={<><Hero /><Residencies /></>} />
            <Route path="/kursus" element={<Course />} />
            <Route path="/data-kursus" element={<DataCourse />} />
            {/* Route untuk halaman detail kursus */}
            <Route
              path="/kursus/:id"
              element={
                <>
                  <DataDetailCourse />
                  <SliderDetailCourse />
                  <DetailCourse />
                </>
              }
            />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
