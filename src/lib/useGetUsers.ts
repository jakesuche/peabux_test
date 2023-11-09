import { useQuery } from "@tanstack/react-query";
import http from "./service";
import { FormDataProps } from "utils/schema";


// eslint-disable-next-line  @typescript-eslint/no-unused-vars
export const GetAll = async <T>(): Promise<{message:string,data:FormDataProps[]}> => {
  const response = await http.get('/getUser');
  return response.data;
};

/**
 * params for useAllFetch
 *
 * @param {string} url url of the action
 * @param {string} date The query of the query
 * @param {(callback)} callback call back function after a succesfull return
 * @param {number | string} page page number for a endpoint that has pagination
 */

const useGetUsers = <T>(
) => {
  return useQuery(["GET_USERS"], () => GetAll<T>(), {
    keepPreviousData: true,
  });
};

export default useGetUsers;
