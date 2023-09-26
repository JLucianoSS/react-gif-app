
import { useAxiosGifs } from "../hooks/useAxiosGifs";
import { GifCard } from "./GifCard";



export const GifGrid = ({ category }) => {

  
  const { images, isLoading } = useAxiosGifs(category) // custom hook
  // console.log(isLoading);
  
  return (
    <>
        <h3>{category}</h3>
        {
          isLoading && (<h2>Cargando...</h2>) 
        }
        <div className="card-grid">
          {
            images.map((image)=>(
              <GifCard 
                key={image.id} 
                // title={image.title}
                // url={image.url}
                {...image}

              />
            ))
          }
        </div>
    </>
  )
}
