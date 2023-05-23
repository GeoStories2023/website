import React, { useEffect } from "react";
import "@/style/Login.scss";
import logo from "@/assets/geo-stories_logo_3.svg";
import LoginFormAdmin from "./LoginFormAdmin";

function LoginAdmin({ setUser }: { setUser: any }) {
  const blobVariations = [
    "30% 70% 70% 30% / 30% 30% 70% 70%",
    "70% 30% 20% 80% / 50% 25% 75% 50%",
    "20% 80% 55% 45% / 70% 25% 75% 30%",
    "80% 20% 30% 70% / 75% 90% 10% 25%",
  ];
  const blobRotates = ["0deg", "10deg", "20deg", "40deg"];
  const blobScales = ["scale(1)", "scale(1.25)"];
  useEffect(() => {
    const blobs = Array.from(document.getElementsByClassName("blob"));
    blobs.forEach((blob: any, index: number) => {
      blobVariations.sort(() => Math.random() - 0.5);
      blobRotates.sort(() => Math.random() - 0.5);
      blobScales.sort(() => Math.random() - 0.5);
      let style = document.createElement("style");
      style.innerHTML = `
        @keyframes blob${index}{
          0%{
            border-radius: ${blobVariations[0]};
            rotate: ${blobRotates[0]};
            transform: ${blobScales[0]};
          }
          25%{
            border-radius: ${blobVariations[1]};
            rotate: ${blobRotates[1]};
          }
          50% {
            border-radius: ${blobVariations[2]};
            transform: ${blobScales[2]};
          }
          75% {
            border-radius: ${blobVariations[3]};
            rotate: ${blobRotates[3]};
          }
          100% {
            border-radius: ${blobVariations[0]};
            rotate: ${blobRotates[0]};
            transform: ${blobScales[0]};
          }
        }
      `;
      document.head.appendChild(style);
      blob.style.animation = `blob${index} 120s ease-in-out infinite`;
    });
  }, []);
  return (
    <div className="login-container">
      <div className="blob blob-1"></div>
      <div className="blob blob-2"></div>
      <div className="blob blob-3"></div>
      <div className="blob blob-4"></div>
      <LoginFormAdmin setUser={setUser} />
    </div>
  );
}

export default LoginAdmin;
