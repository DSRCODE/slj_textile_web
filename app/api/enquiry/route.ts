import { NextRequest, NextResponse } from "next/server";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";
import nodemailer from "nodemailer";

export const runtime = "nodejs";

interface EnquiryData {
  name: string;
  email: string;
  contact: string;
  address: string;
  city: string;
  state: string;
  product: { name: string; categoryName: string };
}

export async function POST(request: NextRequest) {
  try {
    const data: EnquiryData = await request.json();

    // 1. Save to Firestore
    const docRef = await addDoc(collection(db, "enquiries"), {
      ...data,
      createdAt: Timestamp.now(),
    });

    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "shubhambagra2002@gmail.com",
        pass: process.env.GMAIL_APP_PASSWORD!,
      },
    });

    const htmlContent = `
  <div style="font-family: Arial, Helvetica, sans-serif; background-color: #f6f6f6; padding: 30px;">
    <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 10px; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.08);">

      <!-- Header -->
      <div style="background-color: #E17100; padding: 25px; text-align: center;">
        
        <h1 style="margin: 0; font-size: 22px; color: #ffffff;">
          New Product Enquiry
        </h1>
        <p style="margin: 6px 0 0; font-size: 14px; color: #fff; opacity: 0.9;">
          SLJ TEXTILES Website
        </p>
      </div>

      <!-- Body -->
      <div style="padding: 30px; color: #333333;">

        <!-- Customer Details -->
        <h3 style="margin-top: 0; color: #E17100; font-size: 16px;">
          👤 Customer Details
        </h3>

        <table width="100%" cellpadding="6" cellspacing="0" style="font-size: 14px;">
          <tr>
            <td width="35%"><strong>Name:</strong></td>
            <td>${data.name}</td>
          </tr>
          <tr>
            <td><strong>Email:</strong></td>
            <td>${data.email || "Not provided"}</td>
          </tr>
          <tr>
            <td><strong>Phone:</strong></td>
            <td>${data.contact}</td>
          </tr>
        </table>

        <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />

        <!-- Address -->
        <h3 style="color: #E17100; font-size: 16px;">
          📍 Address
        </h3>
        <p style="font-size: 14px; line-height: 1.6; margin: 0;">
          ${data.address}<br/>
          ${data.city}, ${data.state}
        </p>

        <hr style="border: none; border-top: 1px solid #eeeeee; margin: 20px 0;" />

        <!-- Product -->
        <div style="background-color: #fff7f0; border-left: 4px solid #E17100; padding: 15px; border-radius: 6px;">
          <h3 style="margin-top: 0; color: #E17100; font-size: 16px;">
            📦 Product Interested
          </h3>
          <p style="margin: 5px 0; font-size: 14px;">
            <strong>${data.product.name}</strong>
          </p>
          <p style="margin: 0; font-size: 14px;">
            Category: ${data.product.categoryName}
          </p>
        </div>

      </div>

      <!-- Footer -->
      <div style="background-color: #fafafa; padding: 18px; text-align: center; font-size: 12px; color: #777777;">
        <p style="margin: 0;">
          This is an automated enquiry notification from<br/>
          <strong style="color: #E17100;">SLJ Textiles</strong>
        </p>
      </div>

    </div>
  </div>
`;

    await transporter.sendMail({
      from: '"SLJ Textiles" <Shubhambagra2002@gmail.com>',
      to: "daljeetkalyanwat62@gmail.com",
      subject: `🛍️ New Enquiry: ${data.product.name} - ${data.name}`,
      html: htmlContent,
    });

    return NextResponse.json({ success: true, id: docRef.id });
  } catch (error: any) {
    console.error("Enquiry failed:", error);
    return NextResponse.json(
      { error: error?.message || error },
      { status: 500 }
    );
  }
}
