const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-10 text-sm text-gray-600">
  {/* Top Section */}
  <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between space-y-10 md:space-y-0">
    {/* 3 Cột chính */}
    <div className="flex flex-col space-y-3">
      <h4 className="font-semibold text-black">Resources</h4>
      <div className="mt-3"></div>
      <a href="#" className="font-medium">Find A Store</a>
      <a href="#" className="font-medium">Become A Member</a>
      <a href="#" className="font-medium">Running Shoe Finder</a>
      <a href="#" className="font-medium">Send Us Feedback</a>
    </div>

    <div className="flex flex-col space-y-3">
      <h4 className="font-semibold text-black">Help</h4>
      <a href="#">Get Help</a>
      <a href="#">Order Status</a>
      <a href="#">Delivery</a>
      <a href="#">Returns</a>
      <a href="#">Payment Options</a>
      <a href="#">Contact Us</a>
    </div>

    <div className="flex flex-col space-y-3">
      <h4 className="font-semibold text-black">Company</h4>
      <a href="#">About Nike</a>
      <a href="#">News</a>
      <a href="#">Careers</a>
      <a href="#">Investors</a>
      <a href="#">Sustainability</a>
      <a href="#">Impact</a>
      <a href="#">Report a Concern</a>
    </div>

    {/* Quốc gia */}
    <div className="flex items-start">
      <span className="inline-flex items-center space-x-2 text-gray-700">
        <svg className="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10..."/>
        </svg>
        <span className="font-semibold">Vietnam</span>
      </span>
    </div>
  </div>

  {/* Bottom Section */}
  <div className="max-w-7xl mx-auto mt-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm text-gray-500">
    <p>© 2025 Nike, Inc. All rights reserved</p>
    <div className="flex flex-wrap justify-center md:justify-end space-x-6">
      <a href="#">Guides ▾</a>
      <a href="#">Terms of Sale</a>
      <a href="#">Terms of Use</a>
      <a href="#">Nike Privacy Policy</a>
      <a href="#">Privacy Settings</a>
    </div>
  </div>
</footer>

  )
}

export default Footer