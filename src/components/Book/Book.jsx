import React from 'react';

const Book = ({ book }) => {

    const { image, bookName, author, tags, category, rating } = book;

    return (
        <div className="card bg-base-100 w-96 shadow-xl p-6">
            <figure className='bg-slate-300 py-8 rounded-2xl'>
                <img
                    src={image}
                    className='h-[166px]'
                    alt={bookName} />
            </figure>
            <div className="card-body">
                <div className='flex justify-between'>
                    {
                        tags.map(tag => <button className="btn btn-xs bg-slate-100 text-green-600">{tags}</button>)
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
    );
};

export default Book;