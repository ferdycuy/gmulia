import React from "react";

const values = [
  {
    title: "Integrity",
    description:
      "Berkomitmen pada tata kelola perusahaan yang baik dengan menjunjung tinggi standar etika dan tunduk pada segala peraturan serta hukum yang berlaku.",
  },
  {
    title: "Teamwork",
    description:
      "Seluruh elemen perusahaan berkomitmen bersama-sama mencapai tujuan sesuai target yang dicapai.",
  },
  {
    title: "Harmony",
    description:
      "Seluruh elemen perusahaan berkomitmen menjaga keselarasan hubungan kerja antar seluruh elemen organisasi.",
  },
  {
    title: "Growth Business Plan",
    description:
      "Selalu berkomitmen memberikan pelayanan dan produk terbaik kepada pelanggan / konsumen.",
  },
];

const legalitas = [
  { title: "SK Menkumham", value: "No. AHU-48513.AH.01.02.Tahun 2012" },
  {
    title: "Surat Izin Usaha Perdagangan (SIUP)",
    value: "No. 510.41/520/11-05/PK/XI/2017/P",
  },
  { title: "NPWP", value: "No. 02.228.822.9-507.000" },
  {
    title: "BPOM Cap Ikan Pari",
    value: "No. Izin Edar BPOM RI MD 255311003571",
  },
  {
    title: "BPOM Cap Manci Merah",
    value: "No. Izin Edar BPOM RI MD 255311005571",
  },
  {
    title: "BPOM Cap GMR Emas",
    value: "No. Izin Edar BPOM RI MD 255311007571",
  },
  {
    title: "BPOM Dapur Koki",
    value: "No. Izin Edar BPOM RI MD 255311009571",
  },
  {
    title: "Tanda Daftar Perusahaan (TDP)",
    value: "No. 11.05.1.10.00445",
  },
  {
    title: "Izin Usaha Industri",
    value: "No. 535/30/IUI/III/2018/P",
  },
  {
    title: "Sertifikat SNI",
    value: "No. SNI 3556:2010 SNI ISO 9001:2015",
  },
  {
    title: "Sertifikat Halal MUI Prov. Jateng",
    value: "No. 15060036400319",
  },
];

const Detail = () => {
  return (
    <div className="container mx-auto py-20 px-4">
      {/* NILAI PERUSAHAAN */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-secondary">Nilai-Nilai Perusahaan</h1>
        <p className="text-lg text-gray-600 mt-4">
          Komitmen kami dalam membangun perusahaan yang terpercaya dan bertanggung jawab
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20">
        {values.map((val, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md p-6 border-l-4 border-secondary"
          >
            <h2 className="text-2xl font-bold text-black mb-2">{val.title}</h2>
            <p className="text-gray-700">{val.description}</p>
          </div>
        ))}
      </div>

      {/* LEGALITAS */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-secondary">Legalitas & Perizinan</h1>
        <p className="text-lg text-gray-600 mt-4">
          Legalitas perusahaan kami sebagai bentuk kepatuhan terhadap peraturan yang berlaku
        </p>
      </div>

      <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto mb-16">
        <ul className="space-y-4">
          {legalitas.map((item, index) => (
            <li key={index} className="flex flex-col sm:flex-row justify-between">
              <span className="font-semibold text-gray-800">{item.title}</span>
              <span className="text-gray-600">{item.value}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* ALAMAT & MAP */}
      <div className="text-center mb-10">
      <h1 className="text-4xl font-bold text-secondary">Alamat Perusahaan</h1>
      <p className="text-lg text-gray-600 mt-4">
        Ds. Gajah Kumpul, Kec. Batangan, Kab. Pati, Jawa Tengah, Indonesia
      </p>
    </div>

    <div className="w-full max-w-5xl mx-auto shadow-lg rounded-xl overflow-hidden">
      <iframe
        title="Lokasi Perusahaan"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3958.692080243798!2d111.13629657416253!3d-7.163114870632835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e770f65a1fc66b7%3A0xa30c84722f7ad9cf!2sGajahkumpul%2C%20Batangan%2C%20Kabupaten%20Pati%2C%20Jawa%20Tengah!5e0!3m2!1sid!2sid!4v1721545098479!5m2!1sid!2sid"
        width="100%"
        height="450"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>

    </div>
  );
};

export default Detail;
