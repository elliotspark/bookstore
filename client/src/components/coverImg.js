//const fetch = require('node-fetch');

// Array of books (replace with your own data)
const books = [
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925,
      "pages": 180,
      "genre": "Classic",
      "price": 12.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book1.jpg"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960,
      "pages": 281,
      "genre": "Fiction",
      "price": 9.99,
      "rating": 4.8,
      "coverImage": "https://example.com/book2.jpg"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "year": 1949,
      "pages": 328,
      "genre": "Dystopian",
      "price": 11.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book3.jpg"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "year": 1813,
      "pages": 279,
      "genre": "Romance",
      "price": 10.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book4.jpg"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951,
      "pages": 224,
      "genre": "Coming-of-age",
      "price": 8.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book5.jpg"
    },
    {
      "title": "Moby Dick",
      "author": "Herman Melville",
      "year": 1851,
      "pages": 585,
      "genre": "Adventure",
      "price": 14.99,
      "rating": 4.3,
      "coverImage": "https://example.com/book6.jpg"
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "year": 1954,
      "pages": 1178,
      "genre": "Fantasy",
      "price": 16.99,
      "rating": 4.9,
      "coverImage": "https://example.com/book7.jpg"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937,
      "pages": 310,
      "genre": "Fantasy",
      "price": 9.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book8.jpg"
    },
    {
      "title": "To the Lighthouse",
      "author": "Virginia Woolf",
      "year": 1927,
      "pages": 209,
      "genre": "Modernist",
      "price": 11.99,
      "rating": 4.2,
      "coverImage": "https://example.com/book9.jpg"
    },
    {
      "title": "Brave New World",
      "author": "Aldous Huxley",
      "year": 1932,
      "pages": 288,
      "genre": "Dystopian",
      "price": 10.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book10.jpg"
    },
    {
      "title": "The Odyssey",
      "author": "Homer",
      "year": -700,
      "pages": 324,
      "genre": "Epic",
      "price": 9.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book11.jpg"
    },
    {
      "title": "Crime and Punishment",
      "author": "Fyodor Dostoevsky",
      "year": 1866,
      "pages": 671,
      "genre": "Psychological Fiction",
      "price": 13.99,
      "rating": 4.8,
      "coverImage": "https://example.com/book12.jpg"
    },
    {
      "title": "The Alchemist",
      "author": "Paulo Coelho",
      "year": 1988,
      "pages": 197,
      "genre": "Fantasy",
      "price": 8.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book13.jpg"
    },
    {
      "title": "Anna Karenina",
      "author": "Leo Tolstoy",
      "year": 1877,
      "pages": 864,
      "genre": "Classics",
      "price": 12.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book14.jpg"
    },
    {
      "title": "Frankenstein",
      "author": "Mary Shelley",
      "year": 1818,
      "pages": 280,
      "genre": "Gothic",
      "price": 9.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book15.jpg"
    },
    {
      "title": "The Picture of Dorian Gray",
      "author": "Oscar Wilde",
      "year": 1890,
      "pages": 254,
      "genre": "Gothic",
      "price": 10.99,
      "rating": 4.3,
      "coverImage": "https://example.com/book16.jpg"
    },
    {
      "title": "The Adventures of Sherlock Holmes",
      "author": "Arthur Conan Doyle",
      "year": 1892,
      "pages": 307,
      "genre": "Mystery",
      "price": 11.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book17.jpg"
    },
    {
      "title": "The Brothers Karamazov",
      "author": "Fyodor Dostoevsky",
      "year": 1880,
      "pages": 796,
      "genre": "Philosophical Fiction",
      "price": 14.99,
      "rating": 4.8,
      "coverImage": "https://example.com/book18.jpg"
    },
    {
      "title": "The Book Thief",
      "author": "Markus Zusak",
      "year": 2005,
      "pages": 552,
      "genre": "Historical Fiction",
      "price": 12.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book19.jpg"
    },
    {
      "title": "One Hundred Years of Solitude",
      "author": "Gabriel García Márquez",
      "year": 1967,
      "pages": 417,
      "genre": "Magical Realism",
      "price": 11.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book20.jpg"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937,
      "pages": 310,
      "genre": "Fantasy",
      "price": 9.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book21.jpg"
    },
    {
      "title": "The Kite Runner",
      "author": "Khaled Hosseini",
      "year": 2003,
      "pages": 371,
      "genre": "Historical Fiction",
      "price": 10.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book22.jpg"
    },
    {
      "title": "The Little Prince",
      "author": "Antoine de Saint-Exupéry",
      "year": 1943,
      "pages": 96,
      "genre": "Children's Literature",
      "price": 8.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book23.jpg"
    },
    {
      "title": "Gone with the Wind",
      "author": "Margaret Mitchell",
      "year": 1936,
      "pages": 1037,
      "genre": "Historical Fiction",
      "price": 13.99,
      "rating": 4.8,
      "coverImage": "https://example.com/book24.jpg"
    },
    {
      "title": "The Secret Life of Bees",
      "author": "Sue Monk Kidd",
      "year": 2001,
      "pages": 336,
      "genre": "Fiction",
      "price": 9.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book25.jpg"
    },
    {
      "title": "A Game of Thrones",
      "author": "George R.R. Martin",
      "year": 1996,
      "pages": 694,
      "genre": "Fantasy",
      "price": 11.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book26.jpg"
    },
    {
      "title": "The Girl on the Train",
      "author": "Paula Hawkins",
      "year": 2015,
      "pages": 325,
      "genre": "Thriller",
      "price": 10.99,
      "rating": 4.3,
      "coverImage": "https://example.com/book27.jpg"
    },
    {
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "year": 2003,
      "pages": 689,
      "genre": "Mystery",
      "price": 12.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book28.jpg"
    },
    {
      "title": "The Hunger Games",
      "author": "Suzanne Collins",
      "year": 2008,
      "pages": 374,
      "genre": "Young Adult",
      "price": 9.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book29.jpg"
    },
    {
      "title": "The Help",
      "author": "Kathryn Stockett",
      "year": 2009,
      "pages": 451,
      "genre": "Historical Fiction",
      "price": 11.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book30.jpg"
    },
    {
      "title": "The Fault in Our Stars",
      "author": "John Green",
      "year": 2012,
      "pages": 313,
      "genre": "Young Adult",
      "price": 10.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book31.jpg"
    },
    {
      "title": "The Chronicles of Narnia",
      "author": "C.S. Lewis",
      "year": 1950,
      "pages": 767,
      "genre": "Fantasy",
      "price": 13.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book32.jpg"
    },
    {
      "title": "The Maze Runner",
      "author": "James Dashner",
      "year": 2009,
      "pages": 375,
      "genre": "Science Fiction",
      "price": 10.99,
      "rating": 4.3,
      "coverImage": "https://example.com/book33.jpg"
    },
    {
      "title": "The Stand",
      "author": "Stephen King",
      "year": 1978,
      "pages": 823,
      "genre": "Horror",
      "price": 12.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book34.jpg"
    },
    {
      "title": "The Girl with the Dragon Tattoo",
      "author": "Stieg Larsson",
      "year": 2005,
      "pages": 465,
      "genre": "Mystery",
      "price": 11.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book35.jpg"
    },
    {
      "title": "Harry Potter and the Sorcerer's Stone",
      "author": "J.K. Rowling",
      "year": 1997,
      "pages": 309,
      "genre": "Fantasy",
      "price": 9.99,
      "rating": 4.8,
      "coverImage": "https://example.com/book36.jpg"
    },
    {
      "title": "The Road",
      "author": "Cormac McCarthy",
      "year": 2006,
      "pages": 287,
      "genre": "Post-Apocalyptic",
      "price": 10.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book37.jpg"
    },
    {
      "title": "The Shining",
      "author": "Stephen King",
      "year": 1977,
      "pages": 447,
      "genre": "Horror",
      "price": 11.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book38.jpg"
    },
    {
      "title": "The Girl in the Ice",
      "author": "Robert Bryndza",
      "year": 2016,
      "pages": 396,
      "genre": "Thriller",
      "price": 10.99,
      "rating": 4.3,
      "coverImage": "https://example.com/book39.jpg"
    },
    {
      "title": "The Help",
      "author": "Kathryn Stockett",
      "year": 2009,
      "pages": 451,
      "genre": "Historical Fiction",
      "price": 11.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book40.jpg"
    },
    {
      "title": "The Catcher in the Rye",
      "author": "J.D. Salinger",
      "year": 1951,
      "pages": 224,
      "genre": "Coming-of-age",
      "price": 8.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book41.jpg"
    },
    {
      "title": "The Da Vinci Code",
      "author": "Dan Brown",
      "year": 2003,
      "pages": 689,
      "genre": "Mystery",
      "price": 12.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book42.jpg"
    },
    {
      "title": "The Lord of the Rings",
      "author": "J.R.R. Tolkien",
      "year": 1954,
      "pages": 1178,
      "genre": "Fantasy",
      "price": 16.99,
      "rating": 4.9,
      "coverImage": "https://example.com/book43.jpg"
    },
    {
      "title": "The Girl with the Dragon Tattoo",
      "author": "Stieg Larsson",
      "year": 2005,
      "pages": 465,
      "genre": "Mystery",
      "price": 11.99,
      "rating": 4.4,
      "coverImage": "https://example.com/book44.jpg"
    },
    {
      "title": "The Hobbit",
      "author": "J.R.R. Tolkien",
      "year": 1937,
      "pages": 310,
      "genre": "Fantasy",
      "price": 9.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book45.jpg"
    },
    {
      "title": "The Great Gatsby",
      "author": "F. Scott Fitzgerald",
      "year": 1925,
      "pages": 180,
      "genre": "Classic",
      "price": 12.99,
      "rating": 4.5,
      "coverImage": "https://example.com/book46.jpg"
    },
    {
      "title": "To Kill a Mockingbird",
      "author": "Harper Lee",
      "year": 1960,
      "pages": 281,
      "genre": "Fiction",
      "price": 9.99,
      "rating": 4.8,
      "coverImage": "https://example.com/book47.jpg"
    },
    {
      "title": "1984",
      "author": "George Orwell",
      "year": 1949,
      "pages": 328,
      "genre": "Dystopian",
      "price": 11.99,
      "rating": 4.7,
      "coverImage": "https://example.com/book48.jpg"
    },
    {
      "title": "Pride and Prejudice",
      "author": "Jane Austen",
      "year": 1813,
      "pages": 279,
      "genre": "Romance",
      "price": 10.99,
      "rating": 4.6,
      "coverImage": "https://example.com/book49.jpg"
    },
    {
      "title": "Moby Dick",
      "author": "Herman Melville",
      "year": 1851,
      "pages": 585,
      "genre": "Adventure",
      "price": 14.99,
      "rating": 4.3,
      "coverImage": "https://example.com/book50.jpg"
    }
  ]
  ;

// Function to search for cover image URL based on book title

async function searchCoverImage(title) {
  const apiKey = 'AIzaSyDCqF4oEHTEQHJ5URHQJ6q9b4r2eg32m24';
  const searchQuery = encodeURIComponent(`${title} book cover`);
  const apiUrl = `https://www.googleapis.com/customsearch/v1?key=${apiKey}&cx=d0bee1c741e0445d2&q=${searchQuery}&searchType=image&num=1`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    const imageUrl = data.items[0].link;
    return imageUrl;
  } catch (error) {
    console.error('Error searching for cover image:', error);
    return '';
  }
}

// Function to update the coverImage URL for each book
async function updateCoverImages() {
  for (let i = 0; i < books.length; i++) {
    const book = books[i];
    const imageUrl = await searchCoverImage(book.title);
    book.coverImage = imageUrl;
  }

  console.log('Cover images updated:', books);
}

// Call the function to update cover images
updateCoverImages();
