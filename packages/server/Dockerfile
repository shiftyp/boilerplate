FROM node:16 as installer

WORKDIR /usr/src/app

RUN npm i yarn

COPY  . .

RUN yarn

FROM node:16 as builder

WORKDIR /usr/src/app

COPY --from=installer /usr/src/app .
RUN tar cvfh - ./node_modules/* packages/server/node_modules/* | (cd packages/server/node_modules; tar xvf -)

RUN yarn workspace @app/server build

FROM node:16 as runner

WORKDIR /usr/src/app

COPY --from=builder /usr/src/app/packages/server .

ENV handler ''

CMD ["node", "dist/handler/${handler}.js"]