function ImageCard(props){
  return (
    <div className="card">
      <img 
        src={props.src} 
        onClick={() => props.setPopup(props.src)} 
      />
      <p>{props.title}</p>
    </div>
  )
}

export default ImageCard