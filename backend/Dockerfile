FROM gcr.io/openssf/scorecard:stable as TEMP

# Base image
FROM node:20-alpine3.20

# Create app directory
WORKDIR /usr/src/app

# A wildcard is used to ensure both package.json AND package-lock.json are copied
COPY package*.json ./

# Install app dependencies
RUN npm install

# Bundle app source
COPY . .

# Creates a "dist" folder with the production build
RUN npm run build

COPY --from=TEMP /scorecard /usr/src/app/dist/scorecard

# Start the server using the production build
CMD [ "node", "dist/main.js" ]
