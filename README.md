## High-Level README Overview 

Here is an AutoBlog web app that I built with partial help from AI. I want to be clear: some parts were assisted, especially the areas I had no prior experience with—mainly AWS, which I used for the first time during this challenge. I also had limited experience with Docker, images, and multi-service environments, but I still managed to complete and deploy the entire system successfully.

### Tech Stack Choices (the challenge requirements)

- **React + Node.js (Express):**  
  I chose these because they have a huge community, excellent documentation, and a wide range of packages and tools. The ecosystem around npm makes development faster and more flexible.

- **PostgreSQL:**  
  I selected PostgreSQL because it is widely used in production, very stable, open-source, and supported by many ORMs such as Prisma. It’s also easy to manage and works well inside Docker environments.

- **GROQ API:**  
  I used GROQ because it is simple to integrate and supports multiple AI models. It was suitable for generating automatic blog content with minimal overhead.

- **AWS EC2 + CodeBuild + ECR:**  
  I deployed the project on AWS following the challenge requirements. The backend, frontend, and database run inside Docker containers, and CodeBuild handles the automated build and deployment steps. The app is hosted on an EC2 instance with a live public URL.


- **Nginx (Frontend SPA Hosting):**  
  The frontend is built with Vite and served using Nginx inside a Docker container.  
  - SPA routes (`/about`, `/blog/:id`) are handled correctly using the `try_files $uri /index.html;` directive.  
  - Static assets are served normally under `/assets/`.  
  - The configuration is included in `front-end/nginx.conf` and copied into the container during the Docker build.

### Daily Auto-Generation of Blog Posts

To qualify for the challenge requirements, I implemented automatic daily blog generation.  
I used **node-cron**, and the scheduler runs **every day at 3:00 AM**, where it triggers a background job that generates a new article using the GROQ API and inserts it into the PostgreSQL database.







# AWS Deployment Instructions

## 1. Launch EC2 Instance

- **AMI:** Amazon Linux 2023 (Kernel 6.1)
- **Architecture:** 64-bit (x86)
- **Instance type:** t3.micro
- **Security group:** `AutoBlog`
  - Add rule: SSH, Port 22, Source 0.0.0.0/0
- **Key pair:** `AutoBlog-key-pairs.pem` (downloaded locally)

## 2. Connect to EC2 via SSH

```bash
ssh -i "AutoBlog-key-pairs.pem" ec2-user@YOUR_PUBLIC_DNS
```

## 3. Install Docker

```bash
sudo yum update -y
sudo yum install -y docker
sudo systemctl enable docker
sudo systemctl start docker
sudo usermod -aG docker ec2-user
```

## 4. Logout and Reconnect

```bash
exit
ssh -i "AutoBlog-key-pairs.pem" ec2-user@YOUR_PUBLIC_DNS
```

## 5. Install Docker Compose

```bash
sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
sudo chmod +x /usr/local/bin/docker-compose
docker-compose --version
```

## 6. Install Git

```bash
sudo yum install -y git
```

## 7. Clone Repository

```bash
cd /home/ec2-user
git clone https://github.com/Hemn-Raqib-Aziz/AutoBlog.git
cd AutoBlog/infra
```

## 8. Create Environment Files

**Backend .env** (`../back-end/src/.env`):
```ini
PORT=4000
DB_HOST=db
DB_USER=postgres
DB_PASSWORD=your_db_password
DB_PORT=5432
DB_NAME=blogs
INIT_DB_NAME=postgres
GROQ_API_KEY=your_groq_api_key
```

**Frontend .env** (`../front-end/.env`):
```ini
VITE_API_BASE_URL=http://localhost:4000/api/auto-generated-blogs
```

## 9. Run Application

```bash
docker-compose up -d --build
```

## 10. Verify Live URL

- **Frontend:** http://ec2-51-21-222-191.eu-north-1.compute.amazonaws.com:5173/

- **Backend API:** http://ec2-51-21-222-191.eu-north-1.compute.amazonaws.com:4000/api/auto-generated-blogs/all

- Daily blog generation runs at 3:00 AM via node-cron
