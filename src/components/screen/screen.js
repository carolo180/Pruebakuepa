import './screen.css';
import DatePicker from "react-horizontal-datepicker";
import React, {useState, useEffect} from 'react';



const Screen = ()=> {
     const selectedDay = (val) =>{
        console.log(val)
    };
    

    
    return (
        <div className="screen">
          <section id="mainscreen">
            
             <div id="searchdate">
                    <input type="search" 
                    id="sites1" 
                    name="term"
                    placeholder="    Search.."
                    />
                    <button id="buscar"><i class="fas fa-filter"></i></button>
                   
             
                    <div id="datepick">    
                        <DatePicker getSelectedDay={selectedDay}
                                  endDate={5}
                                  selectDate={new Date("2020-04-30")}
                                  labelFormat={"MMMM"}
                                  color={"#ff671b"}              
                              />
                    </div>
              </div>
              
              <h1 id="saludo">Hola, Carolina</h1>

            <section id="cifras">
            
              <div id="barra">
                      <div className="progress blue"> <span className="progress-left"> <span className="progress-bar"></span> </span> <span className="progress-right"> <span className="progress-bar"></span> </span>
                        <div className="progress-value">80% </div>
                      </div>
                  <div id="stadistic">
                         <div id="leads">
                            <div id="leads1">
                              <h4>Leads<br></br> obtenidos</h4>
                              <h1>50/100</h1>
                            </div>
                            <div id="getleads">
                              <h4>Matriculas<br></br> finalizadas</h4>
                              <h1>10/20</h1>
                            </div>
                         </div>
                          <div id="calls">
                            <h4>Cola de <br></br>llamados</h4>
                            <h1>50/100</h1>
                          </div>
                  </div>
              </div>

                    <div id="golds">
                              <h1>Meta grupal</h1>
                              <div>
                              <div id="getleads"><p>Leads obtenidos</p><p id="getnumber">50/100</p></div> 
                                    <div className="progresss">
                                      <div className="color"></div>
                                    </div>
                              </div>
                              <div>
                              <div id="getleads"><p>Matriculas realizadas</p><p id="getnumber">60/100</p></div>  
                                      <div className="progresss">
                                      <div className="color"></div>
                                     </div>
                            </div>
                    </div>
           </section>

            
          </section>
            

        </div>
      );
    }
    
    export default Screen;
  
