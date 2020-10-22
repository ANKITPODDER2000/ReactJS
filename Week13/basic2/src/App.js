import React, { Component } from 'react';
import Food from "./Food";
import Meal from "./Meal";
import Nav from "./Nav";
import FoodSearch from "./FoodSearch";
import MealSearch from "./MealSearch";
import { Route , Switch } from "react-router-dom";
import './App.css';

class App extends Component{
    render() {
        return (
            <div class="App">
                <Nav />
                <Switch>
                    <Route exact path="/" render={(details) =>
                        <div>
                            <FoodSearch {...details}/>
                            <MealSearch {...details}/>
                        </div>}
                    />
                    <Route exact path="/food/apple" render={() => <Food food={"apple"} />} />
                    <Route exact path="/food/chicken" render={() => <Food food={"chicken"} />} />
                    <Route exact path="/food/:foodname" render={(details) => <Food food={details.match.params.foodname} {...details}/>}></Route>
                    <Route
                        exact path="/food/:foodname/drink/:drinkname"
                        render={(details) =>
                        <Meal
                            food={details.match.params.foodname}
                            drink={details.match.params.drinkname}
                            {...details}
                        />}>
                    </Route>
                    <Route render={() => <h1>404 Page not found!!!</h1>}></Route>
                </Switch>
            </div>
        )
    }
}

export default App;
