module.exports = {
  apps: [
    {
      name: 'skys-api-app-pod',
      script: 'dist/server/main.js',
      instances: 1,
      autorestart: true,
      watch: false,
      max_memory_restart: '1G',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
