
import { React, useState } from 'react'
import axios from 'axios'
import ListGroup from 'react-bootstrap/ListGroup';

function Invocador() {
    // uso 3 usestates para guardar al invocador buscado (search), los datos del invocador(valor) y el campeon mas usado(champ)
    const [champ, setChamp] = useState({});
    const [search, setSearch] = useState("");
    const [valor, setValor] = useState({});
    const apiKey = "RGAPI-18b25b1b-0e0c-4c12-be5b-35b5c9a1b98b"
    function buscador() {

        // direccion usando la apikey que tengo que cambiar constantemente, y el valor del search (es decir el nombre de usuario)
        let api = `https://la2.api.riotgames.com/lol/summoner/v4/summoners/by-name/${search}?api_key=${apiKey}`

       
       
        axios.get(api).then((response) => {
            setValor(response.data); // guardo sus datos
            console.log(response.data)

        }).catch((error) => {
            setValor(error)
        })


       mastery()
        
    }
    function mastery(){
        // busco con el id del usuario que consigo del setValor, poniendo tambien la apikey
        let maestria = `https://la2.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${valor.id}/top?api_key=${apiKey}`


         // traigo todos los campeones del juego 
        let champs = `https://ddragon.leagueoflegends.com/cdn/12.18.1/data/en_US/champion.json`
       
        axios.get(maestria).then((response) => {

            //seteo el id del campeon mas usado, que traigo con la variable champs
            setChamp(response.data[0].championId)
            console.log(response.data[0].championId)
        }).catch((err) => { console.log(err) })



        axios.get(champs).then((response) => {
            // convierto al objeto que traigo en un array solo con los datos que me interesan (por eso el .data.data)
            let personajes = Object.values(response.data.data)
            console.log(personajes)

            //para cada uno de los personajes busco si tiene la misma key o id que traigo del setChamp
            personajes.forEach((data) => {
                if(champ==data.key){ // si son iguales traeme el nombre
                    console.log(data.name)
                }
            
            })

        }).catch((err) => { console.log(err) })
    
     
        
    }

    return (
        <div className='container d-flex flex-column align-items-center'>
            <input type="text" placeholder='ingrese un invocador' onKeyPress={e => {
                // para que pueda buscar apretando enter
                if (e.key === "Enter") {
                    buscador(e)
                
                   
                }

                // capturo el nombre que escribe el usuario
            }} onChange={e => setSearch(e.target.value)}></input>
            <button onClick={e => buscador(e)}
            >Buscar</button>

            {valor.name === "AxiosError" ?
            // si el nombre es AxiosError significa que no existe el usuario 
                <div >
                    <p>no se encontro al invocador</p>
                </div>
                :

                <ListGroup className='d-flex  align-items-center' variant="flush">
                    <ListGroup.Item><img width={60} src={`http://ddragon.leagueoflegends.com/cdn/12.18.1/img/profileicon/${valor.profileIconId
                        }.png`} alt="" /></ListGroup.Item>
                    <ListGroup.Item>Usuario: {valor.name}</ListGroup.Item>
                    <ListGroup.Item>nivel: {valor.summonerLevel}</ListGroup.Item>
                   {/*  <ListGroup.Item> <img width={700} src={`http://ddragon.leagueoflegends.com/cdn/img/champion/splash/${champ[0]}_0.jpg`} alt= {``} />  </ListGroup.Item> */}
                </ListGroup>}


        </div>

    )
}

export default Invocador



// ignorar ignorar ignorar



/* import React from 'react'
import $ from 'jquery'

function Champs() {
    $.ajax({
        type: 'GET',
        url: `http://ddragon.leagueoflegends.com/cdn/12.14.1/data/en_US/champion.json`,
        // capaz conviene llamar a la funcion y definirla afuera de ajax, asi hago el otro ajax para las skins
        success: function (response) {
            //con esto lo convierto en array
            let personajes = Object.values(response.data)
        
            console.log(personajes)
            
        },
        fail: function (err) {
            console.log(err)
        }
    
    
    })

   
   
}
export default Champs
 
// No se como hacer para que funcione :(



 */