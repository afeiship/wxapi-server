# wxapi-server
> Api server for wechat.

## get-started

```shell
# clone
git clone git@github.com:afeiship/wxapi-server.git

# install
cd wxapi-server
yarn
yarn build

# run with pm2
pm2 start wxapi
```

## nginx
> proxy to this api.

```conf
location /wxapi {
    proxy_pass http://127.0.0.1:3300;
    # rewrite ^/wxapi/(.*) /$1 break;
}
```