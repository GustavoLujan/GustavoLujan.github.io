import { useEffect } from "react"
import useMobile from "../../hooks/useMobile"


const Nosotros = () => {
    const isMobile = useMobile()

    const clickear = (e) => {
        console.log(e)
    }

    useEffect(() => {
        window.addEventListener('click', clickear)

        return () => {
            window.removeEventListener('click', clickear)
        }
    }, [])

    return (
        <div className="container my-5">
            <h2 onClick={clickear}>Nosotros</h2>
            <hr/>

            {
                isMobile ? <h3>Estamos en mobile</h3> : <p>Estamos en desk</p>
            }

        </div>
    )
}

export default Nosotros