<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title inertia>{{ config('app.name', 'Laravel') }}</title>
    <link
        href="https://fonts.googleapis.com/css2?family=Caveat:wght@700&display=swap"
        rel="stylesheet"
    />
    <!-- Scripts -->
    @viteReactRefresh
    @vite('resources/js/App.tsx')
    @inertiaHead
</head>

<body>
@inertia
</body>
</html>
