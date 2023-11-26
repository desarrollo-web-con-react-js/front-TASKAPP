import { User } from "../types/User";


const BASE_URL_USERS ="http://localhost:3000/users"; 


//const BASE_URL ="https://backend-taskapp-oftb.onrender.com/users"; 

export const UserService ={
    
    //Obtener todos los usuarios
        getAllUsers: async (): Promise<User[]>=>{
            const response = await fetch(`${BASE_URL_USERS}`);
            const data = await response.json();
            return data;
        },

    //Obtener un usuario
        getOneUser: async (id:number): Promise<User>=>{
            const response = await fetch(`${BASE_URL_USERS}/${id}`);
            const data = await response.json();
            return data;
        },    

    
}