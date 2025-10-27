
# 💬 Real-Time Chat Application (Spring Boot + WebSocket + Thymeleaf)

This project is a **real-time chat application** built using **Spring Boot WebSocket (without STOMP)** and **Thymeleaf** for the frontend.  
It allows users to connect, send messages, and disconnect in real time — just like a live chat room.

---

## 🚀 Features

- 🌐 Real-time communication using **WebSocket**
- 🎨 Simple and responsive **Thymeleaf frontend**
- 👥 Multi-user support (broadcasts messages to all connected users)
- 📱 Fully responsive — works smoothly on desktop and mobile
- 🐳 Docker-ready for easy deployment
- ☁️ Ready to deploy on **Render**, Heroku, or any cloud platform

---

## 🧩 Tech Stack

| Layer | Technology Used |
|-------|------------------|
| Backend | Spring Boot |
| Real-time Communication | Spring WebSocket (no STOMP) |
| Frontend | Thymeleaf, HTML, CSS, JavaScript |
| Logging | SLF4J |
| Deployment | Docker + Render |

---
## 🧠 How It Works

1. When a user enters their name and clicks **Connect**, a WebSocket connection is created.
2. The server stores the session and username.
3. Any message sent by a user is broadcast to all other connected users.
4. When a user disconnects, others are notified in real time.

## How to use this application

```bash
https://socket-e70w.onrender.com
```
- Copy and paste this link to any browser and first time wait **50s** please. I can explain you , since I am using free version of render so after sometimes of inactivity render forcefully sleep it and when first time any request come than it takes sometimes to be ready to response.

- On browser you can use it on multiple tab or mobile phone.


## You can also docker to use this image

```bash
docker run -d --name helper -p8000:8080 shabbir108349/socket-helper 
```
- First execute the given command on terminal then go to the browser and write 

```bash
localhost:8000
```
- Then the service will show on your browser and you can enjoy . After all if you have any issue to execute or understand this application, please contact with me.



##🧑‍💻 Author

Shabbir Hassain , 
A passionate Java developer who loves building real-time web applications using Spring Boot.

📫 Contact: shabbirhassain24@gmail.com

🌐 GitHub: https://github.com/Shabbir108349

