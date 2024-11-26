# (NUWorks) Job Search Portal

- Technologies used:
  - Backend:
    - Node.js - Used as the runtime environment 
    - Express.js - Used to configure and manage the server
    - Bcrypt.js - Used to hash passwords and store them in the database
    - MongoDB(Mongoose) - Mongoose provides ORM for the MongoDB. Used to manage and persist data
    - Multer - Used for multipart requests to upload files to the backend
  

  - Frontend:
    - React.js : It is a library used to create SPA applications.
    - Axios.js : It is used to fetch data and establish connection to the backend.
    - Material UI : Material UI framework is used for its extensive react components.
  


Paths:
- Backend
  - /user/getAll - Returns all users (GET)
  - /user/create - Creates the user (POST)
  - /user/edit - Edits the user (PUT)
  - /user/delete - Deletes the user (DELETE)
  - /user/uploadFile - Upload user profile picture (POST)
  - /user/login - Login the user (POST)
  - /company/upload - utility route to upload company data (POST)
  - /company/getAll - utility route to get company data (GET)
- Frontend
  - /home or / : Points to the Home component
  - /jobs : Points to the jobs component
  - /about : Points to the about us component
  - /login : Login page
  - /Company Showcase : Shows a gallery of company images
