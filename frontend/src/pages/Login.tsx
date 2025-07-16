import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer'
export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [keepSignedIn, setKeepSignedIn] = useState(false);

  return (
    <div>
        <Navbar/>
        <div className=" flex items-center justify-center bg-white">
            <div className="p-5 w-[400px] text-center space-y-6">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyLm5slutBUNwHWoLsUO88g_lHcndcT_eZPQ&s" 
                        alt="Logo Nike"
                        className='w-10 h-8 mx-auto' 
                    />
                <h1 className="text-xl font-semibold leading-tight">
                YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE
                </h1>

                <div className="space-y-4">
                <input
                    type="email"
                    placeholder="Email address"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full border border-gray-300 px-4 py-2 rounded outline-none focus:ring-2 focus:ring-black"
                />
                </div>

                <div className="flex items-center justify-between text-sm text-gray-600">
                <label className="flex items-center gap-2">
                    <input
                    type="checkbox"
                    checked={keepSignedIn}
                    onChange={() => setKeepSignedIn(!keepSignedIn)}
                    className="accent-black"
                    />
                    Keep me signed in
                </label>
                <a href="#" className="hover:underline">
                    Forgotten your password?
                </a>
                </div>

                <p className="text-xs text-gray-500">
                By logging in, you agree to Nike’s{' '}
                <a href="#" className="underline">
                    Privacy Policy
                </a>{' '}
                and{' '}
                <a href="#" className="underline">
                    Terms of Use
                </a>.
                </p>

                <button className="w-full bg-black text-white py-3 font-semibold hover:bg-gray-900 rounded">
                SIGN IN
                </button>

                <p className="text-sm text-gray-700">
                Not a Member?{' '}
                <a href="#" className="underline font-medium">
                    Join Us.
                </a>
                </p>
            </div>
        </div>
        <Footer/>
    </div>
    
  );
}
