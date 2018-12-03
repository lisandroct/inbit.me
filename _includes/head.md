<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>{{site.title}}</title>
    <meta name="description" content="{% if page.description %}{{ page.description }}{% else %}{% if page.excerpt %}{{ page.excerpt | strip_html | strip | strip_newlines }}{% else %}{{site.description}}{% endif %}{% endif %}">
    <meta name="keywords" content="{% for keyword in site.keywords %}{{keyword | downcase}}{% unless forloop.last %}, {% endunless} %}{% endfor %}">
    <meta name="author" content="{{site.title}}">

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png">
    <link rel="manifest" href="/site.webmanifest">
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5">
    <meta name="msapplication-TileColor" content="#da532c">
    <meta name="theme-color" content="#ffffff">
</head>
<body>
