# MERN

## React Build

Generate a `dist` folder -> standalone -> deploy

- js file -> React + App
  - App.jsx -> Combine with all the `imports` -> new JS file
    - Combines -> comiples using Babel/Compiler + Treeshaking (prunes unused stuff)
    - Bundling -> Webpack
    - Minification

## Project Planning

Trello

- user stories
- wireframes
  - URL (React Router)
  - Components
    - fetch -> URL, verb
- Data (Google Sheet)
  - 2 Models + User
    - embedded / referencing
- Libraries
  - React?
  - CSS?
  - others?

## Sign up

URL for backend? - api/users [POST] body -> user
Resource - users

## Part 2 - Part 5

### Doing sign-up

Start from React

- Create form component
  - JSX for the form
  - Form -> Controlled/Uncontrolled/Form Submit
- Call the user-service -> user-api
  - Call a fetch -> /api/users [POST]

Express (end result -> user in db)

- Link server.js to routes
- Create route for /api/users [POST]
- Create controller
  - Extract body from req
  - Create user from the body -> db
- Create Schema / Model for user

### Do list All users

React

- React router route - /users
- Create all users component - AllUsersComponent
  - List - <ul>
  - useEffect() -> users-service(getAllUsers) -> users-api (fetchAllUsers) -> /api/users [GET]

Express

- /api/users -> server.js -> routes/users.js -> GET
- controller.users (index) -> User model -> find() -> res.json()

### Login

React

- route - /login
- Component
  - form with username & password + login button
  - press button -> onClick / form submit
    - users-service()
    - users-api() -> fetch /api/users/login [POST] with body -> {username, password}
    - check response
      - 200 -> setState, navigate
      - 401 -> show error message

Express - bcrypt library

- /api/users/login -> server.js -> routes/users -> controller/users(login)
- login() in controllers
  - extract body from request
  - const user User.findOne({username})
  - check password (form) with the hash version (user.password) -> if ...
    - pass -> 200 + JWT token
    - fail -> 401

### Sign Up -> Create User

React -> fetch [POST] with body {...}

Express

- /api/users -> controller
- controller
  - extract body from req -> const data = req.body
  - data.password = hash(data.password)
  - User.create(data)

## Secret Stuff

After Login

- click Link in Landing Page -> /wardrobe
- See all the clothes -> ClothesComponent
- fetch (with the JWT token) -> express -> /api/clothes

## Authentication & Authorization

## JWT

A.B.C -> A(Header) is red, B(Payload) is purple, C(Signature) is blue

encryption = plaintext -> algo + key -> encrypted text
decryption =

encoding = plaintext -> algo -> encoded text
decoding =

JWT verification = can only verify with the secret

Hashing

- text -> hashing algo -> hash
- same input -> same output
- diff input -> not have the same output
- fast
- one way (hashing algo)
