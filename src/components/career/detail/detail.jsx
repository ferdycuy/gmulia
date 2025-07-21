import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom"; // Untuk mendapatkan ID dari URL

const JobDetail = () => {
  const { slug } = useParams(); // Ambil slug dari parameter URL
  const [career, setJob] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchJobDetail = async () => {
      try {
        const response = await fetch(
          `https://server-saranacs.onrender.com/career/${slug}`
        ); // Ganti dengan URL API yang sesuai
        const data = await response.json();
        setJob(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching career details:", error);
        setLoading(false);
      }
    };

    fetchJobDetail();
  }, [slug]);

  if (loading) {
    return <div className="text-center text-xl py-20">Loading...</div>;
  }

  if (!career) {
    return (
      <div className="text-center text-red-500 text-xl py-20">
        Job not found
      </div>
    );
  }

  return (
    <div className="container mx-auto pt-40 pb-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <img
            src={career.imageUrl}
            alt={career.title}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>

        <div>
          <h2 className="text-3xl font-semibold mb-4 text-gray-800">
            {career.title}
          </h2>

          <h3 className="text-2xl mb-4 text-gray-800 font-medium">
            Job Description
          </h3>
          <p className="text-gray-600">{career.detail}</p>
          {/* Tampilkan detail pekerjaan */}
          <div className="mt-8">
            <button className="bg-secondary text-white px-6 py-3 rounded-lg shadow-md transition focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
              Apply Now
            </button>
          </div>
        </div>
      </div>

      <div className="mt-16 text-center">
        <Link to="/career">
          <button className="bg-gray-200 text-gray-800 px-6 py-2 rounded-lg shadow-md hover:bg-gray-300 transition focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50">
            Back to Careers
          </button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetail;
