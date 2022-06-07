import "./App.css";
import albums from "./data";
import AlbumSelect from "./AlbumSelect";
import AlbumMain from "./AlbumMain";

function App() {
  return (
    <div>
      <AlbumMain
        coverImg={albums[0].coverImg}
        name={albums[0].name}
        tracks={albums[0].tracks}
      />
      <h2>Select an Album</h2>
      {albums.map((album) => (
        <AlbumSelect coverImg={album.coverImg} name={album.name} />
      ))}
    </div>
  );
}

export default App;
