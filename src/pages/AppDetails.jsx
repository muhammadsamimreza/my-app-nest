import React from 'react'
import useAppData from '../Hook/useAppData'
import Container from '../components/Container/Container';
import { useParams } from 'react-router';
import downlowdIcon from "../assets/icon-downloads.png"
import ratingsIcon from "../assets/icon-ratings.png"
import reviewIcon from "../assets/icon-review.png"
const AppDetails = () => {
   const {appData}= useAppData()
   const paramId = useParams()
   const appId = Number(paramId.appid)
   
   const findApp = appData.find(app=> app.id === appId) || {}
  
   const {title,image,companyName,downloads,ratingAvg, reviews} = findApp

   

  return (
    <div>
        <Container>
                 <div className="flex flex-col md:flex-row items-center gap-10 md:gap-20 md:my-20 p-3 py-10 md:py-5 bg-base-300 rounded-2xl mt-10">
                          <div className="md:w-78 h-70 bg-gray-300 rounded-2xl">
                            <img
                              className="w-full h-full object-fit rounded-2xl"
                              src={image}
                              alt=""
                            />
                          </div>
                          <div className="w-full space-y-3">
                            <div className="space-y-2 border-b-2  border-gray-300 pb-5">
                              <h1 className="text-xl md:text-3xl font-bold">{title} </h1>
                              <p className="md:text-xl ">
                                <span className="text-gray-400">Develop by:</span>
                                <span className="font-medium bg-[linear-gradient(125.07deg,_rgba(0,128,128,1),_rgba(60,179,113,1)_100%)] text-transparent bg-clip-text">
                                  {" "}
                                  {companyName}
                                </span>
                              </p>
                            </div>
                            <div className="flex items-center gap-12">
                              <div className="flex flex-col">
                                <img className="w-5 md:w-7" src={downlowdIcon} alt="" />
                                <div className="my-2">
                                  <p className="text-[#7f8488] text-xs md:text-sm">Download</p>
                                  <h1 className="text-xl md:text-[27px] font-bold">
                                    {downloads}
                                  </h1>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <img className="w-5 md:w-7" src={ratingsIcon} alt="" />
                                <div className="my-2">
                                  <p className="text-[#7f8488] text-xs md:text-sm">
                                    Average Ratings
                                  </p>
                                  <h1 className="text-xl md:text-[27px] font-bold">
                                    {ratingAvg}
                                  </h1>
                                </div>
                              </div>
                              <div className="flex flex-col">
                                <img className="w-5 md:w-7" src={reviewIcon} alt="" />
                                <div className="my-2">
                                  <p className="text-[#7f8488] text-xs md:text-sm">
                                    Total Review
                                  </p>
                                  <h1 className="text-xl md:text-[27px] font-bold">
                                    {reviews}
                                  </h1>
                                </div>
                              </div>
                            </div>
                            <div>
                             <button className='btn'>Install</button>
                            </div>
                          </div>
                        </div>
        </Container>
    </div>
  )
}

export default AppDetails