from model import Book
from motor.motor_asyncio import AsyncIOMotorClient

client = AsyncIOMotorClient('mongodb://localhost:27017') 

database = client.Bookstore
collection = database.book


async def fetch_one_book(title):
    document = await collection.find_one({"title": title})
    return document

async def fetch_all_books():
    books = []
    cursor = collection.find({})
    async for document in cursor:
        books.append(Book(**document))
    return books

async def create_book(book):
    document = book
    result = await collection.insert_one(document)
    return document

async def update_book(title, author, year, pages, genre, price):
    await collection.update_one({"title": title}, {"$set": {"author": author, "year": year, "pages": pages, "genre": genre, "price": price}})
    document = await collection.find_one({"title": title})
    return document

async def remove_book(title):
    await collection.delete_one({"title": title})
    return True