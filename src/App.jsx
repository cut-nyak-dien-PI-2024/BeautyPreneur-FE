import "./index.css";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './stores/store';
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./pages/Hero";
import Course from "./pages/Kelas";
import DataCourse from "./components/Course/DataCourse";
import DataDetailCourse from "./components/DetailCourse/DataDetailCourse";
import Residencies from "./pages/Kelas-hero";
import Payment1 from "./pages/Payment1";
import Payment2 from "./pages/Payment2";
import Payment3 from "./pages/Payment3";
import SuccessBuy from './pages/SuccessBuy';
import Registrasi from './pages/Registrasi';
import VerifyRegister from "./pages/verifyRegiter";
import Login from './pages/Login';  // Login component
import LupaPassword from './pages/LupaPassword';
import Verifkode from './pages/Verifkode';
import LupaPassword2 from "./pages/LupaPassword2";
import MakeupBudgetList from "./pages/MakeupBudgetList";
import DetailMakeupBudgetList from "./pages/DetailMakeupBudgetList";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="App">
          <Header />
          {/* Menampilkan Hero hanya pada halaman utama */}
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <Hero />
                  <Residencies />
                </>
              }
            />
            <Route path="/kursus" element={<Course />} />
            <Route path="/data-kursus" element={<DataCourse />} />
            <Route path="/makeup-budget-list" element={<MakeupBudgetList />} />
            <Route path="/makeup-budget-list/:id" element={<DetailMakeupBudgetList />} />
            {/* Route untuk halaman detail kursus */}
            <Route path="/kursus/:id" element={<DataDetailCourse />} />
            {/* Routes untuk halaman pembayaran */}
            <Route path="/payment/:id" element={<Payment1 />} />
            <Route path="/payment2/:id" element={<Payment2 />} />
            <Route path="/payment3/:id/:orderId" element={<Payment3 />} />
            <Route path="/success-payment" element={<SuccessBuy />} />
            {/* Routes untuk halaman Registrasi */}
            <Route path="/registrasi" element={<Registrasi />} />
            <Route path="/verif-regis" element={<VerifyRegister />} />
            <Route path="/login" element={<Login />} />
            <Route path="/lupa-password" element={<LupaPassword />} />
            <Route path="/verif-kode" element={<Verifkode />} />
            <Route path="/lupa-password2" element={<LupaPassword2 />} />
          </Routes>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
