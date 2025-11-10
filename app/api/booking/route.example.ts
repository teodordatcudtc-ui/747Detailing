/**
 * EXEMPLU: API Route pentru trimitere email booking
 * 
 * INSTRUCȚIUNI:
 * 1. Redenumește acest fișier în route.ts
 * 2. Instalează dependențele necesare (vezi mai jos)
 * 3. Configurează variabilele de mediu în .env.local
 * 4. De-comentează codul din BookingForm.tsx pentru a folosi API-ul real
 */

import { NextRequest, NextResponse } from 'next/server'

// OPCIUNEA 1: Nodemailer (Gmail, SMTP)
// npm install nodemailer
// npm install --save-dev @types/nodemailer
/*
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    // Configurare transporter
    const transporter = nodemailer.createTransport({
      service: 'gmail', // sau alt serviciu SMTP
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS, // App Password pentru Gmail
      },
    })

    // Trimite email către tine
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'contact@747detailingclub.ro',
      replyTo: data.email,
      subject: `Programare nouă - ${data.name}`,
      html: `
        <h2>Programare nouă de la 747 Detailing Club</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Serviciu:</strong> ${data.service}</p>
        <p><strong>Dată preferată:</strong> ${data.date || 'Nespecificată'}</p>
        <p><strong>Interval orar:</strong> ${data.time || 'Nespecificat'}</p>
        <p><strong>Observații:</strong></p>
        <p>${data.notes || 'Fără observații'}</p>
        <hr>
        <p><small>Trimis la: ${new Date().toLocaleString('ro-RO')}</small></p>
      `,
      text: `
        Programare nouă de la 747 Detailing Club
        
        Nume: ${data.name}
        Telefon: ${data.phone}
        Email: ${data.email}
        Serviciu: ${data.service}
        Dată preferată: ${data.date || 'Nespecificată'}
        Interval orar: ${data.time || 'Nespecificat'}
        Observații: ${data.notes || 'Fără observații'}
      `,
    })

    // Email de confirmare către client (opțional)
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Confirmare programare - 747 Detailing Club',
      html: `
        <h2>Mulțumim pentru programare!</h2>
        <p>Bună ${data.name},</p>
        <p>Am primit solicitarea ta pentru serviciul <strong>${data.service}</strong>.</p>
        <p>Te vom contacta în cel mai scurt timp la numărul ${data.phone} pentru a confirma programarea.</p>
        <p>Dacă ai întrebări, ne poți contacta la:</p>
        <ul>
          <li>Telefon: 0745 313 747</li>
          <li>Email: contact@747detailingclub.ro</li>
        </ul>
        <p>Cu respect,<br>Echipa 747 Detailing Club</p>
      `,
    })

    return NextResponse.json({ success: true, message: 'Email trimis cu succes' })
  } catch (error) {
    console.error('Eroare trimitere email:', error)
    return NextResponse.json(
      { success: false, message: 'Eroare la trimiterea email-ului' },
      { status: 500 }
    )
  }
}
*/

// OPCIUNEA 2: Resend (Recomandat - mai simplu)
// npm install resend
/*
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    await resend.emails.send({
      from: '747 Detailing Club <noreply@747detailingclub.ro>',
      to: process.env.EMAIL_TO || 'contact@747detailingclub.ro',
      replyTo: data.email,
      subject: `Programare nouă - ${data.name}`,
      html: `
        <h2>Programare nouă</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Serviciu:</strong> ${data.service}</p>
        <p><strong>Dată:</strong> ${data.date || 'Nespecificată'}</p>
        <p><strong>Interval:</strong> ${data.time || 'Nespecificat'}</p>
        <p><strong>Observații:</strong> ${data.notes || 'Fără observații'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
*/

// OPCIUNEA 3: SendGrid
// npm install @sendgrid/mail
/*
import sgMail from '@sendgrid/mail'

sgMail.setApiKey(process.env.SENDGRID_API_KEY!)

export async function POST(request: NextRequest) {
  try {
    const data = await request.json()

    await sgMail.send({
      to: process.env.EMAIL_TO || 'contact@747detailingclub.ro',
      from: process.env.EMAIL_FROM || 'noreply@747detailingclub.ro',
      replyTo: data.email,
      subject: `Programare nouă - ${data.name}`,
      html: `
        <h2>Programare nouă</h2>
        <p><strong>Nume:</strong> ${data.name}</p>
        <p><strong>Telefon:</strong> ${data.phone}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Serviciu:</strong> ${data.service}</p>
        <p><strong>Dată:</strong> ${data.date || 'Nespecificată'}</p>
        <p><strong>Interval:</strong> ${data.time || 'Nespecificat'}</p>
        <p><strong>Observații:</strong> ${data.notes || 'Fără observații'}</p>
      `,
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    return NextResponse.json({ success: false }, { status: 500 })
  }
}
*/

// Placeholder pentru a evita erori
export async function POST(request: NextRequest) {
  return NextResponse.json(
    { message: 'API route nu este configurat. Vezi app/api/booking/route.example.ts pentru instrucțiuni.' },
    { status: 501 }
  )
}

