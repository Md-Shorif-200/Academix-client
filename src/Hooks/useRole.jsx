
import useAxiosSecure from './useAxiosSecure';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';


const useRole = () => {
     const axiosSecure = useAxiosSecure();
     const {user} = useAuth();


     const {data : role,refetch,isLoading} = useQuery({
        queryKey : ['role',user?.email],
        queryFn : async () => {
             const {data} = await axiosSecure.get(`/users/role/${user.email}`);
              
              return data.role
        }
     })
 
       
     return [role,isLoading]

};

export default useRole;