FROM node:alpine3.18 as build

WORKDIR /app

# Install dependencies
COPY package.json package-lock.json* ./
RUN npm install

# Copy project files
COPY . .

# Build React app
RUN npm run build

EXPOSE 3000

CMD ["npm", "preview"]
