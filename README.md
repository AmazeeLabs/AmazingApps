# Amazing Apps Website

This is an example repository for learning to build websites with Drupal, GraphQL and Twig.

## Requirements

* PHP 7 or greater
* Composer
* Node

## Getting Started

```bash
git clone git@github.com:AmazeeLabs/AmazingApps.git amazing-apps
cd amazing-apps
```

## Fractal

```bash
cd web/themes/amazing_apps
npm install
npm run dev
```
... and visit `http://localhost:3000` in your browser.

## Drupal

```bash
composer install
./vendor/bin/drush si minimal --config-dir=../config/sync --account-name=admin --account-pass=admin
php web/core/scripts/drupal quick-start
```

