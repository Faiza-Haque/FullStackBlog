# FullStackBlog

## Description
This project is a web application that allows users to sign up, log in, and create, read, update, and delete (CRUD) posts and comments. It features user authentication and session management, ensuring that only logged-in users can access certain routes and perform specific actions.

## Technologies Used
* Node.js
* Express.js
* Sequelize (ORM for interacting with the database)
* Handlebars.js (for rendering views)
* Express-session (for handling user sessions)
* MySQL (as the database)

## Installation

1. Clone the repository:
git clone https://github.com/yourusername/your-repo.git
2. Navigate to the project directory:
cd your-repo
3. Install dependencies:
npm install
4. Set up the database:
Create a .env file in the root of the project and add your database credentials and session secret:
makefile
Copy code
DB_NAME=your_db_name
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_HOST=your_db_host
DB_DIALECT=mysql
SESSION_SECRET=your_session_secret
5. Run database migrations:
npx sequelize db:migrate
6. Start the application:
npm start

## Usage
Home Page: Displays all posts with their associated users.
Login Page: Allows users to log in.
Signup Page: Allows users to sign up.
Dashboard: Displays the logged-in user's posts and allows them to create, edit, and delete their posts.
Post Editor: Allows users to edit their posts.
Post Comments: Displays a post with its comments and allows users to add comments.

## Routes
Public Routes
GET /: Home page displaying all posts.
GET /login: Login page.
GET /signup: Signup page.
Protected Routes (require authentication)
GET /dashboard: User's dashboard displaying their posts.
GET /dashboard/post/:id: Post editor for editing a specific post.
GET /post/:id: Page displaying a post with its comments.

## API Routes
POST /api/login: Logs in a user.
POST /api/logout: Logs out a user.
POST /api/signup: Signs up a new user.
POST /api/dashboard: Creates a new post.
POST /api/post/:id: Adds a comment to a post.
PUT /api/dashboard/post/:id: Updates a post.
DELETE /api/dashboard/post/:id: Deletes a post.

## Models
User
username: String
password: String (hashed)

## Post
title: String
content: Text
user_id: Foreign key referencing User

## Comment
comment_text: Text
user_id: Foreign key referencing User
post_id: Foreign key referencing Post

## Contributing
Fork the repository.
Create a new branch (git checkout -b feature-branch).
Make your changes.
Commit your changes (git commit -am 'Add some feature').
Push to the branch (git push origin feature-branch).
Create a new Pull Request.
License
This project is licensed under the MIT License.

## Acknowledgments 
- Tutors and TAs
- Thinh, Marissa, Anna
- My Instructor
- My Friends
Everyone listed above helped me complete this project. I would like to thank them for their support.

## Contact Information
Thanks for exploring my Repo!

If you would like to know more please feel free to contact me:
Email: faizahaque90@gmail.com
GitHub URL: https://github.com/Faiza-Haque
LinkedIn URL: https://www.linkedin.com/authwall 