import { useQuery } from "@tanstack/react-query";
import http from "./service";
import { FormDataProps } from "utils/schema";


export const GetAll = async (): Promise<{message:string,data:FormDataProps[]}> => {
  const response = await http.get('/getUser');
  return response.data;
};


const useGetUsers = <T>(
) => {
  return useQuery(["GET_USERS"], () => GetAll(), {
    keepPreviousData: true,
  });
};

export default useGetUsers;
