import ImageCard from "./ImageCard"

function Gallery(props){

  return (
    <div className="grid">
      {props.images.map((item, index)=>(
        <ImageCard
          key={index}
          src={item.src}
          title={item.title}
          setPopup={props.setPopup}
        />
      ))}
    </div>
  )
}

export default Gallery