# Store-and-Retrieving-Data-in-PostgreeSQL

Project Structure

express-pg-crud/
├── db.js
├── index.js
├── routes/
│   └── users.js
├── package.json
└── README.md
Express + PostgreSQL CRUD API
 Requirements
- Node.js
- PostgreSQL
Setup
1. Clone or download this project folder.
2. Run `npm install` to install dependencies.
3. Create a PostgreSQL database named `userdb`.
4. Run this SQL to create the `users` table:
```sql
CREATE TABLE users (
  id SERIAL PRIMARY KEY,
  name VARCHAR(100),
  email VARCHAR(100),
  age INTEGER
);
5. Set your DB credentials in db.js.
6. Run the server:
node index.js
7. Test with Postman:
GET /users
GET /users/:id
POST /users with { "name": "...", "email": "...", "age": ... }
PUT /users/:id
DELETE /users/:id
