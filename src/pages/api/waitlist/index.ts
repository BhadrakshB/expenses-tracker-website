import type { APIRoute } from "astro";
import admin from 'firebase-admin';

if (!admin.apps.length) {
  admin.initializeApp();
}

const db = admin.firestore();

export const GET: APIRoute = async ({ request, redirect }) => {
  const docRef = db.collection('waitlist').doc('waitlist_users');


    try {
      const doc = await docRef.get();
      return new Response(JSON.stringify(doc.data() || {}), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to fetch waitlist' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
}


export const POST: APIRoute = async ({ request, redirect }) => {
  const docRef = db.collection('waitlist').doc('waitlist_users');

  
    const { email } = await request.json();
    if (!email) return new Response(JSON.stringify({ error: 'Email is required' }), {
      status: 400,
      headers: {
        'Content-Type': 'application/json',
      },
    });

    try {
      await docRef.update({
        users: admin.firestore.FieldValue.arrayUnion(email)
      });
      return new Response(JSON.stringify({ success: true }), {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    } catch (error) {
      return new Response(JSON.stringify({ error: 'Failed to update waitlist' }), {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
        },
      });
    }
  
}
