import { useLoaderData } from "@remix-run/react";
// import { Guitarra } from "~/components/guitarra";
import ListadoGuitarras from "~/components/listadoGuitarras";
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
      <ListadoGuitarras
        guitarras={guitarras}
      />
    </main>
  )
}

export default Tienda