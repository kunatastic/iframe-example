import type { Route } from "./+types/demo";
import { useSearchParams } from "react-router";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Konovo IFrame Demo - Results" },
    { name: "description", content: "Demo page with query parameters" },
  ];
}

export default function Demo() {
  const [searchParams] = useSearchParams();
  const projectId = searchParams.get("projectId");
  const token = searchParams.get("token");

  // Construct the iframe URL with the query parameters
  const iframeUrl = `http://localhost:3000/iframe/research-manager/${projectId}/plan?authToken=${encodeURIComponent(
    token || ""
  )}`;

  console.log("iframeUrl: ", iframeUrl);
  return (
    <div className="h-screen w-screen">
      <iframe
        src={iframeUrl}
        className="w-full h-full border-0"
        title="Research Manager Demo"
        allowFullScreen
      />
    </div>
  );
}
