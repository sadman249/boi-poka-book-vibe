import React from 'react';
import bannerImg from '../../assets/books.jpg';

const Banner = () => {
    return (
        <div className="hero bg-[#FFFFFF] min-h-screen rounded-md">
            <div className="hero-content flex-col lg:flex-row-reverse lg:px-28">
                <img
                    src={bannerImg}
                    className="rounded-lg shadow-2xl lg:max-w-sm" />
                <div>
                    <h1 className="text-5xl font-bold text-black">Books to freshen up your booksshelf</h1>
                    <button className="btn bg-[#23BE0A] border-none text-white font-bold mt-5">View The List</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;