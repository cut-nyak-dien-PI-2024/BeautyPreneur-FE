import "./Hero.css";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios"; 
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [courses, setCourses] = useState([]); // Menyimpan semua kursus
  const [filteredCourses, setFilteredCourses] = useState([]); // Menyimpan hasil pencarian
  const navigate = useNavigate();

  // Fetch all courses on component mount
  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await axios.get('https://api.mockfly.dev/mocks/8b71d6f2-9d3a-43ed-85d5-483f9c7e2c1d/pelatihan');
        console.log("Fetched Courses:", response.data.data); // Cek isi data
        setCourses(response.data.data); // Menyimpan semua data kursus
        setFilteredCourses(response.data.data); // Tampilkan semua kursus di awal
      } catch (error) {
        console.error("Failed to fetch courses:", error);
      }
    };
    
    fetchCourses();
  }, []);

  // Filter courses based on search input
  const handleSearch = (event) => {
    const value = event.target.value;
    setSearchTerm(value);

    if (value) {
      const filtered = courses.filter((course) =>
        course.title.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredCourses(filtered); // Update hasil pencarian
    } else {
      setFilteredCourses(courses); // Kembali ke semua kursus jika kosong
    }
  };

  return (
    <section className="hero-wrapper">
      <div className="white-gradient"></div>
      <div className="paddings innerWidth flexCenter hero-container">
        <div className="flexColStart hero-left">
          {/* Hero title and description */}
          <div className="hero-title">
            <div className="pink-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 2, type: "ease-in" }}
            >
              Kecantikan <br />
            </motion.h1>
          </div>
          <div className="flexColStart secondaryText flexhero-des ">
            <span>Temukan kelas pelatihan yang kamu inginkan!</span>
            <span>Semua pelatihan dari dasar hingga mahir, dibimbing langsung dengan mentor profesional.</span>           
          </div>

          {/* Search bar */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--primary)" size={25} />
            <input
              type="text"
              placeholder="Cari pelatihan..."
              value={searchTerm}
              onChange={handleSearch}
            />
            <button className="button" onClick={() => navigate("/kursus")}>Cari</button>

            {/* Search results dropdown */}
            {searchTerm && (
              <div className="search-results">
                {filteredCourses.length > 0 ? (
                  filteredCourses.map((course) => (
                    <div
                      key={course.id}
                      className="search-result-item"
                      onClick={() => navigate(`/kursus/${course.id}`)}
                    >
                      {course.title}
                    </div>
                  ))
                ) : (
                  <div className="no-results">Tidak ada hasil ditemukan</div>
                )}
              </div>
            )}
          </div>

          {/* Stats */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8800} end={9000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Pelatihan Pemula</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={1950} end={2000} duration={4} /> <span>+</span>
              </span>
              <span className="secondaryText">Pelatihan Menengah</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={28} /> <span>+</span>
              </span>
              <span className="secondaryText">Pelatihan Mahir</span>
            </div>
          </div>
        </div>

        {/* Right side image */}
        <div className="flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 2, type: "ease-in" }}
            className="image-container"
          >
            <img src="./makeup2.jpg" alt="hero image" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
