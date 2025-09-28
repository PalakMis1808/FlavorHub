import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4 space-y-6">
        {/* Company Info */}
        <div className="banner flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="left text-2xl font-bold">FlavorHub</div>
          <div className="right text-gray-300 space-y-1">
            <p>123 Culinary Street, Flavor Town</p>
            <p>Hours: 10:00 AM - 10:00 PM</p>
            <p>Contact: +1 234 567 890</p>
          </div>
        </div>

        {/* Developer / Copyright */}
        <div className="banner flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-gray-400 text-sm">
          <div className="right">© 2025 FlavorHub. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
