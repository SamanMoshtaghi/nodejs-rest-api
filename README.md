# Node.js REST API
Building a RESTful API with Node.js

## Project Structure

``` Building a RESTful API with Node.js

.
├── src
│   ├── tests
│   │   └── userRoutes.test.js
│   ├── config
│   │   └── db.js
│   ├── controllers
│   │   └── userController.js
│   ├── models
│   │   └── User.js
│   ├── routes
│   │   └── userRoutes.js
│   ├── swagger
│   │   └── swaggerConfig.js
│   ├── test
│   │   └── user.test.js
│   └── server.js
├── .env
├── .gitignore
├── Dockerfile
├── docker-compose.yml
├── package.json
└── README.md
```

## Prerequisites
- Node.js (version 20 or later)
- Docker
- Docker Compose

## Installation

1. Clone the repository:

git clone

```
    https://github.com/SamanMoshtaghi/nodejs-rest-api
```
   
2. Install dependencies:
```
    npm install
```

## Running the Application

### Using Docker

1. Build and start the Docker containers:
   ```
    docker-compose up --build
   ```

3. Access the application:

    Open your browser and go to http://localhost:4000. You should see "Welcome to the Node.js API".
        
4. Access Swagger documentation:

   Open your browser and go to http://localhost:4000/api-docs. You should see the Swagger UI with your API documentation.


### Without Docker
1. Start MongoDB:
    
> [!IMPORTANT]
> Ensure MongoDB is running on your local machine or in a Docker container.

3. Create a .env file:

    Create a .env file in the root directory and add the following:
```    
    MONGO_URI=mongodb://localhost:27017/mydatabase
    PORT=4000
```

4. Start the application:
```
npm start
```

5. Access the application:

Open your browser and go to http://localhost:4000.
> [!NOTE]
> You should see
> `Welcome to Building a RESTful API with Node.js. Swagger documentation: /api-docs.`

6. Access Swagger documentation:

Open your browser and go to http://localhost:4000/api-docs.
> [!NOTE]
> You should see the Swagger UI with your API documentation.

## Testing
To run tests:
    
    npm test

## Environment Variables
    MONGO_URI: mongodb://localhost:27017/mydatabase
    PORT: Port number for the application (default is 4000)