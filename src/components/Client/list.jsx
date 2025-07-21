import React from "react";
import { Table, Button } from "antd";

const clients = [
  { id: 1, name: "Client One", industry: "Finance", location: "New York" },
  { id: 2, name: "Client Two", industry: "Tech", location: "San Francisco" },
  {
    id: 3,
    name: "Client Three",
    industry: "Healthcare",
    location: "Los Angeles",
  },
  // ... Add more clients up to 17
  { id: 17, name: "Client Seventeen", industry: "Retail", location: "Chicago" },
];

const columns = [
  {
    title: "Client Name",
    dataIndex: "name",
    key: "name",
    sorter: (a, b) => a.name.localeCompare(b.name),
    render: (text) => (
      <span className="font-semibold text-gray-900">{text}</span>
    ),
  },
  {
    title: "Industry",
    dataIndex: "industry",
    key: "industry",
    sorter: (a, b) => a.industry.localeCompare(b.industry),
    render: (text) => <span className="text-gray-700">{text}</span>,
  },
  {
    title: "Location",
    dataIndex: "location",
    key: "location",
    sorter: (a, b) => a.location.localeCompare(b.location),
    render: (text) => <span className="text-gray-700">{text}</span>,
  },
];

const ClientTList = () => {
  return (
    <div className="container">
      <h1 className="text-3xl font-extrabold mb-6 text-center text-gray-800">
        Our Esteemed Clients
      </h1>
      <Table
        columns={columns}
        dataSource={clients}
        pagination={false}
        rowKey="id"
        className="rounded-lg shadow-lg overflow-hidden"
      />
      {/* <div className="mt-8 text-center">
        <Button
          type="primary"
          size="large"
          className="rounded-full shadow-md hover:shadow-lg transition-shadow duration-300"
        >
          View All Clients
        </Button>
      </div> */}
    </div>
  );
};

export default ClientTList;
