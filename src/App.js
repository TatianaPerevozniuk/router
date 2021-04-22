import {Route, Switch} from 'react-router-dom';
import {Navigation} from "./components/Navigation";
import {appRoutes} from "./routes/index";
import './assets/css/style.css';
import React from 'react';



function App() {
    return (
        <div className="">
            <header className='header'>
                <Navigation/>
            </header>
            <main className='content'>
                <Switch>

                    {appRoutes.map(route => (<Route key={route.path} {...route}/>))}

                    <Route path='*'>
                        <p>404: No Page Found</p>
                    </Route>

                </Switch>
            </main>
        </div>
    );
}

export default App;
