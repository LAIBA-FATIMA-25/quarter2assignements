
import React from 'react';

const EcommercePage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* Header Section */}
      <header className="flex justify-between items-center py-4 border-b">
        <h1 className="text-2xl font-bold">Your Brand</h1>
        <nav>
          <ul className="flex space-x-4">
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Home</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Shop</a></li>
            <li><a href="#" className="text-gray-700 hover:text-gray-900">Contact</a></li>
          </ul>
        </nav>
      </header>

      {/* Product Promotion Section */}
      <section className="py-8">
        <h2 className="text-center text-xl font-semibold mb-6">Our Promotion Events</h2>
        <div className="flex justify-center space-x-4">
          {/* Promotion Cards */}
          <div className="bg-gray-200 p-4 flex-1 text-center">
            <p className="text-2xl font-bold mb-4">Get up to 50%</p>
            <p>image1</p> {/* Replace with image */}
            <button className="mt-4 bg-black text-white py-2 px-4 rounded">GET 30% OFF</button>
          </div>
          <div className="bg-gray-200 p-4 flex-1 text-center">
            <p>image2</p> {/* Replace with image */}
          </div>
          <div className="bg-gray-200 p-4 flex-1 text-center">
            <p>image3</p> {/* Replace with image */}
          </div>
        </div>
      </section>

      {/* Check What We Have Section */}
      <section className="py-8">
        <h2 className="text-center text-xl font-semibold mb-6">Check What We Have</h2>
        <div className="grid grid-cols-3 gap-4">
          {/* Product Images */}
          <div className="border p-4 text-center">image4</div> {/* Replace with image */}
          <div className="border p-4 text-center">image5</div> {/* Replace with image */}
          <div className="border p-4 text-center">image6</div> {/* Replace with image */}
        </div>
      </section>

      {/* Unique and Authentic Section */}
      <section className="py-8 bg-gray-100">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold">Unique and Authentic Vintage Designer Jewellery</h2>
          <p>image7</p> {/* Replace with image */}
          <button className="mt-4 bg-black text-white py-2 px-4 rounded">Explore More</button>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-8">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-xl font-semibold">Subscribe to Our Newsletter</h2>
          <form className="mt-4 flex justify-center">
            <input type="email" placeholder="Your email" className="border p-2 mr-2" />
            <button type="submit" className="bg-black text-white py-2 px-4 rounded">Subscribe</button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-8 py-4 border-t text-center">
        <p className="text-sm text-gray-500">© 2024 Your Brand. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default EcommercePage;
