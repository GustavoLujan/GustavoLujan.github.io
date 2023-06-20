import './ItemListContainer.css'
import ItemList from '../ItemList/ItemList'
import { useState, useEffect } from 'react'
import { pedirDatos } from '../../helpers/pedirDatos'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'

const ItemListContainer = () => {

    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const [searchParams] = useSearchParams()

    const search = searchParams.get("search")

    const { categoryId } = useParams()

    useEffect(() => {
        setLoading(true)

        pedirDatos()
            .then((res) => {
                if (!categoryId) {
                    setProductos(res)
                } else {
                    setProductos( res.filter((item) => item.category === categoryId) )
                }
            })
            .catch((err) => console.log(err))
            .finally(() => setLoading(false))
    }, [categoryId])

    const listado = search
                        ? productos.filter(prod => prod.nombre.includes(search))
                        : productos

    return (
        <div className="container my-5">
            {
                loading
                    ? <h2>Cargando...</h2>
                    : <ItemList items={listado}/>
            }
        </div>
    )
}

export default ItemListContainer

// const promesa = new Promise((resolve, reject) => {
//     // cuerpo promesa
//     setTimeout(() => {
//         // resolve("Promesa resuelta")
//         reject("Promesa rechazada")
//     }, 5000)
// })

// promesa
//     .then(() => {
//         console.log("Hola mundo")
//     })
//     .catch(() => {
//         console.log("Chau mundo")
//     })


// const procesoAsync = (bool) => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             if (bool) {
//                 resolve("Juan Carlos")
//             } else {
//                 reject("Promesa rechazada")
//             }
//         }, 2000)
//     })
// }

// procesoAsync(true)
//     .then((res) => {
//         console.log(res)
//     })
//     .catch((error) => {
//         console.log(error)
//     })