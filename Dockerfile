# Start with a Node.js base image
FROM node:16 AS build

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the React app
RUN npm run build

# Use an Nginx base image
FROM nginx:1.23 AS final

# Copy the built React app to the Nginx image
COPY --from=build /app/build /usr/share/nginx/html
