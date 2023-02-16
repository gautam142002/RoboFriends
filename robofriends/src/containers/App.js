import React from "react";
import CardList from "../components/CardList";
import SearchBox from "../components/SearchBox";
import Scroll from "../components/Scroll";
import ErrorBoundry from "../components/ErrorBoundry";
import './App.css';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            Robots: [],
            searchfield: ''
        }
    }

    onUserInput = (event) => {
        this.setState({searchfield: event.target.value})
    }

    componentDidMount() {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(Response => Response.json())
        .then(users => this.setState({Robots : users}));
    }


    render() {
        const {Robots, searchfield} = this.state;
        const fileteredRobot = Robots.filter(Robots => {
            return Robots.name.toLowerCase().includes(searchfield.toLowerCase())
        })
        return(
            <div className="tc">
                <h1 className="f1">RoboFriends</h1>
                <SearchBox userInput = {this.onUserInput}/>
                <Scroll>
                    <ErrorBoundry>
                        <CardList Robots = {fileteredRobot}/>
                    </ErrorBoundry>
                </Scroll>
            </div>
            
        );
    }
}

export default App;