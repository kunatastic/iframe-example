import type { Route } from "./+types/home";
import { useState } from "react";
import { useNavigate } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const [projectId, setProjectId] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate to demo page with both project ID and token as query parameters
    const params = new URLSearchParams({
      projectId: projectId,
      authToken: token,
    });
    navigate(`/demo?${params.toString()}`);
  };

  return (
    <main className="flex items-center justify-center pt-16 pb-4">
      <div className="flex-1 flex flex-col items-center gap-16 min-h-0">
        <header className="flex flex-col items-center gap-9">
          <h1 className="text-3xl font-bold text-gray-900">Konovo IFrame Demo</h1>
        </header>
        <div className="max-w-[400px] w-full space-y-6 px-4">
          <form
            onSubmit={handleSubmit}
            className="rounded-3xl border border-gray-200 p-6 space-y-4"
          >
            <div className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="projectId" className="block text-sm font-medium text-gray-700">
                  Project ID:
                </label>
                <input
                  id="projectId"
                  type="text"
                  value={projectId}
                  onChange={(e) => setProjectId(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter project ID..."
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="token" className="block text-sm font-medium text-gray-700">
                  Token:
                </label>
                <input
                  id="token"
                  type="text"
                  value={token}
                  onChange={(e) => setToken(e.target.value)}
                  className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Enter token..."
                />
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
            >
              Confirm
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
