import React, { Component } from 'react';
import Menu from './Menu';
import { Route, BrowserRouter } from 'react-router-dom';
import Comentarios from './Comentarios';
import ComentariosAgregar from './Comentarios/Agregar';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
            <div>
               <Menu />
               <br />
               <div className="container">
                  <Route exact path='/' component={Comentarios} />
                  <Route exact path='/comentarios' component={Comentarios} />
                  <Route exact path='/comentarios/agregar' component={ComentariosAgregar} />
               </div>
            </div>
         </BrowserRouter>
      </div>
    );
  }
}

export default App;
