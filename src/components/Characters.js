import React, { Component } from 'react'
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
            <div>
            <h1>Api d'Harry Pother</h1>
            <ul>
            {this.state.characters.map(character => <li key={character.id}>{character.name}</li>)}
            </ul>
            
            
                
            </div>
        )
    }
}
 
export default Characters
