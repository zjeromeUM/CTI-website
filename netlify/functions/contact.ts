import type { Handler } from "@netlify/functions";

export const handler: Handler = async (event) => {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405 };
  }

  const data = JSON.parse(event.body || "{}");

  console.log("Contact submission:", data);

  // OPTIONAL: send email here (Resend, SendGrid, etc.)

  return {
    statusCode: 200,
    body: JSON.stringify({ success: true }),
  };
};
