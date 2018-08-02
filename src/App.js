import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { Header } from './components/common';
import BooksForm from './components/BooksForm';
import reducers from './reducers'

class App extends Component {
    render() {

        const store = createStore(reducers);
        return(
            <Provider store={store}>
                <ScrollView>
                    <Header/>
                    <BooksForm />
                </ScrollView>
            </Provider>
        );
    }
}

export default App;