import React from 'react';
import LanguageContext from "../contexts/LanguageContext";


class Field extends React.Component {
    // passing language context, static adds property directly to Button class same as: Button.contextType = LanguageContext
    static contextType = LanguageContext;

    render() {
        // without using store
        // const text = this.context === 'english' ? 'Name' : 'Naam';
        const text = this.context.language === 'english' ? 'Name' : 'Naam';
        return (
            <div className="ui field">
                <label>{text}</label>
                <input type="text" />
            </div>
        )
    }
} 

export default Field;
