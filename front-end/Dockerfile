# Stage 1: build frontend
FROM node:20-alpine AS build

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY .env .env
COPY . .
RUN npm run build

# Stage 2: serve with Nginx
FROM nginx:alpine

# Copy built frontend
COPY --from=build /usr/src/app/dist /usr/share/nginx/html

# Copy custom Nginx config
COPY nginx.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
