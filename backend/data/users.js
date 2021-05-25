import bcrypt from "bcryptjs";

const users = [
  {
    name: "Admin User",
    email: "admin@example.com",
    password: bcrypt.hashSync("123456", 10),
    isAdmin: true,
  },
  {
    name: "jhn doe",
    email: "jhn@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
  {
    name: "Mansavi",
    email: "mansavi@example.com",
    password: bcrypt.hashSync("123456", 10),
  },
];
export default users;
