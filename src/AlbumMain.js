import React from "react";
import image from "./play.png";

function AlbumMain({ coverImg, name, tracks }) {
  const style = { display: "flex" };
  return (
    <div style={style}>
      <img src={coverImg} alt={name} />
      <ol>
        {tracks.map((track, index) => (
          <li padding="10px" key={`track #${index}`}>
            {track}{" "}
            <img src={image} alt="play icon" width="20px" height="20px" />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AlbumMain;
