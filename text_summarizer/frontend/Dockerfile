# Use Node image to build React app
FROM node:18

WORKDIR /app

# Copy package.json and install dependencies
COPY package*.json ./
RUN npm install

# Copy frontend code
COPY . .

# Build React app
RUN npm run build

# Use nginx to serve build
FROM nginx:alpine
COPY --from=0 /app/build /usr/share/nginx/html

EXPOSE 3000
CMD ["nginx", "-g", "daemon off;"]
