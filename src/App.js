import React from 'react'
import styled from 'styled-components'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import NavigationBar from './components/NavigationBar'
import { Home } from './pages/Home.js'
import { Info } from './pages/Info.js'
import { PastEvents } from './pages/PastEvents.js'
import { Services } from './pages/Services.js'
import { RequestCTF } from './pages/RequestCTF.js'
import { NotFound } from './pages/NotFound.js'
import { Team } from './pages/Team.js'
import './App.css'

function App() {
    return (
        <React.Fragment>
            <Styles>
                <div className="page-container">
                    <Router>
                        <NavigationBar />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route exact path="/info" component={Info} />
                            <Route exact path="/events" component={PastEvents} />
                            <Route exact path="/services" component={Services} />
                            <Route exact path="/team" component={Team} />
                            <Route exact path="/requestCTF" component={RequestCTF} />
                            <Route component={NotFound} />
                        </Switch>
                    </Router>
                </div>
                <footer>
                    &copy; JustHacking
                </footer>
            </Styles>

        </React.Fragment>
    );
}

const Styles = styled.div`
    .page-container{
        position: relative;
        min-height: 100vh;
    }
    footer{
        position: absolute;
        bottom: 0;
        width: 100%;
        text-align: right;
        padding: 15px;
        font-size: 13px;
    }   

`

export default App;
