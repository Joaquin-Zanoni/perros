
import { React, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';


function Champs() {
    const [search, setSearch] = useState("");
    const [valor, setValor] = useState({});
    function buscador(event) {
        let api = `http://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion/${search}.json`

        axios.get(api).then((response) => {

            let personajes = Object.values(response.data.data[search])
            setValor(personajes)
            console.log(personajes)
            /*  setValor(response.data.data.search);
             console.log(response.data.data) */
            /* console.log(response.data.data[0]) */
        }).catch((error) => {
            console.log(error)
        })
    }

    return (
        <div className='container d-flex flex-column align-items-center'>
            <input type="text" placeholder='ingrese un campeon' onKeyPress={e =>{
                        if (e.key === "Enter"){
                            buscador(e)
                        }}}
                         onChange={e => setSearch(e.target.value)}></input>
            <button onClick={e => buscador(e)}>Buscar</button>

            {valor !== {} ?

                <div >
                    <ListGroup className='d-flex  align-items-center' variant="flush">
                        <ListGroup.Item> <img width={700} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${valor[0]}_0.jpg`} alt= {`portada de ${valor[2]}`} />  </ListGroup.Item>
                        <ListGroup.Item>{valor[2]}: {valor[3]}</ListGroup.Item>
                        <ListGroup.Item >{valor[6]}</ListGroup.Item> {/* probar para que solo aparezca el resumen y hacer click y que se despliegue todo el texto*/}
                        <ListGroup.Item></ListGroup.Item>
                    </ListGroup>
                </div>
                : <div> no se encontro el campeon</div>}
        </div>



    )
}

export default Champs