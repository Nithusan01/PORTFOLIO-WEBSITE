import { useState } from "react";
import axios from "axios";

export default function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "", number: "" });
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [submittedName, setSubmittedName] = useState("");
  const [error, setError] = useState("");
  const API =  "https://portfolio-website-wnt4.vercel.app/" ;


  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!/^\d{10}$/.test(form.number)) {
      setError("Please enter a valid 10-digit phone number.");
      return;
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    } else if (form.message.length < 10) {
      setError("Please write a message with at least 10 characters.");
      return;
    } else {
      setError("");
    }

    setLoading(true);
    setStatus("");
    try {
      await axios.post(`${API}api/contact`, form);
      setSubmittedName(form.name);
      setStatus("success");
      setForm({ name: "", email: "", message: "", number: "" });
    } catch (err) {
      console.error(err);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <form
        onSubmit={handleSubmit}
        className="group bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl shadow-2xl rounded-3xl p-8 sm:p-10 space-y-6 border border-gray-200/50 dark:border-gray-700/50 hover:shadow-3xl transition-all duration-500"
      >
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-700 dark:text-yellow-300 text-sm font-medium mb-4">
            <span className="w-2 h-2 bg-yellow-500 rounded-full animate-pulse"></span>
            Get In Touch
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 dark:text-white mb-3">
            Let's <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">Connect</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg">
            Have a project in mind? Let's discuss how we can work together.
          </p>
        </div>

        {/* Error Message */}
        {error && (
          <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-700 dark:text-red-300">
            <div className="w-5 h-5 flex-shrink-0">⚠️</div>
            <p className="text-sm font-medium">{error}</p>
          </div>
        )}

        {/* Form Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Name Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 dark:text-gray-500">👤</span>
            </div>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Your Name"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
            />
          </div>

          {/* Email Field */}
          <div className="relative">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 dark:text-gray-500">📧</span>
            </div>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="your.email@example.com"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
            />
          </div>

          {/* Phone Field */}
          <div className="relative md:col-span-2">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <span className="text-gray-400 dark:text-gray-500">📞</span>
            </div>
            <input
              type="tel"
              name="number"
              value={form.number}
              onChange={handleChange}
              placeholder="+94 (074) 123-4567"
              required
              className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm transition-all duration-300"
            />
          </div>

          {/* Message Field */}
          <div className="relative md:col-span-2">
            <div className="absolute top-4 left-4 flex items-start pointer-events-none">
              <span className="text-gray-400 dark:text-gray-500 mt-0.5">💬</span>
            </div>
            <textarea
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Tell me about your project, ideas, or anything you'd like to discuss..."
              required
              rows={6}
              className="w-full pl-12 pr-4 py-4 bg-white/50 dark:bg-gray-700/50 border border-gray-200/50 dark:border-gray-600/50 rounded-2xl focus:outline-none focus:ring-2 focus:ring-yellow-500/50 focus:border-yellow-500 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 backdrop-blur-sm resize-none transition-all duration-300"
            />
            <div className="absolute bottom-3 right-3 text-xs text-gray-400 dark:text-gray-500">
              {form.message.length}/500
            </div>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={loading}
          className={`w-full group relative py-4 px-8 rounded-2xl font-semibold text-lg transition-all duration-500 overflow-hidden ${
            loading 
              ? "bg-gray-400 dark:bg-gray-600 cursor-not-allowed" 
              : "bg-gradient-to-r from-yellow-500 to-amber-500 hover:from-yellow-600 hover:to-amber-600 shadow-lg hover:shadow-xl transform hover:scale-105"
          }`}
        >
          <div className="relative z-10 flex items-center justify-center gap-3">
            {loading ? (
              <>
                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending Message...
              </>
            ) : (
              <>
                <span className="group-hover:scale-110 transition-transform duration-300">🚀</span>
                Send Message
              </>
            )}
          </div>
          
          {/* Button shine effect */}
          {!loading && (
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          )}
        </button>

        {/* Success Message */}
        {status === "success" && (
          <div className="flex items-center gap-3 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl text-green-700 dark:text-green-300 animate-in slide-in-from-bottom duration-500">
            <div className="w-5 h-5 flex-shrink-0">✅</div>
            <div>
              <p className="font-semibold">Message Sent Successfully!</p>
              <p className="text-sm">Thank you, {submittedName}! I'll get back to you within 24 hours.</p>
            </div>
          </div>
        )}

        {/* Error Message */}
        {status === "error" && (
          <div className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl text-red-700 dark:text-red-300 animate-in slide-in-from-bottom duration-500">
            <div className="w-5 h-5 flex-shrink-0">❌</div>
            <div>
              <p className="font-semibold">Message Failed to Send</p>
              <p className="text-sm">Please try again or contact me directly at b.nithusan01@gmail.com</p>
            </div>
          </div>
        )}
      </form>

      {/* Additional Contact Info */}
      <div className="mt-8 text-center">
        <p className="text-gray-500 dark:text-gray-400 text-sm">
          Prefer direct contact?{" "}
          <a 
            href="mailto:b.nithusan01@gmail.com" 
            className="text-yellow-600 dark:text-yellow-400 hover:underline font-medium"
          >
            b.nithusan01@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}