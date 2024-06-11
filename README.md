<p align="center"><a href="https://laravel.com" target="_blank"><img src="https://raw.githubusercontent.com/laravel/art/master/logo-lockup/5%20SVG/2%20CMYK/1%20Full%20Color/laravel-logolockup-cmyk-red.svg" width="400" alt="Laravel Logo"></a></p>

<p align="center">
<a href="https://github.com/laravel/framework/actions"><img src="https://github.com/laravel/framework/workflows/tests/badge.svg" alt="Build Status"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/dt/laravel/framework" alt="Total Downloads"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/v/laravel/framework" alt="Latest Stable Version"></a>
<a href="https://packagist.org/packages/laravel/framework"><img src="https://img.shields.io/packagist/l/laravel/framework" alt="License"></a>
</p>

## About This Project

This project is a task management application built using Laravel, Inertia.js, React, and Tailwind CSS. It allows logged-in users to create and manage activities, each of which can have multiple tasks. The application features a user-friendly UI with responsive design and stylish elements.

### Key Features
- Create, view, update, and delete activities.
- Add and remove tasks within activities.
- Modern UI design using Tailwind CSS.
- Real-time interaction with Inertia.js and React.
- Comprehensive testing with PHPUnit.

## Installation

1. Clone the repository:
   ```bash
   git clone
   cd your-repository

2. Install the dependencies:
   ```bash
    composer install
    npm install

3. Copy the .env.example file to .env and configure your environment variables:
   ```bash
   cp .env.example .env

4. Generate the application key:
   ```bash
   php artisan key:generate

5. Run the migration:
   ```bash
   php artisan migrate

6. Serve the application
   ```bash
   php artisan serve

7. Build the frontend assets:
   ```bash
  npm run dev

- Navigate to http://localhost:8000 in your browser.
- Register or log in to start managing your activities and tasks.


8. To run the test:
   ```bash
   php artisan test


This README file provides clear and detailed instructions on setting up, using the project.