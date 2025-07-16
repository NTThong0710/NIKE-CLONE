
import { Heart, Search, ShoppingBasket } from 'lucide-react';
import { useState } from 'react'

function Navbar() {
    const[open, setOpen] = useState(false);
  return (
    <div className='border-b'>
        <div className='flex justify-between items-center px-6 py-3 bg-neutral-100'>
            <div className='flex items-center space-x-4 ml-8'>
                <img 
                    src="https://logowik.com/content/uploads/images/342_jordan.jpg" 
                    alt="Logo Jordan"
                    className='h-5 w-auto' 
                />
            </div>
            <div className='flex items-center space-x-4 text-xs text-gray-700'>
                <a href="">Find a Store   | </a>
                <a href="">Help   | </a>
                <a href="">Join us   | </a>
                <a href="/login">Sign In</a>
            </div>
        </div>

        <div className='flex justify-between items-center px-6 py-3 bg-white'>
            <div>
                <a href="/">
                    <img 
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLm5slutBUNwHWoLsUO88g_lHcndcT_eZPQ&s" 
                    alt="Logo Nike"
                    className='ml-8 h-12 w-18'   
                />
                </a>  
            </div>

            <div className='hidden md:flex space-x-6 items-center font-medium text-base flex-1 justify-center'>
                <a href="#" className='hover:underline'>New & Feature</a>
                <a href="#" className='hover:underline'>Men</a>
                <a href="#" className='hover:underline'>Women</a>
                <a href="#" className='hover:underline'>Kids</a>
                <a href="#" className='hover:underline'>Sale</a>
            </div>

            <div className='flex items-center space-x-3 ml-4 text-lg'>
                <div className="relative hidden md:block">
                    <input
                    type="text"
                    placeholder="Search"
                    className="pl-8 pr-3 py-1.5 border border-gray-300 text-stone-300 rounded-full text-sm bg-gray-100 hover:bg-gray-200 outline-none"
                    onClick={() => setOpen(true)}
                    />
                    <span className="absolute left-2 top-1.5 text-gray-500 bg-black-100 hover:bg-black-200"><Search/></span>    
                </div>
                {open && (
                    <div className="fixed top-0 left-0 w-full h-screen bg-white z-50 p-6 overflow-y-auto transition-all duration-300 ease-in-out">
                        <div className="flex items-center justify-between mb-6">
                            <img 
                                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLm5slutBUNwHWoLsUO88g_lHcndcT_eZPQ&s" 
                                alt="Logo Nike"
                                className='h-18 w-auto' 
                            />
                        <div className="flex items-center w-full max-w-2xl bg-gray-100 px-4 py-2 rounded-full">
                            <Search className='mr-3'/>
                            <input
                            autoFocus
                            type="text"
                            placeholder="Search"
                            className="bg-transparent border-none outline-none w-full text-lg "
                            />
                        </div>
                        <button
                            onClick={() => setOpen(false)}
                            className="ml-4 text-lg text-black font-medium"
                        >
                            Cancel
                        </button>
                        </div>

                        {/* Popular search terms */}
                        <div>
                        <h2 className="text-gray-500 text-sm mb-4">Popular Search Terms</h2>
                        <div className="flex flex-wrap gap-3">
                            {[
                            'summer essentials',
                            'jordan cmft era',
                            'air force 1',
                            'jordan',
                            'air max',
                            'jordan 1 low',
                            'basketball shoes',
                            'nike dunk low',
                            ].map((term, index) => (
                            <span
                                key={index}
                                className="bg-gray-100 px-4 py-2 rounded-full text-sm font-semibold hover:bg-gray-200 cursor-pointer"
                            >
                                {term}
                            </span>
                            ))}
                        </div>
                        </div>
                    </div>
                )}

                <a href="#" className=''><Heart/></a>
                <a href="#"><ShoppingBasket/></a>
            </div>
        </div>  
    </div>

  )
}

export default Navbar