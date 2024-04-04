const Pokemon = ({data}) => {
    
    return (
        <>
          {
            data.map((pokemon)=>{
                
            <h1>{pokemon.name}</h1>

            })
          }  
        </>
    );
};

export default Pokemon;
