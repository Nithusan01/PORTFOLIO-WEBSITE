import React, { useState, useEffect } from "react";
import axios from "axios";

const API_BASE_URL = "https://portfolio-website-wnt4.vercel.app/api";
// const API_BASE_URL = "http://localhost:5000/api";

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState("messages"); // messages | projects
  const [messages, setMessages] = useState([]);
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState("");

  // Project form state
  const [editingProject, setEditingProject] = useState(null);
  const [projectForm, setProjectForm] = useState({
    title: "",
    description: "",
    image: "",
    tags: "",
    demoUrl: "",
    codeUrl: ""
  });
  const [showProjectForm, setShowProjectForm] = useState(false);

  useEffect(() => {
    if (activeTab === "messages") {
      fetchMessages();
    } else {
      fetchProjects();
    }
  }, [activeTab]);

  const fetchMessages = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/contact/`);
      setMessages(res.data);
    } catch (err) {
      setStatusMsg("Failed to load messages");
    } finally {
      setLoading(false);
    }
  };

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await axios.get(`${API_BASE_URL}/projects`);
      setProjects(res.data);
    } catch (err) {
      setStatusMsg("Failed to load projects");
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteMessage = async (id) => {
    if (!window.confirm("Are you sure you want to delete this message?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/contact/${id}`);
      setMessages(messages.filter(msg => msg._id !== id));
      setStatusMsg("Message deleted!");
    } catch (err) {
      setStatusMsg("Failed to delete message");
    }
  };

  const handleDeleteProject = async (id) => {
    if (!window.confirm("Are you sure you want to delete this project?")) return;
    try {
      await axios.delete(`${API_BASE_URL}/projects/${id}`);
      setProjects(projects.filter(p => p._id !== id));
      setStatusMsg("Project deleted!");
    } catch (err) {
      setStatusMsg("Failed to delete project");
    }
  };

  const handleProjectFormChange = (e) => {
    setProjectForm({ ...projectForm, [e.target.name]: e.target.value });
  };

  const handleSaveProject = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatusMsg("");
    
    try {
      // Convert tags back to an array
      const projectData = {
        ...projectForm,
        tags: projectForm.tags ? projectForm.tags.split(",").map(t => t.trim()) : []
      };

      if (editingProject) {
        const res = await axios.put(`${API_BASE_URL}/projects/${editingProject._id}`, projectData);
        setProjects(projects.map(p => (p._id === editingProject._id ? res.data : p)));
        setStatusMsg("Project updated!");
      } else {
        const res = await axios.post(`${API_BASE_URL}/projects`, projectData);
        setProjects([...projects, res.data]);
        setStatusMsg("Project added!");
      }
      
      setShowProjectForm(false);
      setEditingProject(null);
      setProjectForm({ title: "", description: "", image: "", tags: "", demoUrl: "", codeUrl: "" });
    } catch (err) {
      setStatusMsg("Failed to save project");
    } finally {
      setLoading(false);
    }
  };

  const openEditForm = (project) => {
    setEditingProject(project);
    setProjectForm({
      title: project.title,
      description: project.description,
      image: project.image,
      tags: project.tags ? project.tags.join(", ") : "",
      demoUrl: project.demoUrl || "",
      codeUrl: project.codeUrl || ""
    });
    setShowProjectForm(true);
  };

  const openNewForm = () => {
    setEditingProject(null);
    setProjectForm({ title: "", description: "", image: "", tags: "", demoUrl: "", codeUrl: "" });
    setShowProjectForm(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-10 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 dark:text-white">Admin Dashboard</h1>
        </div>

        {/* Tab Controls */}
        <div className="flex space-x-4 mb-6 border-b border-gray-200 dark:border-gray-700">
          <button
            className={`pb-4 px-2 font-medium text-lg border-b-2 transition-colors ${
              activeTab === "messages"
                ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("messages")}
          >
            Messages
          </button>
          <button
            className={`pb-4 px-2 font-medium text-lg border-b-2 transition-colors ${
              activeTab === "projects"
                ? "border-yellow-500 text-yellow-600 dark:text-yellow-400"
                : "border-transparent text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-300"
            }`}
            onClick={() => setActiveTab("projects")}
          >
            Projects
          </button>
        </div>

        {/* Status Message */}
        {statusMsg && (
          <div className="mb-4 bg-yellow-100 dark:bg-yellow-900/30 border border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-300 px-4 py-3 rounded-xl flex justify-between">
            {statusMsg}
            <button onClick={() => setStatusMsg("")} className="font-bold">x</button>
          </div>
        )}

        {/* Loading Spinner */}
        {loading && <div className="text-center py-10 dark:text-gray-300">Loading...</div>}

        {/* Messages Content */}
        {!loading && activeTab === "messages" && (
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-700">
            {messages.length === 0 ? (
              <p className="p-8 text-center text-gray-500 dark:text-gray-400">No messages found.</p>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                  <thead className="bg-gray-50 dark:bg-gray-700">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Name/Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Message</th>
                      <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 dark:text-gray-300 uppercase tracking-wider">Action</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white dark:bg-gray-800 divide-y divide-gray-200 dark:divide-gray-700">
                    {messages.map((msg) => (
                      <tr key={msg._id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {new Date(msg.date).toLocaleDateString()}
                        </td>
                        <td className="px-6 py-4">
                          <div className="text-sm font-medium text-gray-900 dark:text-white">{msg.name}</div>
                          <div className="text-sm text-gray-500 dark:text-gray-400">{msg.email}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                          {msg.number || "N/A"}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-500 dark:text-gray-400 max-w-sm shrink-0 truncate hover:whitespace-normal">
                          {msg.message}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <button
                            onClick={() => handleDeleteMessage(msg._id)}
                            className="text-red-600 hover:text-red-900 dark:text-red-400 dark:hover:text-red-300 font-semibold transition"
                          >
                            Delete
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            )}
          </div>
        )}

        {/* Projects Content */}
        {!loading && activeTab === "projects" && (
          <div>
            {!showProjectForm && (
              <div className="mb-6 flex justify-end">
                <button
                  onClick={openNewForm}
                  className="bg-yellow-500 hover:bg-yellow-600 text-white font-medium py-2 px-6 rounded-xl shadow-lg transition transform hover:-translate-y-1"
                >
                  + Add Project
                </button>
              </div>
            )}

            {showProjectForm ? (
              <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-xl p-8 border border-gray-200 dark:border-gray-700">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                  {editingProject ? "Edit Project" : "New Project"}
                </h2>
                <form onSubmit={handleSaveProject} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Title</label>
                      <input type="text" name="title" value={projectForm.title} onChange={handleProjectFormChange} required 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Image URL</label>
                      <input type="text" name="image" value={projectForm.image} onChange={handleProjectFormChange} required 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Tags (comma-separated)</label>
                      <input type="text" name="tags" value={projectForm.tags} onChange={handleProjectFormChange} placeholder="React, Node, Tailwind" 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Demo URL</label>
                      <input type="text" name="demoUrl" value={projectForm.demoUrl} onChange={handleProjectFormChange} 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Code URL</label>
                      <input type="text" name="codeUrl" value={projectForm.codeUrl} onChange={handleProjectFormChange} 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Description</label>
                      <textarea name="description" value={projectForm.description} onChange={handleProjectFormChange} required rows="4" 
                        className="w-full bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-gray-900 dark:text-white focus:ring-yellow-500 focus:border-yellow-500"/>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button type="button" onClick={() => setShowProjectForm(false)} className="px-6 py-3 border border-gray-300 dark:border-gray-600 rounded-xl text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700">Cancel</button>
                    <button type="submit" className="px-6 py-3 bg-yellow-500 hover:bg-yellow-600 text-white rounded-xl font-medium shadow-md">Save Project</button>
                  </div>
                </form>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {projects.map((project) => (
                  <div key={project._id} className="bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 flex flex-col">
                    <div className="h-48 overflow-hidden bg-gray-200 dark:bg-gray-700 relative group">
                      <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" onError={(e) => {e.target.src="https://via.placeholder.com/300?text=No+Image"}} />
                    </div>
                    <div className="p-6 flex-1 flex flex-col">
                      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 flex-1 line-clamp-3">{project.description}</p>
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-4">
                          {project.tags.map((tag, i) => (
                            <span key={i} className="text-xs font-semibold bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 px-2 py-1 rounded">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      <div className="pt-4 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center mt-auto">
                        <button onClick={() => openEditForm(project)} className="text-blue-600 hover:text-blue-800 dark:text-blue-400 dark:hover:text-blue-300 font-medium">Edit</button>
                        <button onClick={() => handleDeleteProject(project._id)} className="text-red-600 hover:text-red-800 dark:text-red-400 dark:hover:text-red-300 font-medium">Delete</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminDashboard;
