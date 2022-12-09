
import { Guitarra } from './guitarra'

const ListadoGuitarras = ({ guitarras }) => {
    return (
        <>
            <div className="heading">Nuestra Colección</div>

            {
                guitarras.length && (
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
        </>
    )
}

export default ListadoGuitarras;
