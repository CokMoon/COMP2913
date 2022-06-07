function AlbumSelect(props) {
  const style = { borderRadius: "60px", height: "60px", width: "60px" };
  const { coverImg, name } = props;

  return (
    <div>
      <img style={style} src={coverImg} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default AlbumSelect;
