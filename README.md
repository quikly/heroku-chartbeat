# heroku-chartbeat

A very simple heroku plugin that fetches the number of active visitors on your site from the Chartbeat API.

This plugin assumes you have ENV variables in your app for `CHARTBEAT_API_KEY` and `DOMAIN`.

Install with `heroku plugins:install heroku-chartbeat`

Run with: `heroku chartbeat:active -a your-app-name`
