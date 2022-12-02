import { useLoaderData } from "@remix-run/react";
import { Guitarra } from "~/components/guitarra";
import { getGuitarras } from "~/models/guitarras.server"
import styles from "~/styles/guitarras.css"



export async function loader(){
  
  const guitarras = await getGuitarras()
  
  return guitarras.data;
}


export function meta() {
  return {
      title: 'GuitarLA - Nuestra tienda',
      description: 'GuitarLA - Nuestra colección de guitarras'

  }
}

export function links(){
  return [
      {
          rel: 'stylesheet',
          href: styles
      }
  ]
}

const Tienda = () => {

  const guitarras = useLoaderData() 
  // console.log(guitarras)

  return (
    <main className="contenedor">
      <div className="heading">Nuestra Colección</div>

      {guitarras.length && (
        <div className="guitarras-grid">
          {guitarras.map(guitarra => (
            <Guitarra
              key={guitarra.id}
              guitarra={guitarra?.attributes}
            />
          ))}
        </div>
      )
      
      }
    </main>
  )
}

export default Tienda