# Stage 1: Build React app
FROM node:20-bullseye AS build

WORKDIR /app

# Copy package.json and package-lock.json
COPY package*.json ./

# Disable strict SSL to avoid ERR_SSL_CIPHER_OPERATION_FAILED
RUN npm config set strict-ssl false
RUN npm config set registry https://registry.npmjs.org/

# Install dependencies
RUN npm install --legacy-peer-deps

# Copy app source
COPY . .

# Build React app
RUN npm run build

# Stage 2: Serve app with Nginx
FROM nginx:alpine

# Copy build output
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
