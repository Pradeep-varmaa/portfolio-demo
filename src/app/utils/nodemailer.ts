import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.Email_id,
        pass: process.env.Email_pass
    },
    tls: {
        rejectUnauthorized: false,
    },
})

export async function SendMail( name :string, to_mail:string ,message:string ) {

    const org_date = new Date()
    const date = org_date.toLocaleString('en-US',{
        year : 'numeric',
        month:'short', 
        day :'2-digit',
        hour : '2-digit',
        minute :'2-digit',
        
    })

    const Html = `
    <!DOCTYPE html>

<html>
<head>
<meta charset="UTF-8" />
<title>New Portfolio Message</title>

<style>
  body {
    background-color: #f2f2f2;
    font-family: Arial, Helvetica, sans-serif;
  }

  .wrapper {
    max-width: 650px;
    margin: 20px auto;
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
  }

  .header {
    background: #0a66c2;
    color: white;
    text-align: center;
    padding: 18px;
  }

  .content {
    padding: 20px;
    color: #333;
    line-height: 1.6;
  }

  .field {
    background: #f7f9fc;
    padding: 10px;
    border-radius: 6px;
    margin-bottom: 10px;
  }

  .label {
    font-weight: bold;
    color: #0a66c2;
  }

  .footer {
    text-align: center;
    font-size: 12px;
    color: #777;
    padding: 10px;
  }
</style>

</head>

<body>

<div class="wrapper">

  <div class="header">
    <h2>📩 New Message from Portfolio</h2>
  </div>

  <div class="content">

<p>Hello Pradeep,</p>

<p>You have received a new message from your personal portfolio contact form.</p>

<div class="field">
  <span class="label">Name:</span><br/>
  ${name}
</div>

<div class="field">
  <span class="label">Email:</span><br/>
  ${to_mail}
</div>

<div class="field">
  <span class="label">Message:</span><br/>
  ${message}
</div>

<p>Received on: ${date}</p>


  </div>

  <div class="footer">
    This email was generated from your portfolio website contact form.
  </div>

</div>

</body>
</html>

    `

    const option = {
        from :`From Varmatec.in <${process.env.Email_id}>`,
        to : "ppvarma07@gmail.com" ,
        subject :  "A Visitor Wants to Connect with You",
        html :Html
    }

    // console.log("Mails are sent",to_mail, message)

    const info = transport.sendMail(option)
    console.log(info)
    return NextResponse.json({success : true , msg : (await info).response})
    
}