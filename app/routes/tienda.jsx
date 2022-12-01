import { getGuitarras } from "~/models/guitarras.server"



export async function loader(){
  
  const guitarras = await getGuitarras()
  
  return guitarras;
}


export function meta() {
  return {
      title: 'GuitarLA - Tienda'
  }
}

export function links(){
  return [
      {
          rel: 'stylesheet',
          href: '/tienda'
      }
  ]
}

const Tienda = () => {
  return (
    <div>Tienda</div>
  )
}

export default Tienda