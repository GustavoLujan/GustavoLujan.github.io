import { useRef } from "react"
import { useSearchParams } from 'react-router-dom'

const Buscador = () => {
    const [, setSearchParams] = useSearchParams()

    const ref = useRef()

    const handleSubmit = (e) => {
        e.preventDefault()
        const value = ref.current.value

        if (value === '') {
            setSearchParams({})
            return
        }

        setSearchParams({
            search: value
        })
    }

    const handleReset = () => {
        setSearchParams({})
    }

    return (
        <form className="p-3" onSubmit={handleSubmit}>
            <input
                ref={ref}
                className="form-control"
                type="text"
            />
            <button type="submit" className="btn btn-light">Buscar</button>
        </form>
    )
}

export default Buscador