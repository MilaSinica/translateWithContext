import React from "react";

// In case we want to use context without moving it to separate component
//export default React.createContext("english");

//passing default language value to a context
const Context = React.createContext("english");

export class LanguageStore extends React.Component {
    state = {
        language: "english"
    }

    onLanguageChange = (language) => {
        this.setState({language})
    }

    render() {
        return (
            <Context.Provider value={{...this.state, onLanguageChange: this.onLanguageChange}}>
                {this.props.children}
            </Context.Provider>
        )
    }
}

//from file we can import {LanguageStore} or LanguageContext (as a default export)
export default Context;