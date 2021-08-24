import './underscreen.css';
import axios from 'axios';

import React, {Component} from 'react';



class UnderScreen extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            students: []
        }
    }
    componentDidMount(){
        axios.get('https://api.opendota.com/api/heroes')
            .then(resp =>{
                const limit = 10;

                this.setState({
                    // el cero representa desde donde quieres cortar el array.
                    // y la constante limit (int) sera el maximo dato a cortar
                    students: resp.data.slice(0, limit)
                })
            })
    }
  
    render(){
        const { students } = this.state;

    
    return (
       <section id="screentwo">
           <div id="underscreen">
           
               <div id="allsection">
          
                            <div className="agenda" id="style-2">
                                <h1>Conexiones de agenda para hoy</h1>
                                <table>
                                   {
                                        students.map(item =>(
                                            <tr key={item.id}><h3>{item.name}</h3>
                                                <td><h3>llamar</h3>Descuento temporada</td>
                                                <td><i className="fas fa-phone-alt"> </i>
                                                <i className="fas fa-comment-dots"></i></td>
                                            </tr>
                                            
                                        ))
                                
                                    }
                               </table>

                          </div>
                          
                        <div id="second">
                            <div id="fcontact">
                                <div id="boxcolor2" >
                                    <div id="square1">
                                        <p>30</p>
                                    </div>
                                    </div>   
                                    <div id="contacticon">
                                        <h4>Leads de primer contacto</h4>
                                        <div><i className="fas fa-phone-alt"> 15</i></div>
                                        <div><i className="fas fa-comment-dots"> 15</i></div>
                                    </div>
                                
                            </div>

                            <div id="fcontact">
                                <div id="boxcolor" >
                                    <div id="square1">
                                        <p>80</p>
                                    </div>
                                    </div>   
                                    <div id="contacticon">
                                        <h4>Leads de primer contacto</h4>
                                        <div><i className="fas fa-phone-alt"> 30</i></div>
                                        <div><i className="fas fa-comment-dots"> 50</i></div>
                                    </div>
                                
                            </div>

                        </div>
                        <div id="sec2">
                                        <div id="fcontact2">
                                                <div id="boxcolor3" >
                                                    <div id="square1">
                                                        <p>50</p>
                                                    </div>
                                                </div>   
                                                    <div id="contacticon">
                                                        <h4>Leads de primer contacto</h4>
                                                        <div><i className="fas fa-phone-alt"> 15</i></div>
                                                        <div><i className="fas fa-comment-dots"> 15</i></div>
                                                    </div>
                                                
                                        </div>
                            
                                        <div id="fcontact2">
                                                    <div id="boxcolor2" >
                                                        <div id="square1">
                                                            <p>40</p>
                                                        </div>
                                                    </div>   
                                                <div id="contacticon">
                                                    <h4>Leads de primer contacto</h4>
                                                    <div><i className="fas fa-phone-alt"> 20</i></div>
                                                    <div><i className="fas fa-comment-dots"> 30</i></div>
                                                </div>
                                            </div>
                        </div>
                 </div>
          </div>
       </section>
      );
    }
}
    
    export default UnderScreen;
  
