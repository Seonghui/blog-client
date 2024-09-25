# 1. 베이스 이미지 선택
FROM node:20.1.0-alpine AS builder

# 2. 작업 디렉토리 설정
WORKDIR /app

# 3. 패키지 설치
COPY package.json package-lock.json ./
RUN npm install

# 4. 소스 코드 복사
COPY . .

# 5. Next.js 애플리케이션 빌드
RUN npm run build

# 6. 런타임 이미지 설정
FROM node:20.1.0-alpine AS runner


# 7. 작업 디렉토리 설정
WORKDIR /app

# 8. 빌드 결과물 복사
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/package.json ./package.json

# 9. 포트 설정
EXPOSE 3000

# 10. Next.js 애플리케이션 시작 명령어
CMD ["npm", "start"]
