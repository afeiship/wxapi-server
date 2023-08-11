module.exports = {
  apps: [
    {
      name: 'wxapi',
      script: './dist/main.js',
      instances: 1,
      autorestart: true,
      watch: false
    }
  ]
};
