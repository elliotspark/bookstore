import React, { useState } from 'react';
import { Form, FormControl, Button, Collapse } from 'react-bootstrap';

const SearchBooks = ({ search, setSearch, onAdvancedSearch }) => {

    const [genreSearch, setGenreSearch] = useState('');
    const [minPriceSearch, setMinPriceSearch] = useState('');
    const [maxPriceSearch, setMaxPriceSearch] = useState('');
    const [yearSearch, setYearSearch] = useState('');

    const [open, setOpen] = useState(false);

    const handleAdvancedSearch = () => {
        onAdvancedSearch(
            genreSearch || null,
            minPriceSearch || null,
            maxPriceSearch || null,
            yearSearch || null
        );
        setOpen(false);
    };

    const genres = ['Fantasy', 'Science Fiction', 'Mystery', 'Thriller', 'Romance', 'Horror', 'Dystopian', 'Historical Fiction', 'Young Adult Fiction', 'Childrens Fiction', 'Nonfiction', 'Biography', 'Autobiography', 'Cookbook', 'Art', 'Self-Help', 'True Crime', 'Humor', 'Poetry', 'Short Stories', 'Graphic Novel', 'Memoir', 'Essay', 'Drama', 'History', 'Travel', 'Guide', 'Spirituality', 'Religion', 'Science', 'Math', 'Computer Science', 'Business', 'Economics', 'Politics', 'Sports', 'Fitness', 'Crafts', 'Hobbies', 'Health', 'Fitness', 'Psychology', 'Philosophy', 'Parenting', 'Family', 'Music', 'Film', 'Television', 'Art', 'Architecture', 'Photography', 'Design', 'Comics', 'Manga', 'Childrens', 'Young Adult', 'Adult', 'Philosophical Fiction', 'Other'];
    
    return (
        <>
        <Form inline className="mb-3 ">
            <FormControl 
                type="text" 
                placeholder="Write here to search books by title name or author name" 
                className="mr-sm-2" 
                value={search}
                onChange={e => setSearch(e.target.value)}
            />
            <Button 
                onClick={() => setOpen(!open)}
                variant="outline-info"
                className="my-2"
            >
                Advanced Search
            </Button>
        </Form>
        <Collapse in={open}>
            <div id="advanced-search">
            <Form inline className="mb-3">
                <Form.Select 
                        aria-label="Genre" 
                        className="mr-sm-2" 
                        value={genreSearch}
                        onChange={e => setGenreSearch(e.target.value)}
                    >
                        <option value="">Select Genre</option>
                        {genres.map((genre, index) => (
                            <option key={index} value={genre}>{genre}</option>
                        ))}
                </Form.Select>
                <FormControl 
                    type="number" 
                    placeholder="Min Price" 
                    className="mr-sm-2 my-1" 
                    value={minPriceSearch}
                    onChange={e => setMinPriceSearch(e.target.value)}
                />
                <FormControl 
                    type="number" 
                    placeholder="Max Price" 
                    className="mr-sm-2 my-1" 
                    value={maxPriceSearch}
                    onChange={e => setMaxPriceSearch(e.target.value)}
                />
                <FormControl 
                    type="number" 
                    placeholder="Year" 
                    className="mr-sm-2 my-1" 
                    value={yearSearch}
                    onChange={e => setYearSearch(e.target.value)}
                />
                <Button className='my-2' variant="outline-info" onClick={handleAdvancedSearch}>Submit</Button>
            </Form>

            </div>
        </Collapse>
    </>
    );
};

export default SearchBooks;
