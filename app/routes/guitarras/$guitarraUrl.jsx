import { useLoaderData } from "@remix-run/react";
import { getGuitarra } from "~/models/guitarras.server";


export async function loader({params}){

    const {guitarraUrl} = params
    // console.log(guitarraUrl);

    const guitarra = await getGuitarra(guitarraUrl);
    

    return guitarra
}

const Guitarra = () => {

    const guitarra = useLoaderData();
    const {nombre, descripcion, imagen, precio} = guitarra.data[0].attributes;

    return (
        <div>$guitarraUrl</div>
    )
}

export default Guitarra;
