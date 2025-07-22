import { useEffect } from "react";

export default function Chatbot() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://excellychat-apim.azure-api.net/chatbot/excelly-messenger.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script); // Cleanup on unmount
    };
  }, []);

  return (
    <div>
      <excelly-messenger personaId="3981c678-2d70-4a4e-b75a-6fcc84487682"></excelly-messenger>
    </div>
  );
}
