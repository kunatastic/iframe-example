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
  const token = searchParams.get("authToken");

  // // Construct the iframe URL with the token parameter
  const iframeUrl = `http://localhost:3000/iframe/research-manager?authToken=${encodeURIComponent(
    token || ""
  )}&domainHash=213231321321321`;

  // const iframeUrl = `https://app.dev.metaforms.ai/iframe/research-manager?authToken=${encodeURIComponent(
  //   token || ""
  // )}`;

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
