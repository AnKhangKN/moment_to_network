# ===== 1. Build =====
FROM node:20-alpine AS builder
WORKDIR /app

# Install dependencies
COPY package*.json ./
RUN npm install

COPY . .

# Compile TypeScript files
RUN npx tsc

# ===== 2. Runner =====
FROM node:20-alpine
WORKDIR /app

# Copy only the necessary files from the builder stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/dist ./dist
COPY --from=builder /app/node_modules ./node_modules

# Expose the port the app runs on
EXPOSE 8080

# Start the application
CMD ["npm", "run", "start"]