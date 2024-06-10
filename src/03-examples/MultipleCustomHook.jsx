import { useCounter, useFetch } from "../hooks"
import { Loading } from "./Loading";
import { PokemonCard } from "./PokemonCard";


export const MultipleCustomHook = () => {

    const {counter,increment,decrement} = useCounter(1);
    const {data, isLoading, hasError} = useFetch(`https://pokeapi.co/api/v2/pokemon/${counter}`);

    console.log(data)

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

            <h2>{JSON.stringify(data)}</h2>

            <button className="btn btn-primary mt-2" disabled={isLoading} onClick={() =>counter > 1 ? decrement() : null}>Anterior</button>
            <button className="btn btn-primary mt-2" onClick={() => increment()}>Siguiente</button>

        </div>
    )
}

