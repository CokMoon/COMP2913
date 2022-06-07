import image from "./play.png";

function AlbumMain(props) {
  const { coverImg, name, tracks } = props;
  const style = { display: "flex" };
  return (
    <div style={style}>
      <img src={coverImg} alt={name} />
      <ol>
        {tracks.map((track) => (
          <li padding="10px">
            {track}{" "}
            <img src={image} alt="play icon" width="20px" height="20px" />
          </li>
        ))}
      </ol>
    </div>
  );
}

export default AlbumMain;
