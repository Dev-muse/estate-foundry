import Logo from '@/public/assets/img/logo.svg';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className='py-6 mb-12 border-b'>
      <div className="max-auto container flex justify-between items-center">
        {/* Logo */}
        <Link href='/'><Image src={Logo} alt="logo" /></Link>
        {/* buttons */}
        <div className="gap-6 flex items-center">
          <Link className='hover:bg-violet-700 bg-violet-500 px-4 py-2 text-white rounded-full' href='/'>Sign Up</Link>
          <Link href='/' className='hover:text-violet-900 transition'>Log In</Link>
        </div>
      </div>
    </header>
  )
};

export default Header;
