# 🚀 Omniscend — From Passion to Profession

**Omniscend** is a next-gen Learning Management System (LMS) designed to elevate how we teach and learn in the digital age.  
The name combines “Omni” (everything) + “Ascend” (rise) — meaning **Everything Elevate**.

> 🌍 Connect with the world  
> 🎯 From Passion to Profession

---

## ✨ Key Features

- 📚 Create, publish, and enroll in video-based courses
- 🔐 Secure OTP login via **BetterAuth**
- 💳 Stripe integration for course purchases
- 📩 Transactional emails via **Resend**
- 🛡️ Bot protection using **Arcjet**
- 🧠 **AI Chatbot** *(in progress)* — for doubt-solving and guidance
- 📞 **OmniMeet** *(integration in progress)* — real-time video calling for live classes
- 🧑‍💼 **Admin Panel** — fully dynamic with real data and a powerful dashboard
- 🧲 **Drag-and-Drop** functionality for intuitive course structuring
- 🎉 **Confetti animations** to celebrate course completions & successful actions
- 🌙 Light/Dark mode support
- 📱 Fully responsive & mobile-ready

---

## 🔧 Tech Stack

| Layer        | Stack                                       |
|--------------|----------------------------------------------|
| Frontend     | Next.js (App Router, TypeScript)             |
| Styling      | Tailwind CSS + ShadCN UI                     |
| State Mgmt   | Zustand                                      |
| Backend      | Prisma + Neon (PostgreSQL) via **Tigris**    |
| Auth         | **BetterAuth** (Custom OTP Authentication)   |
| Payments     | Stripe                                       |
| Emails       | Resend                                       |
| Security     | Arcjet                                       |
| Video Calls  | OmniMeet (WebRTC-based module)               |

---

## 🛠 Getting Started

```bash
# 1. Clone the project
git clone https://github.com/your-username/omniscend.git
cd omniscend

# 2. Install dependencies
npm install

# 3. Create your env file
cp .env.example .env.local
# Fill in DB, Stripe, Resend, Arcjet, BetterAuth secrets

# 4. Push DB schema
npx prisma db push

# 5. Run the app
npm run dev
