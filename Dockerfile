FROM node:14-alpine as buildContainer
WORKDIR /app
COPY ./package.json ./package-lock.json /app/
RUN npm install
COPY . /app
RUN npm run build:ssr

# Expose the port the app runs in
EXPOSE 4200

# Serve the app
CMD ["npm", "run", "serve:ssr"]

