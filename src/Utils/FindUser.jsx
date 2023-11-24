import { useContext } from "react";
import useAllUser from "../Hooks/useAllUser";
import { AuthContext } from "../Provider/AuthProvider";


export const FindUser=()=>{
    const {user,loading}=useContext(AuthContext);
    // console.log(user);  

    const [allUsers,allUsersLoading,refetch]=useAllUser();
    // console.log(allUsers);
    if(allUsersLoading){
        return <span className="loading loading-spinner text-secondary"></span>;
    }
    if(loading){
        return <span className="loading loading-spinner text-secondary"></span>;
    }


    const findUser=allUsers?.find(data=>data.email=== user.email)
    // console.log(findUser);
    const userRole=findUser.role;
    // console.log(userRole);
    return [findUser,userRole];
}