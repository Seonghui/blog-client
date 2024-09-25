# 런타임 이미지 설정
FROM node:20.1.0-alpine AS runner

# 작업 디렉토리 설정
WORKDIR /app

# 빌드된 결과물 복사 (GitHub Actions에서 생성된 빌드 파일을 복사)
COPY .next ./.next
COPY public ./public
COPY node_modules ./node_modules
COPY package.json ./package.json

# 포트 설정
EXPOSE 3000

# Next.js 애플리케이션 시작 명령어
CMD ["npm", "start"]
