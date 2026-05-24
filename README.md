# vidyasofficiall — Portfolio

**Dream. Draw. Develop.**

A full-stack MERN portfolio with a dynamic timeline, dark/light mode, admin panel, contact form, and more.

## 🚀 Features

- **Timeline path** — visual journey with clickable dots and modals
- **Dynamic admin** — add/edit/delete timeline items at `/admin`
- **Dark/Light mode** — toggle with persistence
- **Contact form** — sends email via Nodemailer
- **GitHub stats** — live stats from GitHub API
- **Services section** — freelance offerings
- **Life section** — art, guitar, writing
- **Testimonials** — client/mentee feedback
- **Resume download** — direct PDF link

## 🛠 Stack

- **Frontend:** React 18, Vite, React Router, Framer Motion
- **Backend:** Node.js, Express, MongoDB, Mongoose
- **Auth:** JWT (admin panel)
- **Email:** Nodemailer + Gmail

## 🏃 Local Setup

```bash
# Install everything
npm install
npm run install:all

# Add server env
cp server/.env.example server/.env
# Fill in your values

# Add client env
echo "VITE_API_URL=" > client/.env

# Run both
npm run dev
```

## 🔑 Environment Variables

### `server/.env`

```
MONGO_URI=mongodb+srv://...
JWT_SECRET=any_random_string
ADMIN_PASSWORD_HASH=bcrypt_hash_of_your_password
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_gmail_app_password
PORT=5000
```

### Generate your admin password hash:
```bash
node -e "const b=require('bcryptjs');b.hash('yourpassword',10).then(console.log)"
```

## 🌐 Deploy

### Backend → Render Web Service
- Root: `server`
- Build: `npm install`
- Start: `node index.js`
- Add all env vars

### Frontend → Render Static Site
- Root: `client`
- Build: `npm install && npm run build`
- Publish: `dist`
- Env: `VITE_API_URL=https://your-backend.onrender.com`

## 📝 Admin Panel

Go to `/admin` → enter your password → add/edit/delete timeline items with:
- Type (experience, project, certification, achievement, blog, event)
- Title, description, date
- Image URL, link, tags
- Featured flag
