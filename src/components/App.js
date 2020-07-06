import React from 'react';
import UserCreate from './UserCreate';
import LanguageSelector from './LanguageSelector';
import { LanguageStore } from "../contexts/LanguageContext";
import ColourContext from "../contexts/ColourContext";

class App extends React.Component {
  // If we used context without store:
  // state = { language: 'english' }
  // onLanguageChange = lang => { this.setState({language: lang}); }

  render() {
    return (
      <div className="ui container">
        {/* way to pass value to context and update default value. Will be updated along with value update. 
          Should be wrapped around components using context. We can 2 providers and each of them will have
          his own value of language, independent of each other (only using same for deafult). */}
        {/* If we used context without store: */}
        {/*           
          <LanguageSelector onLanguageChange={this.onLanguageChange} />
          <LanguageContext.Provider value={this.state.language}>
            <ColourContext.Provider value="red">
              <UserCreate />
            </ColourContext.Provider>
          </LanguageContext.Provider> 
        */}
        <LanguageStore>
          <LanguageSelector />
          <ColourContext.Provider value="red">
            <UserCreate />
          </ColourContext.Provider>
        </LanguageStore>
      </div>
    )
  }
}

export default App;
