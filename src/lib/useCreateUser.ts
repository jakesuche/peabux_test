
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { AxiosError } from "axios";
import http from "./service";
import { FormDataProps } from "utils/schema";



export type ResponseError = AxiosError & {
  response: {
    data: any;
  };
};

const createFunc = async (data: FormDataProps): Promise<any> => {
  const response = await http.post('/createUser', data);
  return response.data.data;
};

const useCreateUser = () => {
 
  const queryClient = useQueryClient();

  return useMutation((data: FormDataProps) => createFunc(data), {
    mutationKey: ["CREATE_USER"],
    onSuccess: (data) => {
      queryClient.invalidateQueries(["GET_USERS"]);
    },
    onError: (error: ResponseError) => {},
  });
};

export default useCreateUser;
