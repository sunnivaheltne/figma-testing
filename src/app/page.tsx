import Button from './Button';
import Navbar from './Navbar';

export default function Home() {
  return (
    <div className='h-screen flex flex-col justify-between bg-red-800 text-white p-5'>
      <div className='uppercase mt-20'>
        <h1>Sushiman</h1>
      </div>
      <main className='flex flex-col gap-3'>
        <h1>The taste of Japanese food</h1>
        <p>
          Feel the taste of most popular Japanese foods from anywhere and
          anytime
        </p>
        <Button text='Click for menu' />
      </main>
    </div>
  );
}
