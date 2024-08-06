import Image from 'next/image';
import Link from 'next/link';

const Details = () => {
  return (
    <div id="details" className="section my-10">
      <div className="container mx-auto">
        <h2 className="section-title text-center py-4 font-rock-salt text-4xl text-primary">
          DETAILS!
        </h2>
        <div className="card-container grid grid-cols-3 gap-5 justify-center">
          <Link href="#" className="card bg-white rounded-lg shadow-md overflow-hidden hover:bg-stone-400">
            <div className="classpic">
              <Image
                src="/nissan-kick.webp"
                className="w-full h-52 object-cover"
                width={500}
                height={500}
                alt="Image 1"
              />
            </div>
            <div className="card-content p-5">
              <h3 className="text-xl mb-2">Nissan GT-R</h3>
              <p className="text-lg">PRICE: $213,775</p>
            </div>
          </Link>

          <Link href="#" className="card bg-white rounded-lg shadow-md overflow-hidden hover:bg-stone-400">
            <div className="classpic">
              <Image
                src="/nissan2.webp"
                className="w-full h-52 object-cover"
                width={500}
                height={500}
                alt="Image 2"
              />
            </div>
            <div className="card-content p-5">
              <h3 className="text-xl mb-2">Nissan Sentra</h3>
              <p className="text-lg">PRICE: $113,540</p>
            </div>
          </Link>

          <Link href="#" className="card bg-white rounded-lg shadow-md overflow-hidden hover:bg-stone-400">
            <div className="classpic">
              <img src="/nissan3.webp" alt="Image 3" className="w-full h-52 object-cover" />
            </div>
            <div className="card-content p-5">
              <h3 className="text-xl mb-2">Nissan Rogue</h3>
              <p className="text-lg">PRICE: $24,300</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Details;
