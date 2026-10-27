import { NextRequest, NextResponse } from "next/server";

// Server-side In-Memory Rate Limiting: max 5 requests per 10 minutes per IP
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(req: NextRequest) {
  try {
    const forwarded = req.headers.get("x-forwarded-for");
    const ip = forwarded ? forwarded.split(",")[0].trim() : "127.0.0.1";
    const now = Date.now();

    const clientRate = rateLimitMap.get(ip);
    if (clientRate) {
      if (now > clientRate.resetTime) {
        rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (clientRate.count >= MAX_REQUESTS_PER_WINDOW) {
        return NextResponse.json(
          {
            success: false,
            message: "Too many requests. Please wait a few minutes before trying again.",
          },
          { status: 429 }
        );
      } else {
        clientRate.count += 1;
      }
    } else {
      rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    const body = await req.json().catch(() => null);
    if (!body || typeof body !== "object") {
      return NextResponse.json(
        { success: false, message: "Invalid request format." },
        { status: 400 }
      );
    }

    const { name, email, message, honeypot } = body;

    // Spam honeypot
    if (honeypot && typeof honeypot === "string" && honeypot.trim().length > 0) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
    }

    // 1. Name validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Please enter your name." }, { status: 400 });
    }
    const trimmedName = name.trim();
    if (trimmedName.length < 2) {
      return NextResponse.json({ success: false, message: "Name must be at least 2 characters long." }, { status: 400 });
    }
    if (trimmedName.length > 60) {
      return NextResponse.json({ success: false, message: "Name cannot exceed 60 characters." }, { status: 400 });
    }
    // Allow letters, spaces, hyphens, apostrophes, dots and international characters
    const validNamePattern = /^[a-zA-Z\u00C0-\u024F\u0400-\u04FF\u0600-\u06FF\s'\-\.]+$/;
    if (!validNamePattern.test(trimmedName) || /^[\s0-9!@#$%^&*()_+=\[\]{};:"\\|,.<>\/?-]+$/.test(trimmedName)) {
      return NextResponse.json({ success: false, message: "Please enter a valid name." }, { status: 400 });
    }

    // 2. Email validation
    if (!email || typeof email !== "string" || email.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Please enter your email address." }, { status: 400 });
    }
    const trimmedEmail = email.trim().toLowerCase();
    const emailRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)+$/;
    if (!emailRegex.test(trimmedEmail) || trimmedEmail.includes(" ") || trimmedEmail.includes(",")) {
      return NextResponse.json({ success: false, message: "Please enter a valid email address." }, { status: 400 });
    }

    // Disposable/fake/dummy spam domains
    const domain = trimmedEmail.split("@")[1]?.toLowerCase();
    const blockedKeywords = [
      "fake", "dummy", "test", "spam", "temp", "trash", "throwaway", "disposable",
      "mailinator", "yopmail", "guerrillamail", "10minutemail", "sharklasers"
    ];
    if (domain && blockedKeywords.some((keyword) => domain.includes(keyword))) {
      return NextResponse.json(
        { success: false, message: "Please use a real, verified email address." },
        { status: 400 }
      );
    }

    // 3. Message validation
    if (!message || typeof message !== "string" || message.trim().length === 0) {
      return NextResponse.json({ success: false, message: "Please enter your message." }, { status: 400 });
    }
    const trimmedMessage = message.trim();
    if (trimmedMessage.length < 10) {
      return NextResponse.json({ success: false, message: "Your message must contain at least 10 characters." }, { status: 400 });
    }
    if (trimmedMessage.length > 2000) {
      return NextResponse.json({ success: false, message: "Your message cannot exceed 2000 characters." }, { status: 400 });
    }

    // 4. Send via Web3Forms
    const web3formsAccessKey = process.env.WEB3FORMS_ACCESS_KEY || "026ca16e-8058-40ff-81e5-9e98a254a2de";

    const payload = {
      access_key: web3formsAccessKey,
      subject: `Portfolio Inquiry from ${escapeHtml(trimmedName)}`,
      from_name: escapeHtml(trimmedName),
      replyto: trimmedEmail,
      message: `Name: ${trimmedName}\nEmail: ${trimmedEmail}\n\nMessage:\n${trimmedMessage}`,
      botcheck: false,
    };

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify(payload),
    });

    const result = await response.json().catch(() => null);

    if (response.ok && result?.success) {
      return NextResponse.json({
        success: true,
        message: "Thank you! Your message has been sent successfully. I will get back to you shortly.",
      });
    }

    return NextResponse.json(
      {
        success: false,
        message: "Sorry, your message could not be sent. Please try again or contact me directly by email.",
      },
      { status: 500 }
    );
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Sorry, your message could not be sent. Please try again or contact me directly by email.",
      },
      { status: 500 }
    );
  }
}
