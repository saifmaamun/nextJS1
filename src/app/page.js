import Counter from '@/components/Counter';
import Link from 'next/link';
import React from 'react';

const HomePage = () => {
  return (
    <div>
      Hello
      <Counter />
      <Link href="/products">
        <button className="btn btn-success"> products</button>
      </Link>
      {/* <Link href="/products/[productID]">
        <button className="btn btn-success"> Dynamic</button>
      </Link> */}
      <Link href="/contact">
        <button className="btn btn-success"> contact</button>
      </Link>
    </div>
  );
};

export default HomePage;