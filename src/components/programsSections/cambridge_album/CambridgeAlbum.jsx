import React from "react";
import { useParams } from "react-router-dom";

import BigBen from "../../../assets/cambridge_album/uk/BigBen.jpg";
import Cambridge from "../../../assets/cambridge_album/uk/Cambridge.jpg";
import Group_1 from "../../../assets/cambridge_album/uk/group.jpg";
import Group_2 from "../../../assets/cambridge_album/uk/Cambridge_group.jpg";
import Bridge from "../../../assets/cambridge_album/uk/London_bridge.jpg";

import Czech1 from "../../../assets/cambridge_album/czechia/czechia1.png";
import Czech2 from "../../../assets/cambridge_album/czechia/czechia2.png";
import Czech3 from "../../../assets/cambridge_album/czechia/czechia3.png";
import Czech4 from "../../../assets/cambridge_album/czechia/czechia4.png";
import Czech5 from "../../../assets/cambridge_album/czechia/czechia5.png";

import Malaysia1 from "../../../assets/cambridge_album/malaysia/malaz1.png";
import Malaysia2 from "../../../assets/cambridge_album/malaysia/malaz2.png";
import Malaysia3 from "../../../assets/cambridge_album/malaysia/malaz3.png";
import Malaysia4 from "../../../assets/cambridge_album/malaysia/malaz4.png";
import Malaysia5 from "../../../assets/cambridge_album/malaysia/malaz5.png";
import Malaysia6 from "../../../assets/cambridge_album/malaysia/malaz6.png";

export default function CountryAlbum() {
  const { country = "uk" } = useParams();

  const albums = {
    uk: {
      left: BigBen,
      topRow: [Cambridge, Group_1, Bridge],
      bottom: Group_2,
    },
    czechia: {
      left: Czech1,
      topRow: Czech2,
      bottom: [Czech5, Czech3, Czech4],
    },
    malaysia: {
      grid: [
        Malaysia1,
        Malaysia2,
        Malaysia3,
        Malaysia4,
        Malaysia5,
        Malaysia6,
      ],
    },
  };

  const album = albums[country.toLowerCase()] || albums["uk"];
  const isCzechia = country.toLowerCase() === "czechia";
  const isMalaysia = country.toLowerCase() === "malaysia";

  return (
    <div className="bg-[#D1E8FF] py-8 w-full">
      <div className="bg-[#A8D6FF] w-[95%] md:w-3/4 mx-auto px-4 py-6 rounded-xl flex flex-col gap-6">
        {!isMalaysia ? (
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full md:w-1/4">
              <img
                src={album.left}
                alt="Left image"
                className="w-full h-auto rounded-lg object-cover"
              />
            </div>
            <div className="w-full md:w-3/4 flex flex-col gap-4">
              {isCzechia ? (
                <>
                  <img
                    src={album.topRow}
                    alt="Top Czechia"
                    className="w-full h-auto max-h-[250px] object-cover rounded-lg"
                  />
                  <div className="flex flex-col sm:flex-row gap-2">
                    {album.bottom.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Czechia bottom ${index + 1}`}
                        className="w-full sm:w-1/3 h-auto object-contain rounded-lg"
                      />
                    ))}
                  </div>
                </>
              ) : (
                <>
                  <div className="flex flex-col sm:flex-row gap-2">
                    {album.topRow.map((img, index) => (
                      <img
                        key={index}
                        src={img}
                        alt={`Top image ${index + 1}`}
                        className="w-full sm:w-1/3 h-auto max-h-[160px] object-fit rounded-lg"
                      />
                    ))}
                  </div>
                  <img
                    src={album.bottom}
                    alt="Bottom image"
                    className="w-full h-auto max-h-[300px] object-fit rounded-lg"
                  />
                </>
              )}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {album.grid.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`Malaysia image ${index + 1}`}
                className="w-full h-auto max-h-[220px] object-cover rounded-xl"
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}