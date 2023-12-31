## **Introduction**

As part of the Code Challenge for the ISL27R Full Stack Developer Posting, this Web Application tracks and manages Contacts for a company as described by the supplied User Stories.

Application is built using react, vite, nodejs, express, tailwind, mantine, mocha, chai and docker.

## **How to run the app**

To launch the app using docker, follow these steps:

### Setup

### Option 1 Run using Docker Hub

1. Pull image from docker hub for the backend and frontend

```bash
docker run -d -p 3000:3000 --network bcgov-network --name backend anmolsinghturka/backend:latest

```
```bash
docker run -d -p 8000:8000 --network bcgov-network --name frontend anmolsinghturka/frontend:latest
```
2. Navigate to browser to access backend and frontend
```bash
http://localhost:3000/api/api-docs/ 
```
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

# Features

### For Unauthorized Users:
* View Contact Details: Unauthorized users can access the details of all 10 pre-existing contacts.
* Search Functionality: They can search for a specific contact using various filters.
* Add New Contacts: Unauthorized users have the permission to add new contacts to the list.

### For Authorized Users:
* Edit and Delete Contacts: Authorized users have the additional capability to edit and delete contacts. This can be done by right-clicking on the specific contact within the table. These advanced features are restricted to authorized users only.
* Sample User Account for Testing:
To facilitate testing, below are the credentials of a sample user account:

```bash
       username - admin
       password - admin123
```

This account provides a practical example of the access and functionalities available to authorized users.

# Test and CodeQL code scanning

Test cases has been implemented using Mocha and chai library to test application

1. Navigate to the test folder

```bash
cd backend
```

2. Run test cases

```bash
npm test
```
A public report generated by CodeQL is set up for this repository. Report is within the root directory.

## **Output**

<img src="frontend\public\output-1.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-2.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-3.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-4.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-5.png" alt="Alt text" title="Optional title">

<img src="frontend\public\output-6.png" alt="Alt text" title="Optional title">
