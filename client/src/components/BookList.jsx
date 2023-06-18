import React, { useEffect, useState } from 'react';
import { Card, Row, Col, Container } from 'react-bootstrap';
import SearchBooks from './SearchBooks';

function BookList (){

    const cardBodyStyle = {
        backgroundColor: '#FAF9F6',
        color: '#333', 
    };

    const [books, setBooks] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
        fetch('http://localhost:8000/books')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => setBooks(data))
    .catch(error => {
        console.error('There has been a problem with your fetch operation:', error);
    });

    }, []);

    const [advancedSearch, setAdvancedSearch] = useState({});

    const handleAdvancedSearch = (genre, minPrice, maxPrice, year) => {
        setAdvancedSearch({ genre, minPrice, maxPrice, year });
    };


    const filteredBooks = books.filter(book => {
        // Basic search
        let matchesSearch = book.title.toLowerCase().includes(search.toLowerCase()) ||
            book.author.toLowerCase().includes(search.toLowerCase()) ||
            book.year.toString().includes(search);

        // Advanced search
        let matchesAdvancedSearch = true;
        if (advancedSearch.genre !== null) {
            matchesAdvancedSearch = matchesAdvancedSearch && book.genre === advancedSearch.genre;
        }
        if (advancedSearch.minPrice !== null) {
            matchesAdvancedSearch = matchesAdvancedSearch && book.price >= advancedSearch.minPrice;
        }
        if (advancedSearch.maxPrice !== null) {
            matchesAdvancedSearch = matchesAdvancedSearch && book.price <= advancedSearch.maxPrice;
        }
        if (advancedSearch.year !== null) {
            matchesAdvancedSearch = matchesAdvancedSearch && book.year === Number(advancedSearch.year);
        }

        return matchesSearch || matchesAdvancedSearch;
    });

    console.log('filteredBooks:', filteredBooks);

    const defaultImage = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv2pfq-rMbxhMmitHKvkmZ8VmKRFzlvS7zxQ&usqp=CAU"
    return (
        <Container className='my-3'>
        <SearchBooks search={search} setSearch={setSearch}  onAdvancedSearch={handleAdvancedSearch}  />
        <Row >
            {(search ? filteredBooks : books).map((book, index) => (
                <Col xs={12} sm={6} md={4} lg={3} key={index}>
                    <Card className="mb-4" style={cardBodyStyle}>
                        <Card.Img variant="top" src={book.coverImage || defaultImage} style={{height: '250px', objectFit: 'fill'}}/>
                        <Card.Body >
                            <Card.Title>{book.title}</Card.Title>
                            <Card.Text>
                                <strong>Author:</strong> {book.author} <br />
                                <strong>Year:</strong> {book.year} <br />
                                <strong>Pages:</strong> {book.pages} <br />
                                <strong>Genre:</strong> {book.genre} <br />
                                <strong>Price:</strong> {book.price} <br />
                                <strong>Rating:</strong> {book.rating} <br />
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
        </Container>
    );
};

export default BookList;
