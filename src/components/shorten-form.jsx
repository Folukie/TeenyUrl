import React, { useState } from "react";
import axios from "axios";

const ShortenForm = ({ onData }) => {
  const [formData, setFormData] = useState({
    url: "",
    name: "",
  });
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("/api/submit-form", {
      url: formData.url,
    });
    typeof onData === "function" && onData(res.data.result_url);
  };

  return (
    <form className="flex mt-4 justify-center" onSubmit={handleSubmit}>
      <input
        placeholder="Paste URL"
        className="border h-14 px-4 w-3/5 rounded-tl-md rounded-bl-md"
        name="url"
        value={formData.url}
        onChange={handleChange}
      />

      <button className="bg-primary-dark text-white h-14 text-lg p-4 font-bold flex items-center rounded-tr-md rounded-br-md hover:bg-opacity-90">
        Shorten
      </button>
    </form>
  );
};

export default ShortenForm;
