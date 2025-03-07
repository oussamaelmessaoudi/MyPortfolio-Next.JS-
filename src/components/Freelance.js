"use client";
import React, { useState } from "react";
import { PinContainer } from "./ui/3d-pin";

const projects = [
  {
    id: 1,
    title: "3D PowerPoint Presentations",
    category: "Graphics & Design/ Presentation Design",
    media: [
      { type: "image", url: "/custom-3d-powerpoint-presentations-for-business.jpg", caption: "Presentation Example" },
      { type: "video", url: "/coca-sample.mp4", caption: "Coca-cola Sample" }
    ]
  },
  {
    id: 2,
    title: "YouTube Thumbnails",
    category: "Graphics & Design/ Social Media Design/ Thumbnails Design",
    media: [
      { type: "image", url: "/Thumbnail.jpg", caption: "Thumbnail Preview" },
      { type: "image", url: "/Shopify.jpg", caption: "Shopify Thumbnail" },
      { type: "image", url: "/Story-Time.jpg", caption: "Story Time Thumbnail" },
    ]
  },
  // Add other projects...
];

export function Freelance() {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <div className="h-auto w-full grid grid-cols-3 gap-y-10 place-items-center pt-20 pb-20">
      {projects.map((project, index) => (
        <div key={project.id} className={index % 3 === 0 ? "translate-x-[30%]" : index % 3 === 2 ? "translate-x-[-30%]" : ""}>
          <PinContainer 
            title="See Projects" 
            onClick={() => setSelectedProject(project)}
          >
            <div className="flex flex-col tracking-tight text-slate-100/50 w-[18rem] h-[18rem]">
              <h3 className="max-w-xs font-bold text-base text-slate-100">
                {project.title}
              </h3>
              <div className="text-base font-normal text-slate-500">
                {project.category}
              </div>
              <div className="flex flex-1 w-full rounded-lg mt-3 bg-cover bg-center"
                   style={{ backgroundImage: `url('${project.media[0].url}')` }} />
            </div>
          </PinContainer>
        </div>
      ))}

      {/* Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-[9999] flex items-center justify-center p-4"
             onClick={() => setSelectedProject(null)}>
          <div className=" relative bg-[#1C1C1C] rounded-xl max-w-6xl z-[9999] w-full max-h-[90vh] p-8 overflow-auto modal-content"
              style={{
                overflowY: "scroll", 
                scrollbarWidth: "none",
                WebkitScrollbar: "none", 
                msOverflowStyle: "none", 
              }}
               onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 text-white z-[9999] hover:text-gray-300 text-3xl"
            >
              &times;
            </button>
            
            <h2 className="text-3xl font-bold text-white mb-6">
              {selectedProject.title}
            </h2>
            
            <div className="grid z-[9999] grid-cols-1 md:grid-cols-2 gap-6">
              {selectedProject.media.map((item, index) => (
                <div key={index} className="relative group">
                  {item.type === 'image' ? (
                    <img
                      src={item.url}
                      alt={item.caption}
                      className="w-full h-auto rounded-lg shadow-xl transition-transform group-hover:scale-105"
                    />
                  ) : (
                    <video
                      src={item.url}
                      controls
                      className="w-full h-auto rounded-lg shadow-xl"
                    />
                  )}
                  <p className="text-white mt-2 text-center">{item.caption}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}