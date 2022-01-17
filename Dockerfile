FROM node:17-alpine
WORKDIR /infoseite
COPY /build /infoseite/build
RUN npm install -g serve
CMD ["serve", "-s", "build", "-l", "80"]