import './menufinal.css';
import axios from 'axios';
import wapp from '../../utils/images/whatsapp.png';
import React, {Component} from 'react';


class MenuFinal extends Component{

  

  constructor(props){
    super(props);
    this.state = {
        students: []
    }
}
componentDidMount(){
    axios.get('https://api.opendota.com/api/proPlayers')
        .then(resp =>{
            const limit = 10;

            this.setState({
                 students: resp.data.slice(0, limit)
            })
        })
}


  render(){
    const { students } = this.state;
    
    return (
        <div className="menufinal">
            <div id="beginsquare">
            
            </div>
            <div id="centersquare">
                <div class="scrollbar" id="style-1">
                                       
                    {
                      students.map(item =>(
                        
                        <div id="cards">
                            <div id='cardtitle'>
                                <img src={wapp} alt="logowhatsapp" className="wapp" />
                                <h2> WHATSAPP </h2>
                            </div>
                                <div id="student" key={item.id}><p>{item.name}</p>         
                                </div>
                        </div>
                                            
                      ))
                                  
                    }
                </div>
            </div>
            <div id="finalsquare"></div>
             

        </div>
      );
    }
  }
    
    export default MenuFinal;