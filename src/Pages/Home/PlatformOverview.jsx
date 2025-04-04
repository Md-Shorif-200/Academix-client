import React, { useEffect, useState } from 'react';
import SectionTitle from '../../Common/SectionTitle';
import overviewImg  from '../../assets/Overview/telework-6795505_640.jpg'
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useClass from '../../Hooks/useClass';
import usePayments from '../../Hooks/usePayments';
import Loading from '../../Common/Loading';

const PlatformOverview = () => {

        const [totalUsers,setTotalUsers ] = useState([])
      const axiosSecure = useAxiosSecure();
      const [classes] = useClass();  // get all classes
      const [payments,refetch,isLoading] = usePayments(); // get all enrollments
      

      if(isLoading){
        return <Loading></Loading>
      }



            axiosSecure.get('/users') // get all users
            .then(response => {
                  setTotalUsers(response.data)
                  refetch()
            })
            .catch(error => {
                 console.log(error);
                 
            })


    return (
        <div>

              <SectionTitle title={'our overview'}></SectionTitle>

               <div className='overview_container  w-full grid grid-cols-1 sm:grid-cols-2 gap-6 my-14'>
                        <div className="left_side">
                              <div className="overview_cards grid grid-cols-2 gap-4">
                                        <div className="total_users w-full col-span-2 md:col-span-1">
                                        <div className="card  text-center w-full h-[150px]   shadow-sm">
  <div className="card-body text-center">
    <h2 className=" text-lg font-bold capitalize mb-2"> total users</h2>
                <h1 className='text-3xl font-semibold'>  {totalUsers.length} </h1>
  </div>
</div>
                                        </div>
                                        <div className="total_classes w-full col-span-2 md:col-span-1">
                                        <div className="card   text-center  w-full h-[150px]  shadow-sm">
  <div className="card-body text-center">
    <h2 className=" text-lg font-bold capitalize mb-2"> total classes</h2>
    <h1 className='text-3xl font-semibold'>  {classes.length} </h1>
    </div>
  </div>
                                        </div>
                                        <div className="total_students w-full_enrollmen  grid col-span-2">
                                        <div className="card   text-center  w-full h-[150px]  sadow-sm">
  <div className="card-body text-center">
    <h2 className=" text-lg font-bold capitalize mb-2"> total enrollments</h2>
    <h1 className='text-3xl font-semibold'>  {payments.length} </h1>
    </div>
  </div>
                                        </div>
                              </div>
                        </div>

                        <div className="right_side">
                            <img src={overviewImg} className='w-full h-[315px]' alt="" />
                        </div>
                        
               </div>
            
        </div>
    );
};

export default PlatformOverview;