import React from "react";

const Testimonials = () => {
  return (
    <div className="relative bg-white shadow-dark">
      <div className="pb-36 text-center">
        <h1 className="text-5xl font-bold text-secondary mb-4">Testimoni</h1>
        <h3 className="text-3xl font-bold mb-8">Pengalaman Pelanggan</h3>
      </div>
      <div
        style={{ borderRadius: "150px 150px 0 0" }}
        className="relative bg-secondary text-white"
      >
        <div className="relative z-10 container mx-auto py-20">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-8 mb-8">
            {[
              "PT. Garam Mulia selalu menyediakan garam berkualitas tinggi untuk kebutuhan produksi makanan kami. Proses pemesanan cepat dan pengiriman selalu tepat waktu. Sangat direkomendasikan!",
              "Kami telah bekerja sama dengan PT. Garam Mulia selama bertahun-tahun. Kualitas garam yang konsisten dan pelayanan yang ramah membuat kami terus mempercayakan kebutuhan garam industri kepada mereka.",
              "PT. Garam Mulia menyediakan kebutuhan garam untuk berbagai sektor: mulai dari konsumsi rumah tangga, industri makanan, hingga kebutuhan farmasi dan lainnya.",
            ].map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl shadow-2xl max-w-xs relative bottom-48"
              >
                <p className="mb-4 text-dark">{item}</p>
              </div>
            ))}
          </div>
          <div className="md:flex md:items-center md:justify-between pb-20 relative min-h-[400px]">
            <div className="flex justify-start items-end absolute bottom-0 left-0 z-0">
              {/* Lingkaran besar */}
              <div className="absolute bg-white opacity-20 rounded-full w-[500px] h-[500px] translate-x-[-30%] translate-y-[30%]"></div>
              {/* Lingkaran kecil */}
              <div className="absolute bg-white opacity-10 rounded-full w-[350px] h-[350px] translate-x-[-10%] translate-y-[50%]"></div>
              {/* Dotted pattern */}
              <div className="absolute grid grid-cols-12 gap-1 w-[400px] h-[400px] translate-x-[10%] translate-y-[25%] opacity-10">
                {Array.from({ length: 144 }).map((_, i) => (
                  <div key={i} className="w-1 h-1 bg-white rounded-full animate-pulse" style={{animationDelay: `${i * 30}ms`}}></div>
                ))}
              </div>
              
              {/* Floating particles */}
              <div className="absolute w-[500px] h-[500px] translate-x-[0%] translate-y-[10%]">
                {Array.from({ length: 20 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="absolute w-2 h-2 bg-white rounded-full opacity-20 animate-pulse"
                    style={{
                      left: `${Math.random() * 100}%`,
                      top: `${Math.random() * 100}%`,
                      animationDelay: `${i * 200}ms`,
                      animationDuration: `${2 + Math.random() * 3}s`
                    }}
                  />
                ))}
              </div>
              
              {/* Animated waves */}
              <div className="absolute w-[400px] h-[400px] translate-x-[20%] translate-y-[30%] opacity-10">
                <div className="absolute w-full h-full border-2 border-white rounded-full animate-ping" style={{animationDuration: '3s'}}></div>
                <div className="absolute w-full h-full border-2 border-white rounded-full animate-ping" style={{animationDuration: '4s', animationDelay: '1s'}}></div>
                <div className="absolute w-full h-full border-2 border-white rounded-full animate-ping" style={{animationDuration: '5s', animationDelay: '2s'}}></div>
              </div>
            </div>
            <div className="relative z-10 md:ml-auto md:w-1/2 px-6 md:px-12">
              <div className="border-2 border-white mb-4"></div>
              <h1 className="text-white text-5xl font-medium mb-4 leading-tight">
                Kualitas Terjamin,
                <br /> Pelayanan Terpercaya
              </h1>
              <p className="mb-8 text-white">
                PT. Garam Mulia menghadirkan garam halus dapur berkualitas premium dalam kemasan higienis dan praktis. Produk kami telah memenuhi standar keamanan pangan untuk kebutuhan masak sehari-hari keluarga Indonesia.
              </p>
              <a
                href="/contact"
                className="bg-white text-secondary px-6 py-2 rounded-full font-medium hover:bg-gray-200 transition duration-300 inline-block"
              >
                Hubungi Kami
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;