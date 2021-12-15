# build stage
FROM node:14 as dist
ARG MODE=prod
WORKDIR /app
COPY package.json ./
RUN yarn config set registry https://registry.npm.taobao.org/
RUN yarn install
COPY ./ /app/
RUN npm run build

# production stage
FROM nginx:1.13.12-alpine

COPY --from=dist /app/nginx.conf /etc/nginx/nginx.conf
RUN mkdir /usr/share/nginx/html2

COPY --from=dist /app/dist /usr/share/nginx/html
COPY --from=dist /app/dist /usr/share/nginx/html2

EXPOSE 8002
EXPOSE 7002
CMD ["nginx", "-g", "daemon off;"]