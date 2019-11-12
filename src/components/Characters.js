import React, { Component, Fragment } from 'react'
import axios from 'axios'

 class Characters extends Component {
     state = {
         characters: []
        
     }
     
       
    
     componentDidMount(){
        axios.get(`https://harrypotterapi20.herokuapp.com/characters`)
        .then(res=> {
            console.log(res)
            this.setState({characters: res.data })
        })
         
            
     }
    render() {
        return (
            <Fragment>
            <h1>Api d'Harry Pother</h1>
                {this.state.characters.map(character => (<div key={character.id}>
                    <img src= {character.image} alt={character.name} />
                    <p>{character.gender}</p>
                    <p>{character.eyeColour}</p>

                    <p >{character.name}</p>
                </div> )
                 )}
            
            
                
            </Fragment>
        )
    }
}
 
export default Characters
