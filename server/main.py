from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from model import Book
import json
from typing import Optional


app = FastAPI()

from database import (fetch_all_books, fetch_one_book, create_book, update_book, remove_book)

origins = ['http://localhost:3000']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
async def root():
    return {"message": "Hello World"}

@app.get("/books")
async def get_books():
    with open("books.json", "r") as read_file:
        data = json.load(read_file)
    return data

@app.get("/books/search")
async def search_books(
    title: Optional[str] = None,
    author: Optional[str] = None,
    genre: Optional[str] = None,
    min_price: Optional[float] = None,
    max_price: Optional[float] = None,
):
    # Build a query object based on the provided parameters
    query = {}
    if title:
        query["title"] = {"$regex": title, "$options": "i"}
    if author:
        query["author"] = {"$regex": author, "$options": "i"}
    if genre:
        query["genre"] = genre
    if min_price is not None or max_price is not None:
        query["price"] = {}
        if min_price is not None:
            query["price"]["$gte"] = min_price
        if max_price is not None:
            query["price"]["$lte"] = max_price

    # Execute the query in MongoDB and return the results
    books = await db["books"].find(query).to_list(length=100)
    return books

@app.get("/books/{title}", response_model=Book)
async def get_book(title):
    response = await fetch_one_book(title)
    if response:
        print("Successfully found book")
        return response
    raise HTTPException(404, f"There is no book with the title {title} in the database")
     

@app.post("/add-book", response_model=Book)
async def add_book(book: Book):
    response = await create_book(book.dict())
    if response:
        print("Successfully added book")
        return response
    raise HTTPException(400, "Something went wrong")
 

@app.put("/books/update{title}", response_model=Book)
async def put_book(title: str, author: str, year: int, pages: int, genre: str, price: float):
    response = await update_book(title, author, year, pages, genre, price)
    if response:
        return response
    raise HTTPException(404, f"There is no book with the title {title} in the database")


@app.delete("/books/{title}")
async def delete_book(title):
    response = await remove_book(title)
    if response:
        return "Successfully deleted book"
    raise HTTPException(404, f"There is no book with the title {title} in the database")


