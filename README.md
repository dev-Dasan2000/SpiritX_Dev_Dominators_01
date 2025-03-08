# SpiritX_Dev_Dominators_01
A secure and user-friendly authentication system

## Table of Contents

- [Instructions](#instructions)
- [Database Setup and Configuration](#database-setup-and-configuration)
- [Assumptions](#assumptions)
- [Usage](#usage)
- [Contribution](#contribution)
- [License](#license)
- [Additional Features](#additional-features)

##  Instructions to Run the Project

### Prerequisites
Ensure the following are installed on your system:
- **Node.js** (v18 or higher) – [Download here](https://nodejs.org/)
- **PostgreSQL** (v15 or higher) – [Download here](https://www.postgresql.org/)
- **Git** – [Download here](https://git-scm.com/)

### 1. Clone the Repository

```bash
git clone <your-repo-url>
cd <your-project-folder>
```

### 2. Install Dependencies

Ensure you are in the project folder, then run:

```bash
npm install
```

This will install all required Node.js packages for both frontend and backend.

## Database Setup and Configuration

1. Ensure PostgreSQL is installed and running on your system.

2. Create a new database:

```bash
psql -U your_username
CREATE DATABASE your_database_name;
```

3. Set up the `.env` file in the root directory:

```env
DATABASE_URL=postgresql://username:password@localhost:5432/your_database
NEXT_PUBLIC_API_URL=http://localhost:3001
```

4. Run Database Migrations (if applicable):

```bash
npx prisma migrate dev
```

Alternatively, if you have a database dump file, restore it using:

```bash
psql -U your_username -d your_database_name -f path/to/dumpfile.sql
```

## 3. Start the Development Servers

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

### 4. Access the Project

- **Frontend**: [http://localhost:3000](http://localhost:3000)
- **Backend**: [http://localhost:3001](http://localhost:3001)

## Assumptions

- The user has basic knowledge of Git, Node.js, and PostgreSQL.
- PostgreSQL is installed and correctly configured.
- The development environment is Linux, macOS, or Windows.

## Usage

1. Clone the repository and install dependencies.
2. Set up the PostgreSQL database and run migrations or restore the dump.
3. Start both the backend and frontend servers.

## --Contribution--
## Authors

- [iamindunil](https://www.github.com/imaindunil)
- [dev-Dasan2000](https://www.github.com/dev-Dasan2000)
- [Dilesh99](https://www.github.com/Dilesh99)
- [RWSandaru8](https://www.github.com/RWsandaru8)
- [iamindunil](https://www.github.com/imaindunil)

## License

This project is licensed under the [MIT License](LICENSE).

## Additional Features

- Authentication System (e.g., JWT-based login).
- Error Handling and Logging.
- Responsive UI with shadcn/ui and Tailwind CSS.
- Modular Code Structure for scalability.

### Troubleshooting

- Ensure PostgreSQL is running and credentials are correct.
- Check `.env` configuration if there are connection issues.
- Run `npm install` again if there are missing modules.

---

.












