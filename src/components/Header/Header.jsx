import React, { useState } from "react";
import "./Header.css";
import { BiMenuAltRight } from "react-icons/bi";
import { getMenuStyles } from "../../utils/common";
import useHeaderColor from "../../hooks/useHeaderColor";
import OutsideClickHandler from "react-outside-click-handler";
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
  const [menuOpened, setMenuOpened] = useState(false);
  const headerColor = useHeaderColor();
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    alert('Anda telah logout.');
    navigate('/login');
    window.scrollTo(0, 0);
  };

  const handleLoginNavigate = () => {
    navigate('/login');
    window.scrollTo(0, 0);
  };

  return (
    <section className="h-wrapper" style={{ background: headerColor }}>
      <div className="flexCenter innerWidth paddings h-container">
        <img src="./logo.png" alt="logo" width={200} />

        <OutsideClickHandler onOutsideClick={() => setMenuOpened(false)}>
          <div className="flexCenter h-menu" style={getMenuStyles(menuOpened)}>
            <Link to="/">Home</Link>
            <Link to="/kursus">Kelas</Link>
            <Link to="/makeup-budget-list">Makeup Budget List</Link>

            {isLoggedIn ? (
              <>
                <div className="user-greeting">Halo, {user?.nama}</div>
                <div>
                  <button
                    onClick={handleLogout}
                    id="exit"
                    className="logout-button"
                  >
                    Keluar
                  </button>
                </div>
              </>
            ) : (
              <>
                <div>
                  <Link to="/login" id="signin" onClick={handleLoginNavigate}>
                    Masuk
                  </Link>
                </div>
                <button className="button">
                  <Link to="/registrasi" id="signup">
                    Daftar
                  </Link>
                </button>
              </>
            )}
          </div>
        </OutsideClickHandler>

        <div
          className="menu-icon"
          onClick={() => setMenuOpened((prev) => !prev)}
        >
          <BiMenuAltRight size={30} />
        </div>
      </div>
    </section>
  );
};

export default Header;
