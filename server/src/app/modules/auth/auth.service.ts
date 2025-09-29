import { prisma } from "../../../config/db"
import  bcrypt  from 'bcrypt';


const loginUserDB = async ({email, password}: {email:string, password:string}) =>{
  
   
    const user = await prisma.user.findUnique({
        where : {
            email
        }
    })

    if(!user){
        throw new Error("User not Found")
    }

    const isUserPassword = await bcrypt.compare(password, user.password);
    if(!isUserPassword){
        throw new Error("Invalid creadentials")
    }
    

    return user
}


export const AuthService = {
    loginUserDB
}