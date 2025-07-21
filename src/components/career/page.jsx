import React, { useState, useEffect } from "react";
import CareerHero from "./hero";
import { Link } from "react-router-dom";

const Career = () => {
  const [positions, setPositions] = useState([]); // State untuk menyimpan data pekerjaan
  const [loading, setLoading] = useState(true); // State untuk loading

  // Fungsi untuk mengambil data dari API
  useEffect(() => {
    const fetchPositions = async () => {
      try {
        const response = await fetch(
          "https://server-saranacs.onrender.com/career"
        ); // Ganti dengan API URL yang sesuai
        const data = await response.json();
        setPositions(data); // Simpan data pekerjaan ke state
        setLoading(false); // Set loading menjadi false setelah data diterima
      } catch (error) {
        console.error("Error fetching positions:", error);
        setLoading(false); // Tetap set loading ke false meskipun ada error
      }
    };

    fetchPositions();
  }, []);

  // Jika masih loading, tampilkan pesan loading
  if (loading) {
    return <div className="text-center text-xl py-20">Loading...</div>;
  }

  return (
    <>
      <CareerHero />
      <div className="container">
        <div className="container mx-auto my-16 px-4">
          <h2 className="text-3xl font-semibold text-center mb-12 text-gray-800">
            Available Positions
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {positions.length > 0 ? (
              positions.map((position) => (
                <div
                  key={position.id}
                  className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105"
                >
                  {/* Menambahkan gambar cover */}
                  <img
                    src={position.imageUrl} // Ganti dengan URL cover yang didapat dari API
                    alt={position.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800">
                      {position.title}
                    </h3>
                    {/* <p className="text-gray-600 mb-4">{position.detail}</p> */}
                    <div className="flex justify-between items-center mt-4">
                      <Link to={`/career/${position.slug}`}>
                        <button className="bg-white text-secondary px-4 py-2 rounded-full hover:bg-blue-600 transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
                          View Details
                        </button>
                      </Link>
                      <button className="bg-secondary text-white px-4 py-2 rounded-full hover:bg-green-600 transition focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50">
                        Apply Now
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-center text-gray-700">
                No positions available at the moment.
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
