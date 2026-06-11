FROM node:20-bookworm-slim

WORKDIR /app

COPY package*.json ./
RUN npm ci --omit=dev --no-audit --no-fund

COPY . .

ENV NODE_ENV=production
ENV PORT=3000
ENV DB_PATH=/app/data/staffscheduler.db

RUN mkdir -p /app/data

EXPOSE 3000

CMD ["npm", "start"]
