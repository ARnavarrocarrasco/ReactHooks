import { useLayoutEffect, useRef, useState } from "react"


export const PokemonCard = ({id, name, sprites = []}) => {
    
    const iRef = useRef();
    const [boxSize, setBoxSize] = useState({width: 0, height: 0});

    useLayoutEffect(() => {
        const {height, width} = iRef.current.getBoundingClientRect();
        setBoxSize({height, width})
    }, []);

    return (
        <>
            <section 
                style={{height: 200 }}
            >
                <h2 className="text-text-capitalize">#{id} - {name}</h2>
                {/*Imagenes */}
                <div>
                    {
                        sprites.map(sprite => (
                            <img ref={iRef} key={sprite} src={sprite}/>
                        ))
                    }
                </div>
            </section>
            <code>{JSON.stringify(boxSize)}</code>
        </>
        
    )
}
