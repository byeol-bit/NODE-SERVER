#1. Node 공식 이미지 사용
FROM node:18

#2. 컨테이너 내부 작업 폴더 생성
WORKDIR /app

#3. package.json 먼저 복사
COPY package*.json ./

#4. 의존성 설치
RUN npm install

#5. 전체 소스 복사
COPY . .

#6. 서버 포트 노출
EXPOSE 3000

#7. 서버 실행
CMD ["npm", "start"]