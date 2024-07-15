"use client";

import QrScanner from "qr-scanner";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [result, setResult] = useState("結果");

  useEffect(() => {
    if (videoRef.current) {
      const scanner = new QrScanner(
        videoRef.current,
        (result) => {
          setResult(result.data);
        },
        {}
      );

      scanner.start();

      return () => {
        scanner.destroy();
      };
    }
  }, []);

  return (
    <div className="h-dvh flex justify-center items-center flex-col">
      <video ref={videoRef} className="w-full" />
      <div>{result}</div>
    </div>
  );
}
