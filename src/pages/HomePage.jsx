import phone from '../images/iPhone 15 Pro.png';
import videoPic from '../images/Group 48.png';
import '../App.css';
import Navbar from '../components/common/Navbar';
import MaxWidthWrapper from '../components/common/MaxWidthWrapper';
import { features, recentArticles, testimonials } from '../../data';
import Footer from '../components/common/Footer';

function HomePage() {
  return (
    <>
      <div>
        <div className='upper'>
          <Navbar />
          <MaxWidthWrapper className='hero flex-col sm:flex-row w-screen sm:w-full'>
            <div className='hero1 w-full sm:w-1/2'>
              <h1 className='font-playfair font-bold text-3xl text-primary leading-normal sm:text-[2.8rem]'>
                Seamlessly track your health with MVP
              </h1>
              <p>
                Track vaccinations, monitor community health, and get real-time
                updates
              </p>
              <button>LEARN MORE</button>
            </div>
            <div className='hero2'>
              <img src={phone} />
            </div>
          </MaxWidthWrapper>
        </div>

        <MaxWidthWrapper className='bg-secondary py-20 w-screen sm:w-full'>
          <div className='flex flex-col gap-5 text-center w-full mx-auto sm:w-3/4'>
            <h1 className='font-playfair text-2xl font-bold'>
              OUR IMPRESSIVE FEATURES
            </h1>
            <p className='font-inter text-base sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur. At posuere nunc blandit
              leo amet sodales scelerisque. Mauris.
            </p>
          </div>

          <div className='flex flex-col items-center gap-28 mt-36'>
            {features.map((item, i) => {
              return (
                <div
                  key={i}
                  className='flex flex-col items-center gap-10 text-center sm:text-start sm:even:flex-row-reverse sm:even:gap-60 sm:even:text-right sm:flex-row sm:items-center sm:gap-32'
                >
                  <aside className='w-full font-inter sm:mr-28'>
                    <h2 className='text-xl font-bold mb-4'>{item.feature}</h2>
                    <p className='text-base mb-5 sm:text-sm'>{item.desc}</p>
                    <button className='text-sm rounded-lg hidden sm:inline-block'>
                      {item.buttonText}
                    </button>
                  </aside>
                  <img src={item.img} alt={item.feature} className='sm:mr-24' />
                  <button className='text-base rounded-lg flex sm:hidden'>
                    {item.buttonText}
                  </button>
                </div>
              );
            })}
          </div>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='text-center bg-[#fffbfa] py-20 w-screen sm:w-full sm:py-36'>
          <h2 className='text-primary text-4xl font-[Aeonik] font-bold'>
            How it works
          </h2>
          <aside className='flex justify-center w-full mt-12'>
            <img src={videoPic} alt='' className='w-full sm:w-3/5 mx-auto' />
          </aside>
        </MaxWidthWrapper>

        <MaxWidthWrapper className='w-screen sm:w-full'>
          {/* Your chart js here */}
          <div></div>

          <div className='w-full p-4 text-center sm:w-3/5 mt-20 mx-auto'>
            <h2 className='text-tertiary text-2xl font-playfair font-bold mb-4 sm:text-xl'>
              Recent Articles
            </h2>
            <p className='text-tertiary text-base mb-5 sm:text-sm'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem,
              numquam explicabo molestias dolore facere commodi quis tenetur
              ullam qui impedit, pariatur voluptatem iste fugit consequuntur
              omnis id ex modi non!
            </p>
          </div>
          <div className='flex flex-col gap-10 w-full sm:flex-row sm:w-[88%] mx-auto sm:gap-5'>
            {recentArticles.map((article, i) => {
              return (
                <div
                  className='bg-secondary w-full mx-auto sm:w-[35%] pb-5 rounded-md sm:pb-3'
                  key={i}
                >
                  <img
                    src={article.img}
                    alt='Patience Image'
                    className='h-1/2 w-full'
                  />
                  <aside className='pt-5 px-5'>
                    <h4 className='font-bold mb-3'>{article.title}</h4>
                    <p className='text-sm mb-4'>{article.description}</p>
                    <button className='border-none text-sm rounded-md w-full'>
                      Read More
                    </button>
                  </aside>
                </div>
              );
            })}
          </div>

          <div className='text-primary mb-16'>
            <div className='w-full sm:w-1/2 mx-auto my-32 text-center gap-8'>
              <h2 className='font-playfair text-2xl font-bold leading-normal'>
                TESTIMONIALS <br />
                WHAT OUR USERS SAY
              </h2>
              <p className='font-inter text-base mt-6 w-full sm:w-4/6 mx-auto'>
                Lorem ipsum dolor sit amet consectetur. Tortor pharetra massa
                lacus diam quis adipiscing.
              </p>
            </div>
            <div className='flex flex-col gap-20 sm:gap-5 sm:w-4/5 mx-auto sm:flex-row'>
              {testimonials.map((testimonial, i) => {
                return (
                  <div className='card1' key={i}>
                    <div className='w-28 absolute -top-14 left-1/2 -translate-x-1/2'>
                      <img
                        src={testimonial.img}
                        alt='user image'
                        className='w-full h-full'
                      />
                    </div>
                    <p className='mt-16 text-sm'>{testimonial.description}</p>
                    <h3 className='mt-10 text-sm font-bold'>
                      {testimonial.name}
                    </h3>
                    <h3 className='text-sm'>{testimonial.job}</h3>
                  </div>
                );
              })}
            </div>
          </div>
        </MaxWidthWrapper>

        <Footer />
      </div>
    </>
  );
}

export default HomePage;
