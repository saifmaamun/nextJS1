import React from 'react';

const DynamicPage = ({ params, searchParams }) => {
    console.log(params)
    console.log(searchParams)
    return (
        <div>
            <h1>Dynamic Page No :{params.productId}</h1>
            <h1>Search by :{searchParams.gender}</h1>
        </div>
    );
};

export default DynamicPage;