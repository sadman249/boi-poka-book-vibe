import React from 'react';
import { Link } from 'react-router-dom';

const Book = ({ book }) => {

    const { bookId, image, bookName, author, tags, category, rating } = book;

    return (
        <Link to={`/book/${bookId}`}>
            <div className="card bg-base-100 w-96 shadow-xl p-6">
                <figure className='bg-[#F3F3F3] py-8 rounded-2xl'>
                    <img
                        src={image}
                        className='h-[166px]'
                        alt={bookName} />
                </figure>
                <div className="card-body">
                    <div className='flex justify-between'>
                        {
                            tags.map((tag, index) => <button key={index} className="btn btn-xs bg-[#F3F3F3] text-[#23BE0A]">{tags}</button>)
                        }
                    </div>
                    <h2 className="card-title">
                        {bookName}
                        <div className="badge badge-secondary">NEW</div>
                    </h2>
                    <p>By: {author}</p>
                    <div className="divider"></div>
                    <div className="card-actions justify-between items-center">
                        <div className="badge badge-outline">{category}</div>
                        <div className="flex  items-center gap-3">
                            <p>{rating}</p>
                            <div className="rating">

                                <input type="radio" name="rating-4" className="mask mask-star-2 " />

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;