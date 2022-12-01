import imagen from '../../public/img/nosotros.jpg'
import styles from '~/styles/nosotros.css'

export function meta() {
    return {
        title: 'GuitarLA - Nosotros',
        description: 'Venta de guitarras, blog de música y más'
    }
}

export function links(){
    return [
        {
            rel: 'stylesheet',
            href: styles
        },
        {
            rel: 'preload',
            href: imagen,
            as: 'image'
        }
    ]
}


const Nosotros = () => {
    return (
        <main className="contenedor nosotros">
            <h2 className="heading">Nosotros</h2>
            <div className="contenido">
                <img src={imagen} alt="Imagen sobre nosotros" />
                <div>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum veniam reiciendis id, debitis omnis officia consequatur nihil et impedit tempore. Earum quasi veritatis illum eligendi sit atque dolorem commodi iste.
                    Soluta totam veniam dignissimos atque cum magni ex, tempora excepturi aut cupiditate rem ut commodi saepe ullam quos. Tenetur aperiam vel quos laudantium iure fugiat omnis sunt qui. Hic, dolorem.
                    </p>
                    <p>Odit explicabo quae facilis fugit aut impedit cumque ex dicta quisquam, et, laudantium excepturi ullam, similique reiciendis nemo tempore magni dolore eaque possimus dolorem omnis ducimus. Architecto dicta officia ipsam.
                    Adipisci asperiores, inventore dolore esse voluptatum velit et laborum culpa unde impedit natus iste voluptas quos molestias non veniam necessitatibus incidunt suscipit quibusdam amet aliquam, libero reiciendis repellendus voluptatem? Ducimus?</p>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum veniam reiciendis id, debitis omnis officia consequatur nihil et impedit tempore. Earum quasi veritatis illum eligendi sit atque dolorem commodi iste.
                    Soluta totam veniam dignissimos atque cum magni ex, tempora excepturi aut cupiditate rem ut commodi saepe ullam quos. Tenetur aperiam vel quos laudantium iure fugiat omnis sunt qui. Hic, dolorem.
                    </p>
                </div>
            </div>
        </main>
    )
}

export default Nosotros