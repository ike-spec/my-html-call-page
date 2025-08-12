import React from 'react'
import ReactDOM from 'react-dom'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom'

import './style.css'
import Rectangle1 from './views/rectangle1'
import Ellipse1 from './views/ellipse1'
import MannyTech from './views/manny-tech'
import ITPersonel from './views/it-personel'
import Reliableandtechsavvyprofessionalskilledinmaintaini from './views/reliableandtechsavvyprofessionalskilledinmaintaini'
import Roundedrectangle from './views/roundedrectangle'
import Rectangle3 from './views/rectangle3'
import Rectangle4 from './views/rectangle4'
import Rectangle5 from './views/rectangle5'
import Rectangle6 from './views/rectangle6'
import Rectangle7 from './views/rectangle7'
import Text from './views/text'
import Text1 from './views/text1'
import Text2 from './views/text2'
import Text3 from './views/text3'
import Text4 from './views/text4'
import Text5 from './views/text5'
import Rectangle8 from './views/rectangle8'
import NotFound from './views/not-found'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route component={Rectangle1} exact path="/" />
        <Route component={Ellipse1} exact path="/ellipse1" />
        <Route component={MannyTech} exact path="/manny-tech" />
        <Route component={ITPersonel} exact path="/it-personel" />
        <Route
          component={Reliableandtechsavvyprofessionalskilledinmaintaini}
          exact
          path="/reliableandtechsavvyprofessionalskilledinmaintaini"
        />
        <Route component={Roundedrectangle} exact path="/roundedrectangle" />
        <Route component={Rectangle3} exact path="/rectangle3" />
        <Route component={Rectangle4} exact path="/rectangle4" />
        <Route component={Rectangle5} exact path="/rectangle5" />
        <Route component={Rectangle6} exact path="/rectangle6" />
        <Route component={Rectangle7} exact path="/rectangle7" />
        <Route component={Text} exact path="/text" />
        <Route component={Text1} exact path="/text1" />
        <Route component={Text2} exact path="/text2" />
        <Route component={Text3} exact path="/text3" />
        <Route component={Text4} exact path="/text4" />
        <Route component={Text5} exact path="/text5" />
        <Route component={Rectangle8} exact path="/rectangle8" />
        <Route component={NotFound} path="**" />
        <Redirect to="**" />
      </Switch>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
