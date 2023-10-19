# syntax = docker/dockerfile:1

# # Adjust NODE_VERSION as desired
# ARG NODE_VERSION=18.17.1
# FROM node:${NODE_VERSION}-slim as base

# LABEL fly_launch_runtime="Node.js"

# # Node.js app lives here
# WORKDIR /app

# # Set production environment
# ENV NODE_ENV="production"


# # Throw-away build stage to reduce size of final image
# FROM base as build

# # Install packages needed to build node modules
# RUN apt-get update -qq && \
#     apt-get install -y build-essential pkg-config python-is-python3

# # Install node modules
# COPY --link package-lock.json package.json ./
# RUN npm ci

# # Copy application code
# COPY --link . .


# # Final stage for app image
# FROM base

# # Copy built application
# COPY --from=build /app /app

# # Start the server by default, this can be overwritten at runtime
# EXPOSE 3000
# CMD [ "npm", "run", "start" ]
# syntax = docker/dockerfile:1

# syntax = docker/dockerfile:1

# Ajusta NODE_VERSION según tus necesidades
ARG NODE_VERSION=18.17.1

# Etapa de construcción de la aplicación de backend
FROM node:${NODE_VERSION}-slim as backend-build

# Directorio de trabajo para el backend
WORKDIR /backend

# Copiar el archivo package.json y package-lock.json (si existe) para el backend
COPY backend/package*.json ./

# Instalar dependencias del backend
RUN npm install

# Copiar el código fuente del backend
COPY backend ./

# Etapa final para la aplicación
FROM node:${NODE_VERSION}-slim

# Directorio de trabajo para la aplicación
WORKDIR /app

# Copiar los archivos de construcción del frontend desde el directorio local (frontend/dist) al directorio /app/frontend
COPY frontend/dist/ ./frontend/dist

# Copiar los archivos de la aplicación backend desde la etapa backend-build
COPY --from=backend-build /backend ./backend

# Cambiar al directorio /backend
WORKDIR /app/backend

# Expone el puerto 3000 en el contenedor
EXPOSE 3000

# Define el comando para ejecutar el servidor en el directorio /backend
CMD [ "npm", "run", "start" ]