import { useEffect, useState } from "react";
import axios from "axios";
import ProjectCart from "./projectCart";


export default function ProjectList() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get("http://localhost:5000/api/projects")
      .then(res => setProjects(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false));
  }, []);

  // Skeleton card
 const SkeletonCard = () => (
    <div className="rounded-2xl border border-gray-200 bg-white shadow-lg w-full max-w-md h-80 animate-pulse p-5 flex flex-col">
      <div className="bg-gray-300 h-44 rounded-xl mb-4"></div>
      <div className="h-6 bg-gray-300 rounded mb-2 w-3/4"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-full"></div>
      <div className="h-4 bg-gray-300 rounded mb-2 w-5/6"></div>
      <div className="flex gap-2 mt-auto">
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
        <div className="h-8 w-20 bg-gray-300 rounded"></div>
      </div>
    </div>
  );

  return (
    <section className="p-6">
      <h2 className="text-2xl font-bold mb-6 text-center p-4">My Projects</h2>
      <div className="grid gap-7 grid-cols-1 sm:grid-cols-2 l  lg:grid-cols-3 px-40 ">
        {loading
          ? // Show 6 skeleton cards while loading
            Array.from({ length: 6 }).map((_, idx) => <SkeletonCard key={idx} />)
          : projects.map((p) => <ProjectCart key={p._id} {...p} />)
        }
      </div>
    </section>
  );
}
  