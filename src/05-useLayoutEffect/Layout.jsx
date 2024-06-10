import { useCounter, useFetch } from "../hooks"
import { Loading  } from "../03-examples/Loading";
import { PokemonCard } from "../03-examples/PokemonCard";



export const Layout = () => {

    const {counter,increment,decrement} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);


    return (
        <div>
            <h1>MultipleCustomHooks</h1>
            <hr />
            {isLoading 
            ? <Loading/>
            : <PokemonCard id = {counter} name = {data.name} sprites={[data.sprites.front_default,
                data.sprites.front_shiny,
                data.sprites.back_default,
                data.sprites.back_shiny,
            ] }/>
            }

            <button className="btn btn-primary mt-2" onClick={() =>counter > 1 ? decrement() : null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>

        </div>
    )
}