import albums from "./data";
import AlbumSelect from "./AlbumSelect";
import AlbumMain from "./AlbumMain";
import { useState } from "react";

function AlbumPlayer() {
  const [showIndex, setShowIndex] = useState(0);

  return (
    <div>
      <AlbumMain
        coverImg={albums[showIndex].coverImg}
        name={albums[showIndex].name}
        tracks={albums[showIndex].tracks}
      />
      <h2>Select an Album</h2>
      {albums.map((album) => (
        <AlbumSelect
          coverImg={album.coverImg}
          name={album.name}
          onSelect={() => setShowIndex(album.id)}
          key={`album #${album.id}`}
        />
      ))}
      {/* <p>clicked {showIndex}</p> */}
    </div>
  );
}

export default AlbumPlayer;
