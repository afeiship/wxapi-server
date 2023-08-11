module.exports = {
  apps: [
    {
      name: 'wxapi',
      script: './dist/app.js',
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};
