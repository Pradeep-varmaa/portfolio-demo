import pool from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET() {
    try{

        const request = await pool.query('select * from playing_with_neon')
        const response = await request.rows
        console.log(response)

        return NextResponse.json({success: true, response : response})

    }catch(err){
        console.log(err)
        return NextResponse.json({success: false})
    }
}