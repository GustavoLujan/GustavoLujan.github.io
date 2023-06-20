import { useState } from "react"
import ItemCount from "../ItemCount/ItemCount"
import { Link, useNavigate } from "react-router-dom"



const ItemDetail = ({id, nombre, precio, category, descripcion, img, stock}) => {
    const [cantidad, setCantidad] = useState(1)

    const navigate = useNavigate()

    const handleAgregar = () => {
        const item = {
            id, 
            nombre, 
            precio, 
            category, 
            descripcion, 
            img, 
            stock, 
            cantidad, 
            talle
        }
        console.log(item)
    }

    
    const handleVolver = () => {
        navigate(-1)
    }


    return (
        <div className="container my-5">
            <h2>{nombre}</h2>

            <img src={img} alt={nombre}/>
            <p>{descripcion}</p>

            <h4>Precio: ${precio}</h4>
            <br/>
            <small>Categoría: {category}</small>

            <ItemCount 
                max={stock}
                cantidad={cantidad}
                setCantidad={setCantidad}
                handleAgregar={handleAgregar}
            />

            <hr/>
            <button onClick={handleVolver} className="btn btn-primary">Volver</button>
        </div>
    )
}

export default ItemDetail