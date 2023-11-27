import { User } from "../types/User";


const BASE_URL_USERS ="http://localhost:3000/users"; 


//const BASE_URL ="https://backend-taskapp-oftb.onrender.com/users"; 

export const LoginService ={
    
    //Obtener todos los usuarios
        getAllUsers: async (): Promise<User[]>=>{
            const response = await fetch(`${BASE_URL_USERS}`);
            const data = await response.json();
            return data;
        },

    //Obtener un usuario por id
        getOneUser: async (id:number): Promise<User>=>{
            const response = await fetch(`${BASE_URL_USERS}/${id}`);
            const data = await response.json();
            return data;
        },  
        
    //Obtener un usuario por email
    getTasksInCategory: async (email:string): Promise<User[]> =>{
        const response = await fetch(`${BASE_URL_USERS}?estado=${email}`);
        const data = await response.json();
        return data
    },  
    
    // Autenticar usuario
    authenticateUser: async (email: string, password: string): Promise<boolean> => {
        // comparar email y password con los usuarios en el backend
        const users = await LoginService.getAllUsers();
        const authenticatedUser = users.find(user => user.email === email && user.password === password);
        // Devolver true si el usuario está autenticado, de lo contrario, false
        return !!authenticatedUser;
    },

    
}