# 1. Базовый образ с Node.js
FROM node:20-alpine

# 2. Рабочая директория внутри контейнера
WORKDIR /app

# 3. Копируем package.json
COPY package.json ./

# 4. Устанавливаем зависимости
RUN npm install --production

# 5. Копируем код
COPY index.js ./

# 6. Открываем порт
EXPOSE 3000

# 7. Запуск приложения
CMD ["node", "index.js"]