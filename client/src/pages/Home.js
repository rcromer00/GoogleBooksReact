import React from "react";
import Hero from "../components/Hero";
import Container from "../components/Container";
import Search from "../components/Search";
import Results from "../components/Results";
import API from "../utils/API";

class Home extends React.Component {
    state = {
        value: "",
        books: []
    };
    componentDidMount() {
        this.searchBook();
    }

    makeBook = bookData => {
        return {
            id: bookData.id,
            title: bookData.volumeInfo.title,
            authors: bookData.volumeInfo.authors,
            description: bookData.volumeInfo.description,
            image: bookData.volumeInfo.imageLinks.thumbnail,
            link: bookData.volumeInfo.previewLink
        }
    }

    searchBook = query => {
        API.getBook(query)
        .then(res => this.setState({ books: res.data.items.map(bookData => this.makeBook(bookData)) }))
        .catch(err => console.error(err));
    };
    
    handleInputChange = event => {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        });
    };

    handleFormSubmit = event => {
        event.preventDefault();
        this.searchBook(this.state.search);
    };

    render() {
        return (
            <div>
                <Search
                    search={this.state.search}
                    handleInputChange={this.handleInputChange}
                    handleFormSubmit={this.handleFormSubmit}
                />
                <div className="container">
                    <h2>Results</h2>
                    <Results books={this.state.books} />
                </div>
            </div>
        )
    }
}; 

export default Home;