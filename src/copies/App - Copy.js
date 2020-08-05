import React, { Component } from 'react';

import "./App.scss";
import step from './step.png';
//import group from './group.svg';
//import group-3 from './group-3.svg';

class App extends Component {
  
  render() {
    return (
	   <div>
	                <img src={step}   alt="Smiley face" />  
					
					
									
     <ul>
                      <li>
                          <h4>1º Pantalla de información de la contraseña</h4>
                          
                          <p>En esta pantalla el usuario que entra a la aplicación debe entender que está contratando. Deberias darle la bienvenida al producto "Cuenta Corriente OpenClose" y explicarle que vas a demandarle sus datos en los siguientes pasos. Es una pantalla con una explicación, nombre del producto y botones de wizard de avanzar.</p>
                          <h5>Esta pantalla será el paso numero uno del wizard y tiene que tener un check (que tiene que pulsar) que habilite el boton de avanzar, en el que se le pregunta al usuario si tiene mayoría de edad y que acepta que tratemos sus datos según la politica de protección de datos.</h5>
                      </li>
                      <li>
                          <h4>2º Pantalla de creación de la contraseña</h4>
                          
                          <p>En esta pantalla al usuario se le van a pedir los siguientes datos en un formulario.</p>
                          <ul>
                              <li>Contraseña(Min 8 - Max 24 caracteres)(Al menos 1 número y una mayúscula)</li>
                              <li>Pista (Maximo 255 caracteres)</li>
                          </ul>
                          <h5>Aquí para poder avanzar de paso, es necesario que todos los campos del formulario esten correctamente rellenos. Se debe controlar errores de tipo o forma en cada uno de ellos, mostrando un error asociado a cada input.  Se debe validar correctamente que sea una contraseña correcta y que coincidan ambas.</h5>
                      </li>
                      <li>
                          <h4>3º Pantalla de feedback</h4>
                          <p>Esta pantalla unicamente mostrará un icono de Ok/Ko informando al usuario del resultado, además de un boton que reinicie el proceso.</p>
                          <p>Se provee de un mock en el services/api desde el cual se puede imitar el comportamiento de una llamada asíncrona. (Checkear para ver caso de error)</p>
                          <h5>Debe ser una pantalla que cumpla cualquier de los requisitos, tanto un KO como un OK, de manera dinamica, de manera que, sea parametrizable en base al resultado de la creación.</h5>
                      </li>
                  </ul>
			</div>	  
    );
  }
}

export default App



