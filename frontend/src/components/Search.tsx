import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';

const popularTerms = [
  'summer essentials',
  'jordan cmft era',
  'air force 1',
  'jordan',
  'air max',
  'jordan 1 low',
  'basketball shoes',
  'nike dunk low',
];

function Search() {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Nút nhỏ search ở navbar */}
      <div
        className="flex items-center px-3 py-1.5 rounded-full bg-gray-100 cursor-pointer hover:bg-gray-200"
        onClick={() => setOpen(true)}
      >
        <FiSearch className="text-gray-600 mr-2" />
        <span className="text-gray-500">Search</span>
      </div>

      {/* Full overlay khi mở search */}
      {open && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-95 text-white p-6 overflow-y-auto">
          <div className="flex items-center mb-6">
            <FiSearch className="text-2xl mr-3" />
            <input
              autoFocus
              type="text"
              placeholder="Search"
              className="bg-transparent border-none outline-none text-xl placeholder-gray-400 w-full"
            />
            <button
              onClick={() => setOpen(false)}
              className="text-white text-lg font-medium ml-4"
            >
              Cancel
            </button>
          </div>

          {/* Gợi ý tìm kiếm */}
          <div>
            <h2 className="text-gray-400 mb-3">Popular Search Terms</h2>
            <div className="flex flex-wrap gap-3">
              {popularTerms.map((term, index) => (
                <span
                  key={index}
                  className="bg-white text-black px-4 py-1.5 rounded-full font-semibold text-sm hover:bg-gray-200 cursor-pointer"
                >
                  {term}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Search;
