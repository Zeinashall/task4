const Details = () => {
    return (
      <div id="details" className="section my-10">
        <div className="container mx-auto">
          <h2 className="section-title text-center py-4 font-rock-salt text-4xl text-primary">
            DETAILS!
          </h2>
          <div className="card-container flex flex-wrap gap-5 justify-center">
            <div className="card bg-white rounded-lg shadow-md overflow-hidden w-72">
              <div className="classpic">
                <img src="/nissan-kick.webp" alt="Image 1" className="w-full h-52 object-cover"/>
              </div>
              <div className="card-content p-5">
                <h3 className="text-xl mb-2">Nissan GT-R</h3>
                <p className="text-lg">PRICE: $213,775</p>
              </div>
            </div>
  
            <div className="card bg-white rounded-lg shadow-md overflow-hidden w-72">
              <div className="classpic">
                <img src="/nissan2.webp" alt="Image 2" className="w-full h-52 object-cover"/>
              </div>
              <div className="card-content p-5">
                <h3 className="text-xl mb-2">Nissan Sentra</h3>
                <p className="text-lg">PRICE: $113,540</p>
              </div>
            </div>
  
            <div className="card bg-white rounded-lg shadow-md overflow-hidden w-72">
              <div className="classpic">
                <img src="/nissan3.webp" alt="Image 3" className="w-full h-52 object-cover"/>
              </div>
              <div className="card-content p-5">
                <h3 className="text-xl mb-2">Nissan Rogue</h3>
                <p className="text-lg">PRICE: $24,300</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default Details;
  