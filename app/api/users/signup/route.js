import { NextResponse } from "next/server";
import ConnectToDatabase from "@/db/database";
import UserModel from "@/models/User";
const bcrypt = require('bcrypt');
const saltRounds = 10;

export const POST=async(req ,res)=>{
    try{
        const data= await req.json();
        // console.log(data);  
        await ConnectToDatabase();
        const emailCheck=await  UserModel.findOne({email:data.email});
        if(emailCheck){
            return NextResponse.json({message:'Email already exists'},{status:400})
        }

        const password= await bcrypt.hash(data.password, saltRounds);
        console.log(password);

        const UserData= new UserModel({
          name:data.name,
          email:data.email,
          password:password,
        })
        await UserData.save();      
        return NextResponse.json({message:'success'},{status:200})

    }catch(e){
        console.log(e)
        return NextResponse.json({message:'Something went wrong'},{status:500})
    }
   
}