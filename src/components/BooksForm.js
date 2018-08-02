import React, { Component } from 'react';
import { Button, View, ListView, Text } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection, Input } from './common';
import { addBook } from './../actions/index';
class BooksForm extends Component {

    constructor(props) {
        super(props);
        //const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = { 
            bookTitle: 'Useless Placeholder',
            //dataSource: ds.cloneWithRows(['row 1', 'row 2']),
        };
    }


    // componentWillMount() {
    //     if(this.props.books.length > 0 && this.props.books[0].id > 0)
    //    this.createDataSource(this.props);
    // }

    onAddPressed() {
        if(this.state.bookTitle != null && this.state.bookTitle != '') {
            this.props.addBook({id: this.props.books.length, titte: this.state.bookTitle});
            this.setState({bookTitle: ''})            
        }
    }

    onInputTextChanged(text) {
        this.setState({bookTitle: text});
    }

    // createDataSource({ books }) {
    //     const ds = new ListView.DataSource({
    //       rowHasChanged: (r1, r2) => r1 !== r2
    //     });
    
    //     this.dataSource = ds.cloneWithRows(books);
    //   }
    
    //   renderRow(book) {
    //     //return <ListItem book={book} />;
    //     return <Text>{book.title}</Text>;
    //   }

      renderBooks() {
        console.log("All Books: " + JSON.stringify(this.props.books));
        return this.props.books.map(book => <Text key={book.id}> {book.title}</Text>)
      }

    render() {
        return (
            <View>

                <Card>
                    <CardSection>
                        <Input
                            label="Book Title"
                            placeholder="Enter Book Title"
                            onChangeText= {this.onInputTextChanged.bind(this)}
                            value = {this.state.bookTitle}
                        />
                    </CardSection>

                    <CardSection>
                            <Button
                                title = "Add"
                                onPress = {this.onAddPressed.bind(this)}
                            />
                    </CardSection>
                </Card>
                <Text> Books Added </Text>
                {this.renderBooks()}
            
            </View>
        );
    }
}

const mapStateToProps = (state) => {
   // console.log("Books Added: " + JSON.stringify(state.books));
    return { books: state.books};
}

export default connect(mapStateToProps, { addBook })(BooksForm);
