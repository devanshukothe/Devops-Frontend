FROM node:22-alpine AS build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Build Vite app
RUN npm run build

# Expose Vite preview port
EXPOSE 3000

# Start Vite preview (important flags)
CMD ["npm", "run", "dev"]
