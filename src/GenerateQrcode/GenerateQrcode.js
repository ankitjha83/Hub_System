import React from "react";
import { useQRCode } from "react-hook-qrcode";

function GenerateQrcode() {
  const [inputRef] = useQRCode({
    text: "https://github.com/bunlong/react-hook-qrcode",
    options: {
      level: "M",
      margin: 7,
      scale: 1,
      width: 200,
      color: {},
    },
  });

  return <canvas ref={inputRef} />;
}
export default GenerateQrcode;
