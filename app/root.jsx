

const App = () => {

    return(
        <Document>
            <h1>Hola mundo</h1>
        </Document>
    )
}

const Document = ({children}) => {
    return(
        <html lang="es">
            <head>
                <title>GuitarLA - Remix</title>
            </head>
            <body>
                {children}
            </body>
        </html>
    )
}

export default App;