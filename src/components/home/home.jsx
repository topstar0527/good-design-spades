import React from 'react';
import Header from './header';
import Body from './body';
import Nav from './nav';

class Home extends React.Component {
    state = {}
    render() {
        return (
            <div>
                <Header/>
                <Body/>
                <Nav/>
            </div>
        );
    }
}

export default Home;