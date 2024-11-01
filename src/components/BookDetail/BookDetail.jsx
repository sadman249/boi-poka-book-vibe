import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetail = () => {

    const { bookId } = useParams();
    const data = useLoaderData();
    const id = parseInt(bookId);

    const book = data.find(book => book.bookId === id);

    const { bookId: currentBookId, image, bookName, author, tags, category, rating, review, publisher, yearOfPublishing, totalPages } = book;

    return (
        <div>
            <div className="hero bg-base-200 min-h-screen">
                <div className="hero-content flex-col lg:flex-row gap-5 p-5">
                    <figure className='bg-[#F3F3F3] p-8 rounded-2xl'>
                        <img
                            src={image}
                            className='lg:h-[500px]'
                            alt={bookName} />
                    </figure>
                    <div className='lg:w-8/12 lg:p-10'>
                        <h1 className="text-3xl font-bold">{bookName}</h1>
                        <br />
                        <p className="font-bold">By: {author}</p>
                        <div className="divider"></div>
                        <p className="font-bold">{category}</p>
                        <div className="divider"></div>
                        <p className="py-6">
                            <strong>Review :</strong> {review}
                        </p>
                        <br />
                        <div className='lg:flex gap-5'>
                            {
                                tags.map((tag, index) => <button key={index} className="btn btn-xs bg-[#F3F3F3] font-bold text-[#23BE0A] mb-5"><strong>Tag :</strong>{tags}</button>)
                            }
                        </div>
                        <br />
                        <p>Number of Page :     <strong>{totalPages}</strong></p>
                        <p>Publisher : <strong>{publisher}</strong></p>
                        <p>Year of Publishing : <strong>{yearOfPublishing}</strong></p>
                        <p>Rating : <strong>{rating}</strong></p>
                        <button className="btn btn-outline mr-4 btn-accent mt-5">Read</button>
                        <button className="btn btn-accent mt-5">WishList</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetail;