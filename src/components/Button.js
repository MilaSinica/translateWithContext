import React from 'react';
import LanguageContext from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class Button extends React.Component  {
    // passing language context, static adds property directly to Button class same as: Button.contextType = LanguageContext
    // static contextType = LanguageContext;

    // instead of context.type we can use context Consumer \/

    render() {
        // For this.context use: 
        // const text = this.context === 'english' ? 'Submit' : 'Voorleggen'; --> {text}
        return (
            <ColourContext.Consumer>
                {/* As long as Consumer receives only 1 child (function), we put JSX inside function return statement */}
                {(color) => {
                    return (
                        <button className={`ui button ${color}`}>
                        {/*Instead of using this.context we can use Context.Consumer 
                            it receives only 1 child - function, called with context value(as 1st argument) 
                            Context.Consumer should be used when you have multiple context objects 
                        */}
                        {/* without using store */}
                        {/* 
                            <LanguageContext.Consumer>
                                {(val) => val === 'english' ? 'Submit' : 'Voorleggen'}
                            </LanguageContext.Consumer> 
                        */}
                            <LanguageContext.Consumer>
                                {({language}) => language === 'english' ? 'Submit' : 'Voorleggen'}
                            </LanguageContext.Consumer> 
                        </button>
                    )
                }}
            </ColourContext.Consumer>
        )
    }
}

export default Button;
