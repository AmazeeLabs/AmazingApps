FROM amazeeio/php:7.2-cli-drupal

COPY composer.json composer.lock load.environment.php package.json yarn.lock /app/
COPY scripts /app/scripts
COPY patches /app/patches
RUN composer install --no-dev
RUN yarn install --pure-lockfile
COPY . /app
RUN cd storybook && yarn && yarn run build-library && yarn run build-storybook && ln -s storybook-static ../web/storybook

ENV NODE_ENV production

# Define where the Drupal Root is located
ENV WEBROOT=web
ENV SB_ENVIRONMENT=amazeeio
