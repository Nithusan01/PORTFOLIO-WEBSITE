import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", number: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState(""); 

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("Sending...");
    try {
      await axios.post("http://localhost:5000/api/contact", form);
      setSubmittedName(form.name); 
      setStatus("Message sent!");
      setForm({ name: "", email: "", message: "", number: "" });
    } catch (err) {
      console.error(err);
      setStatus("Error sending message.");
    } finally {
      setLoading(false);
    }
  };

  return (
   <form
  onSubmit={handleSubmit}
  className="max-w-md mx-auto mt-10 bg-white shadow-lg rounded-2xl p-8 space-y-4 border border-black"
>
  <h2 className="text-2xl font-bold text-gray-800 text-center">
  </h2>

  <input
    type="text"
    name="name"
    value={form.name}
    onChange={handleChange}
    placeholder="Your Name"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
  />

  <input
    type="email"
    name="email"
    value={form.email}
    onChange={handleChange}
    placeholder="Your Email"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
  />

  <input
    type="text"
    name="number"
    value={form.number}
    onChange={handleChange}
    placeholder="Your Number"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
  />

  <textarea
    name="message"
    value={form.message}
    onChange={handleChange}
    placeholder="Your Message"
    required
    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-500"
    rows={4}
  />

  <button
    type="submit"
    disabled={loading}
    className="w-full bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-4 py-2 rounded-md transition"
  >
    {loading ? "Sending..." : "Send"}
  </button>

  {status === "Message sent!" && (
    <p className="text-center text-gray-700">
      Thank you, {submittedName}, for reaching out! I'll get back to you soon.
    </p>
  )}
</form>
);
}
