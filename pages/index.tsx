import { Tab } from '@headlessui/react'
import type { NextPage } from 'next'

import dynamic from 'next/dynamic'
import { useState } from 'react'
import { useRouter } from 'next/router';
import { useTranslation } from "react-i18next";
import LanguageSelect from "../components/languageSelect";



const Herder = dynamic(
  () => import('../components/herder'),
  { ssr: false }
)


const Home: NextPage = () => {
  const { t }:any = useTranslation();
  function classNames(...classes: any) {
    return classes.filter(Boolean).join(' ')
  }

  let [categories] = useState({
    Review: [
      {
        id: 1,
        title: 'Does drinking coffee make you smarter?',
        date: '5h ago',
        commentCount: 5,
        shareCount: 2,
      },
      {
        id: 2,
        title: "So you've bought coffee... now what?",
        date: '2h ago',
        commentCount: 3,
        shareCount: 2,
      },
    ],
    Popular: [
      {
        id: 1,
        title: 'Is tech making coffee better or worse?',
        date: 'Jan 7',
        commentCount: 29,
        shareCount: 16,
      },
      {
        id: 2,
        title: 'The most innovative things happening in coffee',
        date: 'Mar 19',
        commentCount: 24,
        shareCount: 12,
      },
    ],
    Trending: [
      {
        id: 1,
        title: 'Ask Me Anything: 10 answers to your questions about coffee',
        date: '2d ago',
        commentCount: 9,
        shareCount: 5,
      },
      {
        id: 2,
        title: "The worst advice we've ever heard about coffee",
        date: '4d ago',
        commentCount: 1,
        shareCount: 2,
      },
    ],
  })

  const router = useRouter();
  return (
<>
    <Herder />

    <div className='bg-white min-w-fit mt-[-10px] '>

      <div className=" w-full h-[790px] bg-full bg-no-repeat bg-top bg-cover  bg-[url('/assests/bg.png')] ">

        <div className=' flex flex-col h-full  space-y-2 w-full justify-start items-center pt-[180px] md:pt-[150px] sm:pt-[100px] xs:pt-[60px]'>
          <div className='text-[5.8rem] font-serif leading-1 text-center '>
          {t("The VPN that just works")}</div>
          <div className='text-[2rem]'>{t("Go further with the #1 trusted leader in VPN")}</div>
          <div className='bg-[#0f866c] hover:bg-yellow-500 cursor-pointer rounded-full text-center text-[1.5rem] text-white px-4 py-2' > {t("Get the express VPN")}</div>
          <div className='text-sm'>{t("30-DAY MONEY-BACK GUARANTEE")}</div>
        </div>
      </div>
      <div className='flex flex-col justify-center  items-center w-full space-x-4 space-y-4 mt-[100px] xs:px-6 sm:px-4'>

        <div className='flex justify-center space-x-20 items-center w-7/12'>
          <div >
            <img className='h-[300px] w-[400px] rounded-lg border-white min-w-[300px]' alt='img' src='../assests/girl.png' />
          </div>
          <div className='h-full w-full flex flex-col justify-between space-y-2 items-start' >
            <div className='text-[3rem] font-serif leading-11'>
            {t(" Secure access, worldwide")}
            </div>
            <div className='text-[1rem]'>
              Connect reliably from anywhere, to anywhere. Our network of high-speed servers across 94 countries puts you in control.
            </div>
            <div className='mt-[50px] rounded-full bg-[#0f866c] hover:bg-yellow-500  text-white hover:text-black text-[1.5rem] px-4 py-2'>
              Get ExpressVPN
            </div>
          </div>
        </div>

      </div>



      <div className='flex flex-col justify-center  items-center w-full space-x-4 space-y-4 mt-[100px] xs:px-6 sm:px-4'>

        <div className='flex justify-center space-x-20 items-center w-7/12'>

          <div className='h-full w-full flex flex-col justify-between space-y-2 items-start' >
            <div className='text-[3rem] font-serif leading-11'>
              Secure access, worldwide
            </div>
            <div className='text-[1rem]'>
              Connect reliably from anywhere, to anywhere. Our network of high-speed servers across 94 countries puts you in control.
            </div>
            <div className='mt-[50px] rounded-full bg-[#0f866c] hover:bg-yellow-500  text-white hover:text-black text-[1.5rem] px-4 py-2'>
              Get ExpressVPN
            </div>
          </div>
          <div >
            <img className='h-[300px] w-[400px] rounded-lg border-white min-w-[300px]' alt='img' src='../assests/girld.png' />
          </div>
        </div>

      </div>


      <div className='flex flex-col justify-center  items-center w-full space-x-4 space-y-4 mt-[100px] xs:px-6 sm:px-4'>

        <div className='flex justify-center space-x-20 items-center w-7/12'>
          <div >
            <img className='h-[300px] w-[400px] rounded-lg border-white min-w-[300px]' alt='img' src='../assests/gilse.png' />
          </div>
          <div className='h-full w-full flex flex-col justify-between space-y-2 items-start' >
            <div className='text-[3rem] font-serif leading-11'>
              Secure access, worldwide
            </div>
            <div className='text-[1rem]'>
              Connect reliably from anywhere, to anywhere. Our network of high-speed servers across 94 countries puts you in control.
            </div>
            <div className='mt-[50px] rounded-full bg-[#0f866c] hover:bg-yellow-500  text-white hover:text-black text-[1.5rem] px-4 py-2'>
              Get ExpressVPN
            </div>
          </div>
        </div>

      </div>


      <div className='flex xs:flex-col sx:flex-col  justify-center  items-center w-full  mt-[100px] pl-[180px] pr-[140px] sm:px-10 xs:px-10 '>

        <div className=' flex justify-center items-start flex-col'>
          <img className='w-3/4 xs:w-full sm:w-full' alt='...' src='https://ftr.imgix.net/6okBylTKqGv0FRM9yHPXs1/4a466e256a43ce031b3e0ebb0a1dbe28/serious-security.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=720&s=bfb3248b665ab05391c3ed97a5d26f4d' />
          <div className='flex flex-col justify-center items-start w-3/4 text-center '>
            <p className='text-[2.5rem]   flex-wrap font-serif'>Stronger data protection</p>
            <p className=' text-sm  sm:text-lg xs:text-lg mt-2 flex-wrap'>Take charge of your online privacy and security with best-in-class encryption.</p>
          </div>
        </div>

        <div className=' flex justify-center items-start flex-col'>
          <img className='w-3/4 xs:w-full sm:w-full' alt='...' src='https://ftr.imgix.net/5F2ySeLBognoZIJQNjyAot/71dd6fe83c1cc08ffa2dacde0759e39e/be-anywhere.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=720&s=3f84a447b3fc990628ec0e11e89e641f' />
          <div className='flex flex-col justify-center items-start w-3/4 text-center '>
            <p className='text-[2.5rem] sm,xs:text-center   flex-wrap font-serif'>Stronger data protection</p>
            <p className=' text-sm mt-2 sm:text-lg  xs:text-lg  flex-wrap'>Take charge of your online privacy and security with best-in-class encryption.</p>
          </div>
        </div>


        <div className=' flex justify-center items-start flex-col'>
          <img className='w-3/4 xs:w-full sm:w-full' alt='...' src='https://ftr.imgix.net/uoPgq1HAqZRS3jE7tdH0t/b4a797aa617cc7cbc03545217687fad9/blazing-fast-speeds.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=720&s=3769fd7122b6b19da2e9746f14168e72' />
          <div className='flex flex-col justify-center items-start w-3/4 text-center '>
            <p className='text-[2.5rem] sm,xs:text-center  flex-wrap font-serif leading-10'>Stronger data protection</p>
            <p className=' text-sm mt-2 sm:text-lg  xs:text-lg flex-wrap '>Take charge of your online privacy and security with best-in-class encryption.</p>
          </div>
        </div>



      </div>



      <div className=" w-full h-[790px] mt-[150px] bg-full bg-no-repeat mt-100 bg-center bg-[#dae8e7] bg-[url('https://ftr.imgix.net/7lwGiNKX1HxPubuMWDIMbq/b59b91270f571645d72011e317c60ff5/map-server-home-desktop-_2x.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=877&s=0bb0e9140786c0e6407336d04ddf3f6d')] ">

        <div className=' flex flex-col h-3/4  space-y-100 w-full justify-between items-center pt-[100px]'>
          <div className='text-[3.8rem] font-serif leading-1  '>Ultra-fast servers in 94 countries</div>
          <div className='text-sm underline underline-offset-8 text-[#0f866c] hover:text-black underLineAni'>See our full list of VPN server locations </div>
        </div>
      </div>

      <div className=" w-full mt-[100px] h-[790px] bg-full ">

        <div className=' flex flex-col h-full  space-y-2 w-full justify-start items-center '>
          <div className='text-[3.8rem] font-serif leading-1 text-center w-3/4 '>What people are saying about ExpressVPN</div>
          <div className="w-full max-w-md px-2 py-16 sm:px-0 ">
              <Tab.Group>
                <Tab.List className="flex space-x-5 rounded-xl  p-1 ">
                  {Object.keys(categories).map((category) => (
                    <Tab
                      key={category}
                      className={({ selected }) =>
                        classNames(
                          'w-full border-0  border-white py-2.5 text-sm font-medium leading-5 text-gray-600 underLineAni',
                          ' ring-white ring-opacity-0 ring-offset-2 ring-offset-white focus:outline-none focus:ring-2 underline underline-offset-[13px] ',
                          selected
                            ? 'text-black'
                            : 'text-gray-400  hover:text-black underline underline-offset-[13px]'
                        )
                      }
                    >
                      {category}
                    </Tab>
                  ))}
                </Tab.List>
                <Tab.Panels className="mt-2 w-full">
                  {Object.values(categories).map((posts, idx) => (
                    <Tab.Panel
                      key={idx}
                      className={classNames(
                        'rounded-xl bg-white p-3',
                        ''
                      )}
                    >
                      <ul>
                        {posts.map((post) => (
                          <li
                            key={post.id}
                            className="relative rounded-md p-3 hover:bg-gray-100"
                          >
                            <h3 className="text-sm font-medium leading-5">
                              {post.title}
                            </h3>

                            <ul className="mt-1 flex space-x-1 text-xs font-normal leading-4 text-gray-500">
                              <li>{post.date}</li>
                              <li>&middot;</li>
                              <li>{post.commentCount} comments</li>
                              <li>&middot;</li>
                              <li>{post.shareCount} shares</li>
                            </ul>

                            <a
                              href="#"
                              className={classNames(
                                'absolute inset-0 rounded-md',
                                'ring-blue-400 focus:z-10 focus:outline-none focus:ring-2'
                              )}
                            />
                          </li>
                        ))}
                      </ul>
                    </Tab.Panel>
                  ))}
                </Tab.Panels>
              </Tab.Group>
            </div>
        </div>
      </div>

      <div className=' flex justify-center items-center'>
        <div className=' xs:flex-col sm-flex-col flex  space-y-10 justify-between items-center space-x-[30px] w-8/12'>


          <div className='flex flex-col justify-start items-start mx-5 space-y-7'>
            <img className='w-5/12 min-w-[150px]' alt='..' src='https://ftr.imgix.net/5vtGHt7FfNFaahUXC9v1C5/9f772cc812726808eeb288fc3cc2144c/home-24-hour-support.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=720&s=46bfee6b45b28559409b0a374d15acc8' />
            <p className='text-[2rem] text-center'>Live, 24-hour customer support</p>
            <p className='text-sx'>Real support from real people. We’re available through instant live chat and email to help you set up and troubleshoot.</p>
            <button className='whitespace-nowrap bg-[#0f866c] hover:bg-yellow-500 mt-2 text-white rounded-full px-10 py-3 font-semibold text-xl hover:text-black'>Contact Support</button>
          </div>

          <div className="vl xs:hidden sm:hidden"></div>
          <div className="vh md:hidden lg:hidden xl:hidden"> <hr/></div>


          <div className='flex  flex-col justify-start items-start mx-5 space-y-7'>
            <img className='w-5/12 min-w-[150px]' alt='..' src='https://ftr.imgix.net/2W2x9qsd1l0T7GbOMxJt3m/466df18d330d5b75cb718395e82a1da7/home-30-days-money-back-guarantee.png?auto=format%2Ccompress&cs=srgb&fit=max&q=60&w=720&s=53c1b664dda7a4879d7ea864e0127b7a' />
            <p className='text-[2rem] text-center'>Live, 24-hour customer support</p>
            <p className='text-sx'>Real support from real people. We’re available through instant live chat and email to help you set up and troubleshoot.</p>
            <button className='whitespace-nowrap bg-[#0f866c] hover:bg-yellow-500 mt-2 text-white rounded-full px-10 py-3 font-semibold text-xl hover:text-black'>Get ExpressVPN</button>
          </div>

        </div>
      </div>


      <div className=" w-full  text-white bg-cover  bg-[#001d2f] mt-[150px] ">

        <div className=' flex justify-center items-center flex-wrap mt space-x-[100px] '>


          <div className="mt-[50px] flex flex-col space-y-4" >
            <p className='text-xl '>Products</p>

             <p className='hover:text-yellow-400 text-white '>Aircove</p>
             <p className='hover:text-yellow-400 text-white '>Mac VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN for PC</p>
             <p className='hover:text-yellow-400 text-white '>iPhone VPN</p>
             <p className='hover:text-yellow-400 text-white '>Android VPN</p>
             <p className='hover:text-yellow-400 text-white '>Linux VPN</p>
             <p className='hover:text-yellow-400 text-white '>Router VPN</p>
          
             <p className='hover:text-yellow-400 text-white '>VPN Server Locations</p>
             <p className='hover:text-yellow-400 text-white '>Lightway VPN Protocol</p>
             <p className='hover:text-yellow-400 text-white '>Buy VPN</p>
             <p className='hover:text-yellow-400 text-white '>Black Friday VPN</p>

          </div>
          <div className="mt-[50px] flex flex-col space-y-4" >
            <p className='text-xl '>Learn More</p>

             <p className='hover:text-yellow-400 text-white '>Aircove</p>
             <p className='hover:text-yellow-400 text-white '>Mac VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN for PC</p>
            
             <p className='hover:text-yellow-400 text-white '>Router VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN Chrome Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Firefox Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Edge Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Server Locations</p>
             <p className='hover:text-yellow-400 text-white '>Lightway VPN Protocol</p>
             <p className='hover:text-yellow-400 text-white '>Buy VPN</p>
             <p className='hover:text-yellow-400 text-white '>Black Friday VPN</p>

          </div>
          <div className="mt-[50px] flex flex-col space-y-4" >
            <p className='text-xl '>Tools</p>

             <p className='hover:text-yellow-400 text-white '>Aircove</p>
             <p className='hover:text-yellow-400 text-white '>Mac VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN for PC</p>
             <p className='hover:text-yellow-400 text-white '>iPhone VPN</p>
             <p className='hover:text-yellow-400 text-white '>Android VPN</p>
             <p className='hover:text-yellow-400 text-white '>Linux VPN</p>
             <p className='hover:text-yellow-400 text-white '>Router VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN Chrome Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Firefox Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Edge Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Server Locations</p>
            

          </div>
          <div className="mt-[50px] flex flex-col space-y-4" >
            <p className='text-xl '>About ExpressVPN</p>

             <p className='hover:text-yellow-400 text-white '>Aircove</p>
             
             <p className='hover:text-yellow-400 text-white '>Linux VPN</p>
             <p className='hover:text-yellow-400 text-white '>Router VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN Chrome Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Firefox Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Edge Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Server Locations</p>
             <p className='hover:text-yellow-400 text-white '>Lightway VPN Protocol</p>
             <p className='hover:text-yellow-400 text-white '>Buy VPN</p>
             <p className='hover:text-yellow-400 text-white '>Black Friday VPN</p>

          </div>

          <div className="mt-[50px] flex flex-col space-y-4" >
            <p className='text-xl '>Help</p>

             <p className='hover:text-yellow-400 text-white '>Aircove</p>
             <p className='hover:text-yellow-400 text-white '>Mac VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN for PC</p>
             <p className='hover:text-yellow-400 text-white '>iPhone VPN</p>
             <p className='hover:text-yellow-400 text-white '>Android VPN</p>
             <p className='hover:text-yellow-400 text-white '>Linux VPN</p>
             <p className='hover:text-yellow-400 text-white '>Router VPN</p>
             <p className='hover:text-yellow-400 text-white '>VPN Chrome Extension</p>
             <p className='hover:text-yellow-400 text-white '>VPN Firefox Extension</p>
             
             <p className='hover:text-yellow-400 text-white '>Buy VPN</p>
             <p className='hover:text-yellow-400 text-white '>Black Friday VPN</p>

          </div>

          
        </div>
      </div>


    </div></>
  )
}

export default Home
