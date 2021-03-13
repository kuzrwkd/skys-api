module.exports = {
  apps: [{
    script : "DEBUG=app:* npm start",
    instances: 1,
    autorestart: true,
    restart_delay: 5000,
    watch: true,
    watch_delay: 1000,
    ignore_watch : ["node_modules", "log-*.txt"],
    watch_options: {
      "followSymlinks": false
    }
  }]
}
