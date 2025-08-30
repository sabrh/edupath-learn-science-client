"use client";
import React from "react";

export default function VideoCard({ videoUrl, title }) {
  return (
    <div className="w-full aspect-video rounded-lg overflow-hidden border">
      <iframe
        width="100%"
        height="100%"
        src={videoUrl.replace("watch?v=", "embed/")}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </div>
  );
}
