function AlbumSelect({ coverImg, name, onSelect }) {
  const style = { borderRadius: "60px", height: "60px", width: "60px" };

  return (
    <div onClick={onSelect}>
      <img style={style} src={coverImg} alt={name} />
      <span>{name}</span>
    </div>
  );
}

export default AlbumSelect;
