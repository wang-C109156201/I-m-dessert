import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query'
import { useDispatch } from "react-redux";
// import { setUser } from '../redux/usersSlice';
import { 
  getProductById, 
  getProducts, 
  getProductsByCategory,
  updateProductInFirestore,
  login,
  register,
  getUserInfo,
  updateUserInfo,
  logout,
  // signInWithEmailPassword,
  // registerWithEmailPassword
} from "../api";

export const useProducts = () => {
   const { data, isLoading } = useQuery([], getProducts);
   return { data, isLoading };
 };
 
 
 export const useProductsByCategory = (category) => {
    const { data, isLoading } = useQuery([category], getProductsByCategory);
    return { data, isLoading };
  };
 
  export const useProductById = (productId) => {
    const { data, isLoading } = useQuery([productId], getProductById);
    return { data, isLoading };
  };

  export const updateProducts = (productId) => {
    const { data, isLoading } = useQuery([productId], updateProductInFirestore);
    return { data, isLoading };
  };

  // export const useUserInfo = () => {
  //   return useQuery({
  //     queryKey: ["uid"],
  //     queryFn: getUserInfo,
  //     initialData: {},
  //   });
  // };
  // export const useSignInWithEmailPassword = () => {
  //   const dispatch = useDispatch();
  //   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(signInWithEmailPassword, {
  //      onSuccess: (data) =>{
  //       console.log({data})
  //       dispatch(setUser(data))}
  //   });
  //   return { mutate, isLoading, isSuccess, isError, data, error, status };
  // }
  
  // export const useRegisterWithEmailPassword = () => {
  //   const dispatch = useDispatch();
  //   const { mutate, isLoading, isSuccess, isError, data, error, status } = useMutation(registerWithEmailPassword, {
  //      onSuccess: (data) => dispatch(setUser(data))
  //   });
  //   return { mutate, isLoading, isSuccess, isError, data, error, status };
  // }
  export const useUserInfo = () => {
    const userInfo = useQuery({
      queryKey: ["uid"],
      queryFn: getUserInfo,
      initialData: {},
    });
    console.log(userInfo?.data, 'useUserInfo')
    return userInfo
  };
  
  export const useSignInWithEmailPassword = () => {
    const queryClient = useQueryClient();
    return useMutation(login, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useRegisterWithEmailPassword = () => {
    const queryClient = useQueryClient();
    return useMutation(register, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useUpdateProfile = () => {
    const queryClient = useQueryClient();
    return useMutation(updateUserInfo, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };
  
  export const useLogout = () => {
    const queryClient = useQueryClient();
    return useMutation(logout, {
      onSuccess: () => {
        queryClient.invalidateQueries(["uid"]);
      },
    });
  };