import { NextRequest, NextResponse } from "next/server";
import { SendMail } from "@/app/utils/nodemailer";
import pool from "@/lib/db";


export async function POST(req: NextRequest) {
  try {
    const { name, mail, msg } = await req.json();

    if (!mail || !msg) {
      return NextResponse.json(
        { success: false, msg: "Params are missing" },
        { status: 400 }
      );
    }
    const request = await pool.query(`
      insert into portfolio_contact(name,mail,message) 
      values($1, $2, $3);`
      , [name, mail, msg])


    const info = await SendMail(name, mail, msg);

    console.log("Mail Info:", info);

    return NextResponse.json({
      success: true,
      msg: "Mail sent successfully",
    });

  } catch (error: any) {
    console.log("error", error);

    return NextResponse.json(
      {
        success: false,
        msg: error?.message || "Something went wrong",
      },
      { status: 500 }
    );
  }
}