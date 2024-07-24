import ConnectToDatabase from "@/db/database";
import UserModel from "@/models/User";
import { NextResponse } from "next/server";
const bcrypt = require("bcrypt");

export const POST = async(req,res)=>{
    try{
        const data =await req.json();
        console.log(data);
        await ConnectToDatabase();
        const findeEmail= await UserModel.findOne({email: data.email});

        if(!findeEmail){
            return NextResponse.json({message: 'Email not found'},{status: 404});
        }
        const match = await bcrypt.compare(data.password, findeEmail.password);
        if(!match){
            return NextResponse.json({message: 'Password is incorrect'},{status: 401});
        }
        return NextResponse.json({success:true},{status: 200});
    }catch(e){
        console.log(e);
        return NextResponse.json({message: 'Something went wrong'},{status: 500});
    }
}