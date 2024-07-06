# Use a lightweight Node.js version
FROM node:20.9.0-alpine3.18

# Set the working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application
COPY . .

# Expose the port the app runs on
EXPOSE 4000

# Start the application
CMD ["npm", "start"]