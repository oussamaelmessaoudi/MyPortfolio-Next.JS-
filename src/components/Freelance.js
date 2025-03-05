"use client";
import React from "react";
import { PinContainer } from "./ui/3d-pin";

export function Freelance() {
  return (
    (   
    <div className="h-auto w-full grid grid-cols-3 gap-y-10 place-items-center pt-20 pb-20" >
    <div className="translate-x-[30%]">
    <PinContainer title="See Projects" href="https://drive.google.com/drive/folders/1rR_4hSffAWcLFFwEVIVQLGqOqD-PZdV2?usp=drive_link">
        <div className="flex flex-col tracking-tight text-slate-100/50 w-[18rem] h-[18rem]">
            <h3 className="max-w-xs font-bold text-base text-slate-100">
                3D PowerPoint presentations and pitch decks for businesses.
            </h3>
            <div className="text-base font-normal text-slate-500">
                Graphics & Design/ Presentation Design
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-3 bg-cover bg-center"
                 style={{ backgroundImage: "url('/custom-3d-powerpoint-presentations-for-business.jpg')" }} />
        </div>
    </PinContainer>
    </div>

    <PinContainer title="See Projects" href="https://drive.google.com/drive/folders/1v9Oh_JsCQ_AjwDpopilESBvu_-pgAmdI?usp=drive_link">
        <div className="flex flex-col tracking-tight text-slate-100/50 w-[18rem] h-[18rem]">
            <h3 className="max-w-xs font-bold text-base text-slate-100">YouTube Thumbnails</h3>
            <div className="text-base font-normal text-slate-500">
                Graphics & Design/ Social Media Design/ Thumbnails Design
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-3 bg-cover bg-center"
                 style={{ backgroundImage: "url('/Thumbnail.jpg')" }} />
        </div>
    </PinContainer>
    <div className="translate-x-[-30%]">
    <PinContainer title="See Projects" href="https://drive.google.com/drive/folders/1Ahk47zq7o4fx2Pepq93nvzIO0tpwF1wN?usp=drive_link">
        <div className="flex flex-col tracking-tight text-slate-100/50 w-[18rem] h-[18rem]">
            <h3 className="max-w-xs font-bold text-base text-slate-100">Automated Spreadsheets</h3>
            <div className="text-base font-normal text-slate-500">
                Data/ Data Processing/ Automations
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-3 bg-cover bg-center"
                 style={{ backgroundImage: "url('/Spread.jpg')" }} />
        </div>
    </PinContainer>
    </div>
    <div className="translate-x-[30%]">
    <PinContainer title="See Projects" href="https://drive.google.com/drive/folders/1Ahk47zq7o4fx2Pepq93nvzIO0tpwF1wN?usp=drive_link">
        <div className="flex flex-col p-3 tracking-tight text-slate-100/50 w-[18rem] h-[18rem]">
            <h3 className="max-w-xs font-bold text-base text-slate-100">Graphic Designs</h3>
            <div className="text-base font-normal text-slate-500">
            Graphics & Design
            </div>
            <div className="flex flex-1 w-full rounded-lg mt-3 bg-cover bg-center"
                 style={{ backgroundImage: "url('/Spread.jpg')" }} />
        </div>
    </PinContainer>
    </div>
</div>
)
  );
}
