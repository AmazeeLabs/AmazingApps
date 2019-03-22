FROM amazeeio/node:8-builder as nodebuilder
RUN mkdir /app/storybook
COPY storybook/package.json storybook/yarn.lock /app/storybook/
COPY storybook/package.json storybook/yarn.lock /app/
RUN yarn install --pure-lockfile
COPY storybook /app
RUN yarn run build-storybook

FROM amazeeio/nginx
COPY --from=nodebuilder /app/build /app

