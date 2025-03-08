# SpiritX_Dev_Dominators_01
A secure and user-friendly authentication system

## Table of Contents

- [Instructions](#instructions)
- [Database setup and Configuration steps](#instructions)
- [Assumptions](#assumptions)  
- [Usage](#usage)  
- [Contribution](#contribution)  
- [License](#license)  
- [Additional Features](#additional-features)

## Authors

- [iamindunil](https://www.github.com/imaindunil)
- [dev-Dasan2000](https://www.github.com/dev-Dasan2000)
- [Dilesh99](https://www.github.com/Dilesh99)
- [RWSandaru8](https://www.github.com/RWsandaru8)
- [iamindunil](https://www.github.com/imaindunil)


## --Instruction--
## Instructions to Run the Project

### Prerequisites
Ensure the following are installed on the system:
- **Node.js** (v18 or higher) – [Download here](https://nodejs.org/)
- **PostgreSQL** (v15 or higher) – [Download here](https://www.postgresql.org/)
- **Git** – [Download here](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

Ensure in the correct project folder, then run:

```bash
npm install
```

This will install all required Node.js packages for both frontend and backend.

### 3. Set Up Environment Variables

Create a `.env` file in the root directory and add the following variables:

```env
# Database connection for PostgreSQL
DATABASE_URL=postgresql://username:password@localhost:5432/your_database

# Backend API URL
NEXT_PUBLIC_API_URL=http://localhost:3001
```

Ensure PostgreSQL is running and the credentials match relevent local setup.

### 4. Run Database Migrations (If applicable)

If you use a migration tool (e.g., Prisma or Drizzle), apply the migrations to set up the database:

```bash
npx prisma migrate dev
```

Ensure the PostgreSQL database is running before executing this command.

### 5. Start the Development Servers

Open two terminals and follow these steps:

1. **Backend (Node.js)**

```bash
cd backend
npm run dev
```

2. **Frontend (Next.js)**

```bash
cd frontend
npm run dev
```

### 6. Access the Project

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:3001](http://localhost:3001)

### 7. Run Tests (Optional)

If your project has tests, you can run them using:

```bash
npm test
```

### 8. Build for Production

When ready to deploy, build and start the production servers:

1. **Backend**:

```bash
cd backend
npm run build
npm start
```

2. **Frontend**:

```bash
cd frontend
npm run build
npm start
```

###9. Troubleshooting

- Ensure your PostgreSQL server is running and the credentials are correct.
- Check the `.env` configuration if there are connection issues.
- Run `npm install` again if there are missing modules.

---










