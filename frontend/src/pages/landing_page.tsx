import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import videoAds from '../assets/video_ads.mp4';

const featuredItems=[
  {
    title: "Look of football",
    subtitle: "Total 90",
    button: "Shop",
    imageUrl: 'https://www.aljazeera.com/wp-content/uploads/2022/10/2022-09-18T191545Z_1003257161_UP1EI9I1HI7IH_RTRMADP_3_SOCCER-FRANCE-LYO-PSG-REPORT.jpg?resize=770%2C513&quality=80',
  },
    {
    title: "Nike Sportswear",
    subtitle: "Make an Impression",
    button: "Shop LD-1000",
    imageUrl: 'https://cdn.prod.website-files.com/62fe3f004c3de985c9e10052/651534a2e0cae2d87c065c48_802088-P01_FA23_TechFleece_Erling_0052_original-copy-1.jpeg',
  },
  {
    title: "Just in for Kids",
    subtitle: "Nike Star Runner 5",
    button: "Shop",
    imageUrl: 'https://static.nike.com/a/images/t_PDP_936_v1/f_auto,q_auto:eco/9fccc6ae-0c19-418d-a37d-4275a4b4cbcb/NIKE+STAR+RUNNER+5+%28PS%29.png',
  },
  {
    title: "Coming Soon",
    subtitle: "Air Jordan 40",
    button: "Get Notified",
    imageUrl: 'https://i.ebayimg.com/images/g/XWgAAOSw8Lxjj-C9/s-l1200.jpg',
  },
]
const newArrivals=[
  {
    name: 'Nike Dunk Low',
    category: "Women's Shoes",
    price: 3369000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_1.5/h_382,c_limit/d6594cec-e218-454d-9b19-18769a8496ce/dunk-low-shoes-R7nORyh7.png"
  },
  {
    name: 'Nike Dunk Low SE',
    category: "Women's Shoes",
    price: 3829000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/75d4e0f7-4593-45ad-906e-18e389397a28/dunk-low-se-shoes-veNokWrQ.png"
  },
  {
    name: 'Air Jordan 1 Low',
    category: "Men's Shoes",
    price: 3239000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/0abd1ece-612d-4c06-b21d-a8f3d8fa7901/air-jordan-1-low-shoes-lFCSjp.png"
  },
  {
    name: 'Nike Zoom GP Challenge 1',
    category: "Women's Hard Court Tennis Shoes",
    price: 4409000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/9de4db04-da7e-43b5-890e-45706f870e3f/zoom-gp-challenge-1-hard-court-tennis-shoes-72C9bR.png"
  },
  {
    name: 'Nike Zoom GP Challenge 1',
    category: "Women's Hard Court Tennis Shoes",
    price: 4409000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/9de4db04-da7e-43b5-890e-45706f870e3f/zoom-gp-challenge-1-hard-court-tennis-shoes-72C9bR.png"
  },
  {
    name: 'Nike Vapor 12',
    category: "Women's Hard Court Tennis Shoes",
    price: 4699000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/c54f4b70-329e-484c-972b-d168f30e5c34/vapor-12-hard-court-tennis-shoes-v9HS1ojo.png"
  },
  {
    name: 'Nike Dunk Low',
    category: "Women's Shoes",
    price: 3399000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/fa9e1167-c8e2-4921-bb99-fbb0e6f889a7/dunk-low-shoes-R7nORyh7.png"
  },
  {
    name: 'Nike Vapor 12',
    category: "Men's Hard Court Tennis Shoes",
    price: 4699000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/cbf397e4-b9d3-4efb-b773-bbd70e7e95cb/vapor-12-hard-court-tennis-shoes-JLVhlXj5.png"
  },
  {
    name: 'Nike Zoom GP Challenge 1',
    category: "Men's Hard Court Tennis Shoes",
    price: 4409000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/de234012-a14c-4ae5-9139-022e48618a73/zoom-gp-challenge-1-hard-court-tennis-shoes-GkKp0d.png"
  },
  {
    name: 'Nike Zoom GP Challenge 1',
    category: "Men's Hard Court Tennis Shoes",
    price: 4409000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/de234012-a14c-4ae5-9139-022e48618a73/zoom-gp-challenge-1-hard-court-tennis-shoes-GkKp0d.png"
  },
  {
    name: 'Nike Zoom GP Challenge 1',
    category: "Men's Clay Court Tennis Shoes",
    price: 4409000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/bf5b8799-89de-47c6-9726-c392ab304df6/zoom-gp-challenge-1-clay-court-tennis-shoes-TGBqxa83.png"
  },
  {
    name: 'Nike Vapor 12',
    category: "Men's Clay Court Tennis Shoes",
    price: 4699000,
    imageURL: "https://static.nike.com/a/images/q_auto:eco/t_product_v1/f_auto/dpr_2.0/h_369,c_limit/03cc02a4-d8bd-4d55-b43e-20f9cb7d6fb6/vapor-12-clay-court-tennis-shoes-Hkwt8541.png"
  }
]
const landing = () => {
  return (
    <div>
      <Navbar/>
      <a href='#'>
        <img
        className='bg-center bg-cover'
          src='https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/h_1675,c_limit/1c9da211-f815-4e36-88c2-0927d0c5bfb2/nike-just-do-it.png'
        />
        <figcaption className='flex flex-col justify-center mt-2 space-y-4 text-center'>
          <div>
            <p className=' text-base font-semibold text-black'>Structure 26</p>
            <h3 className='text-7xl font-extrabold uppercase'>RUN SUPPORTED</h3>
            <p className='mt-2 text-base font-normal text-black '>Supportive cushioning to help keep runners running</p>
            <div>
              <a href="#" 
                aria-label="Shop on App" 
                type="button"
                className='px-4 py-2 bg-black text-base text-white font-semibold rounded-full '
              >
              Shop on App
              </a>
            </div>
          </div>
        </figcaption>
        {/* Feature */}
        <h2 className="text-3xl font-medium mt-12 mb-6 ml-10">Featured</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 ml-0 ">
          {featuredItems.map((item, index) => (
            <div
              key={index}
              className="relative h-[400px] bg-cover bg-center overflow-hidden"
              style={{ backgroundImage: `url(${item.imageUrl})` }}
            >
              <div className="absolute bottom-6 left-6 text-white">
                <p className="text-sm">{item.title}</p>
                <h3 className="text-base font-semibold">{item.subtitle}</h3>
                <button className="mt-3 text-base px-5 py-2 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
                  {item.button}
                </button>
              </div>
            </div>
          ))}
        </div>
        {/* Trending */}
        <h2 className="text-3xl font-medium mt-12 mb-6 ml-10">Trending</h2>
        <div className='flex justify-center'>
          <video src={videoAds} controls autoPlay muted loop className="w-[90%] max-w-[960px] h-auto max-h-[500px]"></video>
        </div>
        {/* New Arrivals */}
        <h2 className="text-3xl font-medium mt-12 mb-6 ml-4 sm:ml-10">New Arrivals</h2>

<div className="overflow-x-auto px-4  flex scrollbar-hide">
  {newArrivals.map((product, index) => (
    <div
      key={index}
      className="flex-shrink-0 w-[160px] sm:w-[180px] md:w-[200px] lg:w-[400px] bg-white ml-5"
    >
      <img
        src={product.imageURL}
        alt={product.name}
        className="w-full h-[120px] sm:h-[130px] md:h-[150px] lg:h-[400px] object-cover mb-2"
      />
      <h3 className="text-sm sm:text-base font-semibold">{product.name}</h3>
      <p className="text-sm text-gray-500 font-normal">{product.category}</p>
      <p className="mt-2 font-semibold text-base text-black">
        {product.price.toLocaleString()}₫
      </p>
    </div>
  ))}
</div>


      </a>
      <Footer/>
    </div>
    
  )
}

export default landing