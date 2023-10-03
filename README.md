## **Introduction**

As part of the Code Challenge for the ISL27R Full Stack Developer Posting, this Web Application tracks and manages Contacts for a company as described by the supplied User Stories.

Application is built using react, vite, nodejs, express, tailwind, mantine, mocha, chai and docker.

## **How to run the app**

To launch the app using docker, follow these steps:

### Setup

### Option 1 Run using Docker Hub

1. Pull image from docker hub for the backend

```bash
docker run -d -p 3000:3000 --network bcgov-network --name backend anmolsinghturka/backend:latest
```

2. Pull image from docker hub for the frontend

```bash
docker run -d -p 8000:8000 --network bcgov-network --name frontend anmolsinghturka/frontend:latest
```

3. Navigate to browser  
backend
```bash
http://localhost:3000/api/api-docs/ 
```
frontend
```bash
http://localhost:8000/
```

### Option 2 Run using Docker Compose

1. Clone the entire repository:

```bash
git clone https://github.com/anmolsinghturka/Anmol-Singh-ISL27R-Full-Stack-Developer-Req103832
```

2. Navigate to the root of the project in the terminal

```bash
cd Anmol-Singh-ISL27R-Full-Stack-Developer-Req103832
```

3. Run docker compose command to setup the environment

```bash
docker-compose up
```

# Test

Test cases has been implemented using Mocha and chai library to test application

1. Navigate to the test folder

```bash
cd backend
```

2. Run test cases

```bash
npm test
```

# Features

Unauthorized users can view all 10 existing contacts details, search a contact using different filters, add new contacts.

Authorized users can edit and delete a contact by Right clicking on contact in the table. Only authorized users are able to edit and delete a contact. Sample user account

```bash
       username - admin
       password - admin123
```

# Test

Test cases has been implemented using Mocha and chai library to test application

1. Navigate to the test folder

```bash
cd backend
```

2. Run test cases

```bash
npm test
```

## **Output**

<img src="frontend\public\output-1.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-2.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-3.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-4.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-5.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-6.png" alt="Alt text" title="Optional title">
