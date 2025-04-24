# 🎉 Festivo - Event Management Web App

Festivo is a modern event planning and management platform built for flexibility and ease. Whether it's a wedding, birthday, college fest, or house event – Festivo allows users to customize services, select vendors, and manage event details all in one place.

## 🚀 Live Demo

Check it out live: [https://mitshack.vercel.app](https://mitshack.vercel.app)

---

## 📌 Features

- 🌟 **Multi-Event Support** – Weddings, Birthdays, College Fests, House Events, etc.
- 🛠️ **Service & Vendor Selection** – Choose from services like Venues, Photographers, DJs, Makeup Artists, etc.
- 💰 **Dynamic Cost Calculation** – Select vendor tiers (Low / Medium / High) with real-time cost updates.
- 🧾 **Payment Preview** – Final event summary and cost review before confirmation.
- 🔐 **User** – Separate dashboards for users and admin.
- 📜 **Admin Panel** – View and manage all registered users and their bookings.
- ⚡ **Fast UI** – Built with Vite + React and styled using Tailwind CSS.

---

## 🧱 Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- React Router DOM

**Backend:**
- Node.js
- Express.js

**Database:**
- MongoDB (Mongoose)

**Deployment:**
- Vercel (Frontend)
- Render 

---

## 🖥️ Pages

| Page              | Description                                              |
|-------------------|----------------------------------------------------------|
| `/`               | Landing Page with Intro to Festivo                      |
| `/wedding-event`  | Customize wedding event services                        |
| `/birthday-event` | Birthday service selection and package customization    |
| `/college-event`   | Plan college fests with service bundles                 |
| `/house-event`    | House party or ritual planning                          |
| `/payment`        | Review all selected services and total cost             |
| `/admin`          | Admin dashboard to list all users                       |
| `/login`, `/signup` | Authentication for users                             |

---

## 📂 Folder Structure

```bash
eventorg/
├── backend/
│   ├── models/
│   ├── routes/
│   ├── controllers/
│   └── server.js
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── pages/
│   │   ├── components/
│   │   └── App.jsx
└── README.md

**Backend:**
#Admin panel
