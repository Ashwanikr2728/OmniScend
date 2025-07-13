# 🚀 Omniscend — From Passion to Profession

**Omniscend** is a modern Learning Management System (LMS) built to elevate how the world learns.  
Derived from “Omni” (everything) and “Ascend” (rise), **Omniscend** means _“Everything Elevate”_ — and that’s exactly what we aim to do.

> 🌍 Connect with the world  
> 🎯 From Passion to Profession

---

## ✨ Key Features

- 📚 Create, publish, and enroll in video courses
- 🔐 **BetterAuth** for authentication (Email-based OTP verification)
- 💳 Course payments via **Stripe**
- 📩 Transactional email delivery using **Resend**
- 🛡️ Bot protection and secure requests via **Arcjet**
- 🌙 Fully responsive with light/dark mode support
- 🤖 **AI Chatbot** — *in progress*
- 📞 **OmniMeet Integration** — *video calling in progress*

---

## 🔧 Tech Stack

| Layer        | Stack                                       |
|--------------|----------------------------------------------|
| Frontend     | Next.js (App Router, TypeScript)             |
| Styling      | Tailwind CSS + ShadCN UI                     |
| State Mgmt   | Zustand                                      |
| Backend      | Prisma + Neon (PostgreSQL) via **Tigris**    |
| Auth         | **BetterAuth** (custom + secure OTP login)   |
| Emails       | Resend                                       |
| Payments     | Stripe                                       |
| Security     | Arcjet                                       |
| Video Calls  | OmniMeet (custom WebRTC setup)               |

---

## 🛠 Getting Started

```bash
# 1. Clone the project
git clone https://github.com/your-username/omniscend.git
cd omniscend

# 2. Install dependencies
npm install

# 3. Setup environment
cp .env.example .env.local
# Fill in:
# - Neon DB URL (via Tigris)
# - Stripe keys
# - Resend API key
# - Arcjet secret
# - BetterAuth secrets

# 4. Push schema to Neon DB
npx prisma db push

# 5. Run the app
npm run dev
