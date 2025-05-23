import React from 'react';
import SectionTitle from '../../Common/SectionTitle';
import useClass from '../../Hooks/useClass';

import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';
import ClassUpdateModal from './ClassUpdateModal';
import MyClassCard from './MyClassCard';
import Loading from '../../Common/Loading';

const MyClass = () => {
            const {user}  =  useAuth()
      
             const [classes,refetch,isLoading]= useClass()
           
              
              
             const myClasses = classes.filter(data =>  data?.email == user?.email);
       
             

             if(isLoading){
                 return <Loading></Loading>
             }

    return (
        <div>

              {/* <SectionTitle  title={'my class'}></SectionTitle> */}

              <h1 className="text-2xl font-semibold px-8 mt-14 mb-6">My All Classes </h1>
       
                <div className="my_class_cards grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 md:gap-8 md:p-8 ">
                    {
                        myClasses.map((singleClass,index) => 

                                  <MyClassCard key={index} refetch={refetch} singleClass={singleClass}></MyClassCard>
                          
                        )
                    }
                </div>
        </div>
    );
};

export default MyClass;