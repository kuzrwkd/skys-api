module.exports = {
  apps: [
    {
      name: 'investment-support-api',
      script: 'DEBUG=app:* npm start',
      instances: 1,
      autorestart: true,
      restart_delay: 5000,
      watch: ['dist'],
      watch_delay: 1000,
      watch_options: {
        followSymlinks: false,
      },
    },
  ],
}
