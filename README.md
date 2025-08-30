# 📘 EduPath – HIGH School Science Learning Platform  

EduPath is a full-stack **Next.js** web application designed for learning Science in High School level. The platform provides structured **tutorial videos**, **progress tracking**, **MCQ quizzes**, and **personal notes**, helping students prepare effectively for subjects such as Botany, Zoology, Chemistry and Physics.  

---

## 🚀 Live Demo  
🔗 [EduPath Live](https://edupath-learn-science.netlify.app)   
🔗 [Server GitHub Repo](https://github.com/sabrh/edupath-learn-science-server)  

---

## ✨ Features  

- 🎥 **Tutorial Videos by Chapter**  
   - YouTube embedded videos organized by subject & chapter.  

- 📊 **Progress Tracking**  
   - Mark chapters as completed.  
   - Dashboard with progress bars for each subject.  

- 📝 **Personal Notes (CRUD)**  
   - Add, edit, and delete notes under tutorial videos.  

- ❓ **Chapter-based Quizzes (MCQ)**  
   - Take quizzes after completing chapters.  
   - Instant scoring with review option.  

- 🔐 **Authentication & Authorization**  
   - Email/password & Google login (NextAuth.js).  
   - Private routes for quizzes, notes, and progress.  

- 🌗 **Responsive Design**  
   - Works across mobile, tablet, and desktop.  
   - Dark/Light mode toggle.  

- ⚡ **Extra Features**  
   - Loading spinners & custom 404 page.  
   - Search & filter tutorials.  

---


---

## 🛠️ Tech Stack  

### Frontend  
- Next.js (App Router)  
- Tailwind CSS + DaisyUI / ShadCN UI  
- Framer Motion (animations)  
- React Player (video integration)  
- TanStack Query (data fetching)  
- Axios  

### Backend  
- Next.js API Routes  
- Node.js concepts inside Next.js  
- JWT (for route protection)  
- NextAuth.js (Google & Email login)  

### Database  
- MongoDB + Mongoose  
- MongoDB Atlas  

### Deployment 
- Netlify (Client) 
- Vercel (API)  
- MongoDB Atlas (Database)  

---

## ⚙️ Environment Variables  

Create a `.env.local` file in the root:  

```env
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_SECRET=your_nextauth_secret
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret 

