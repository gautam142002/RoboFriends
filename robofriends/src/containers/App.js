import React, {useState, useEffect} from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

function App () {

    const [Robots, setRobots] = useState([])
    const [searchfield, setSearchfield] = useState('')
    
    const onUserInput = (event) => {
        setSearchfield(event.target.value)
    }

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => setRobots(users));
    },[]);


    const fileteredRobot = Robots.filter(Robots => {
        return Robots.name.toLowerCase().includes(searchfield.toLowerCase())
    })

    return !Robots.length ?
        <h1>Loading</h1> :
        (
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox userInput = {onUserInput}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList Robots = {fileteredRobot}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            
        );
}

export default App;