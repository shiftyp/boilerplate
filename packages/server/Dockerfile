FROM yarnpkg/node-yarn as installer

WORKDIR /usr/src/app

COPY  . .

RUN yarn

FROM yarnpkg/node-yarn as builder

COPY --from=installer /usr/src/app /usr/src/app
RUN cp -Lf /usr/src/app/node_modules/* /usr/src/app/server/node_modules/*

WORKDIR /usr/src/app

RUN yarn build

FROM node:16 as runner

COPY --from=builder /usr/src/app/server /usr/src/app

ENV handler ''

CMD ["node", "dist/handler/${handler}.js"]