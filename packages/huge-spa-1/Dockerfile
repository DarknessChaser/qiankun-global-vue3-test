# build stage
FROM node:16 as dist
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

COPY --from=dist /app/dist /usr/share/nginx/html

EXPOSE 7001
CMD ["nginx", "-g", "daemon off;"]
