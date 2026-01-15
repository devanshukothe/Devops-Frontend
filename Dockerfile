FROM node:18-alpine

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy source code
COPY . .

# Build the Vite app
RUN npm run build

# Expose Vite preview port
EXPOSE 3000

# Start Vite preview (important flags)
CMD ["npm", "run", "preview", "--", "--host", "0.0.0.0", "--port", "3000"]

