# Etapa 1: Build de Angular
FROM node:18-alpine as builder
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build -- --output-path=dist

# Etapa 2: Servir con Nginx
FROM nginx:alpine
COPY --from=builder /app/dist /usr/share/nginx/html
EXPOSE 80
