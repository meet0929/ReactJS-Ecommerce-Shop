import logo from './logo.svg';
import './App.css';
import Title from './components/Title';
import { clsx } from "clsx";
import styles from "./styles/App.module.scss";
import Header from "./components/Header";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// HOOKS
import useMobileDetect from "./hooks/useMobileDetect";

import BasketContextProvider from "./context/BasketContext";

import BasketSidebar from "./components/BasketSidebar";
import Detail from "./pages/Detail";
import Category from "./pages/Category";

function App() {
  const device = useMobileDetect();
  return (
    <Router>
      <BasketContextProvider>
        <div className={clsx(device.type === "mobile" && styles.paddingForMobile, styles.container)}>
          <Header />
          <main className={styles.main}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/product/:slug" element={<Detail/>} />
              <Route path="/category/:slug" element={<Category/>} />
              </Routes>  
          </main>
          <Footer />
        </div>
        <BasketSidebar />
      </BasketContextProvider>
    </Router>
  );
}

export default App;
