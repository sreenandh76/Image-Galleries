function ImageCard(props){
  return (
    <div className="card">
      <img 
        src={props.src} alt={props.title}
        onClick={() => props.setPopup(props.src)} 
      />
      <p>{props.title}</p>
    </div>
  )
}

export default ImageCard