FROM node:alpine3.18

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy all project files
COPY . .

# Build React app
RUN npm run build

# Run Vite preview accessible externally on EC2
EXPOSE 3000

CMD ["npx", "vite", "preview", "--host", "0.0.0.0", "--port", "3000"]
