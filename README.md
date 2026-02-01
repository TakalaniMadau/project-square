# Full Stack Single Page Website

A full-stack single page application with a Node.js/Express backend and React frontend, containerized with Docker.

## Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and Docker Compose installed
- MongoDB Atlas account (or local MongoDB instance)

## Quick Start

### 1. Configure Environment

Copy the example environment file and add your MongoDB connection string:

```bash
cp .env.example .env
```

Edit `.env` and set your `MONGODB_URL`:

```
MONGODB_URL=mongodb+srv://<username>:<password>@<cluster>.mongodb.net/?appName=<app>
```

Need a free MongoDB? [Set up MongoDB Atlas](https://www.mongodb.com/blog/post/quick-start-nodejs-mongodb-how-to-get-connected-to-your-database)

### 2. Run with Docker

```bash
docker compose up --build
```

### 3. Access the Application

- **Frontend:** [http://localhost](http://localhost)
- **Backend API:** [http://localhost:5001](http://localhost:5001)

### 4. Seed Database (Optional)

If you have images in `backend/uploads/` and need to populate the database:

```bash
cd backend
cp ../.env .
npm install
node seed.js
```

## API Endpoints

| Method | Endpoint               | Description                           |
| ------ | ---------------------- | ------------------------------------- |
| POST   | `/featured-brands`     | Upload a brand image with title       |
| GET    | `/featured-brands`     | Get all brands sorted by publish date |
| DELETE | `/featured-brands/:id` | Delete a brand by ID                  |

## Project Structure

```
project-square/
├── backend/
│   ├── Dockerfile
│   ├── index.js
│   ├── models/
│   ├── routes/
│   └── uploads/
├── frontend/
│   ├── Dockerfile
│   ├── nginx.conf
│   └── src/
├── docker-compose.yml
├── .env.example
└── README.md
```

## Tech Stack

- **Backend:** Node.js, Express, Mongoose, MongoDB
- **Frontend:** React
- **Containerization:** Docker, Nginx
