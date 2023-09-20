import Titulo from "../../componentes/Titulo"
import { obterCategoriaPorSlug } from "../../http"
import { useParams } from "react-router-dom"
import Loader from "../../componentes/Loader"
import { useQuery } from "react-query"
import ListaLivros from "../../componentes/ListaLivros"

const Categoria = () => {

    const params = useParams()
    const { data : categoria, isLoading } = useQuery(['categoriaPorSlug', params.slug], () => obterCategoriaPorSlug(params.slug || ''))

    if (isLoading) {
        return <Loader />
    }

    return (
        <section>
            <Titulo texto={categoria?.nome ?? ''} />
            <ListaLivros categoria={categoria!} />
        </section>
    )
}

export default Categoria