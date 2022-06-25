<div id="top"></div>

<div align="center">
  <a href="https://opus-live.netlify.app/">
    <img src="https://user-images.githubusercontent.com/78133928/173599867-44c5e4e9-3e40-4b05-b81d-fd26d4032c54.svg" alt="Logo" width="60" height="60">
  </a>

  <h1 align="center">Opus</h1>

  <p align="center">
    Set out to achieve more, every day.
  </p>
</div>

</br>

![Opus](https://user-images.githubusercontent.com/78133928/173618111-5a3c17f4-c606-41f2-955f-9901ad889061.png)

<!-- HOSTED LINK -->

## Hosted Link

<a href="https://opus-live.netlify.app/" target="_blank">https://opus-live.netlify.app/</a>

<!-- ABOUT THE PROJECT -->

# About

Opus is a productivity website, built using the MERN stack. It provides a one-stop solution for users to enhance their organizing capabilties by scheduling their upcoming events in calendars, jotting down their tasks and notes, and using a timer to break down work durations into short yet effective time periods for the best results.

<!-- FEATURES IMPLEMENTED -->

# Features Implemented

## Frontend

- Users can create an account to access the features available.
- The events page allows access to a calendar for marking important dates with events and other commitments.
- The notes page can be used to jot down quick notes by providing an apt title and description. Users can update and delete their notes as well.
- The todos page is helpful in maintaining tasks or one-liners, and these can be updated and deleted as per the user's convenience.
- A Pomodoro timer is available for the users to manage time in small blocks. Timer settings can be used to set the desired work and break durations.
- Randomized inspiring quotes are generated on the profile page every time the user lands on it.

## Backend

1. Auth Routes

- /signup
  - Account credentials are securely authenticated and stored in the database.
- /login
  - Only valid credentials are accepted at login.
  - JWT token is used for verification.
- /getUser
  - Details of the user currently logged in are obtained.

2. API Routes

- Notes

  - /createNote
    - Creates and adds a note to the database.
  - /getNotes
    - Fetches all the notes of the currently logged in user.
  - /getNote
    - Fetches a particular note.
  - /updateNote
    - Updates a note in the database.
  - /deleteNote
    - Deletes a note from the database.

- Todos

  - /createTodo
    - Creates and adds a todo to the database.
  - /getTodos
    - Fetches all the todos of the currently logged in user.
  - /getTodo
    - Fetches a particular todo.
  - /updateTodo
    - Updates a todo in the database.
  - /deleteTodo
    - Deletes a todo from the database.

- Events

  - /createEvent
    - Creates and adds an event to the database.
  - /getEvents
    - Fetches all the events of the currently logged in user.

<!-- BUILT WITH -->

# Built With

- React.js
- Express.js
- Node.js
- MongoDB
- JWT
- Bcrypt

<!-- GETTING STARTED -->

# Getting Started

1. Fork the repository
2. Clone the repository

```sh
git clone https://github.com/disha9112/Opus.git
```

3. Open the folder containing the cloned repository in the terminal
4. Navigate to the server folder in a new terminal and install the npm packages and libraries

```sh
cd server
npm install
```

5. Set up a .env file (check the .example.env file) with custom keys and run the server

```sh
npm run dev
```

6. Navigate to the client folder in a new terminal and install the packages and libraries

```sh
cd client
npm install
```

7. Run the client side of the website

```sh
npm start
```
