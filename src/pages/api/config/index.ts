import type { APIRoute } from "astro";

export const prerender = false; // Force this to be a server endpoint

export const GET: APIRoute = async () => {
  try {
    // Dynamic import to avoid build-time issues
    const { app } = await import("../../../firebase/server");
    const { getFirestore } = await import("firebase-admin/firestore");
    
    const db = getFirestore(app);
    const configRef = db.collection("config").doc("website-config");
    const doc = await configRef.get();

    if (!doc.exists) {
      return new Response(JSON.stringify({ 
        preLaunch: true // Default to pre-launch if config doesn't exist
      }), {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      });
    }

    const data = doc.data();
    return new Response(JSON.stringify({ 
      preLaunch: data?.preLaunch ?? true,
      message: data?.message || null
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error fetching config:", error);
    return new Response(JSON.stringify({ 
      preLaunch: true // Fallback to pre-launch on error
    }), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};