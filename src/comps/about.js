
import Image from 'next/image'
const About = () => {
    return (
      <div  className="section my-5">
        <div className="container mx-auto">
          <h2 className="section-title text-center py-4 font-rock-salt text-4xl text-primary">
            About Nissan
          </h2>
          <div className="section my-5">
            <div className="container-about flex grid-template-columns: repeat(2, minmax(0, 1fr)) ">
              <div className="content-section w-full ">
                <div className="content">
                  <p className="mt-2 text-lg leading-relaxed mb-5">
                    Nissan has a long history of innovation and excellence in the automotive industry. Founded in 1933, Nissan has been at the forefront of developing groundbreaking vehicles that combine performance, technology, and design.
                  </p>
                  <div className="button-readmore flex justify-center">
                    <button className="button-alone bg-primary py-2 px-4 rounded text-white text-sm transition duration-300 hover:bg-[#8f4d57]">
                      Read more
                    </button>
                  </div>
                </div>
              </div>
              <div className="image-section w-full ">
              <Image
      src="/car10.webp"
      className="w-full"
      width={500}
      height={500}
      alt="Nissan"/>  
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;
  