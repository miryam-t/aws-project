# # הגדרת סביבת העבודה (Node.js)
# FROM node:18-slim

# # התקנת כלים נחוצים עבור Prisma
# RUN apt-get update && apt-get install -y openssl

# WORKDIR /app

# # העתקת קבצי תלויות והתקנה
# COPY package*.json ./
# RUN npm install

# # העתקת כל שאר הקבצים
# COPY . .

# # יצירת הקליינט של פריסמה
# RUN npx prisma generate

# # הגדרת פקודת ההרצה (יריץ מיגרציות ואז את הקוד)
# CMD ["sh", "-c", "npx prisma migrate deploy && node main.js"]

FROM node:22-slim

# התקנת כלים נחוצים עבור Prisma
RUN apt-get update && apt-get install -y openssl ca-certificates

WORKDIR /app

COPY package*.json ./

ENV NODE_TLS_REJECT_UNAUTHORIZED=0
RUN npm install
COPY . .
# נגדיר משתנה סביבה כדי לעקוף את בדיקת ה-SSL רק עבור ה-Build
# זה פותר את הבעיה של ה-Certificate
# ENV NODE_TLS_REJECT_UNAUTHORIZED=0

# RUN npm install

# COPY . .

# RUN npx prisma generate --schema=prisma/schema.prisma
# כאן אנחנו מציינים איפה הסכמה נמצאת
RUN npx prisma generate --schema=prisma/schema.prisma

# כאן אנחנו מציינים איפה הסכמה נמצאת עבור המיגרציה
CMD ["sh", "-c", "npx prisma migrate deploy --schema=prisma/schema.prisma && node main.js"]