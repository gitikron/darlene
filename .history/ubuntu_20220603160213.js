upstream MY_APP {
    server 127.0 .0 .1: 3000;
    server 127.0 .0 .1: 3000 max_fails = 1 fail_timeout = 30 s backup;
    keepalive 64;
}

server {
    listen 80 default_server;
    server_name _;
    location / {
        proxy_set_header X - Forwarded - For $proxy_add_x_forwarded_for;
        proxy_set_header Host $http_host;
        proxy_set_header X - NginX - Proxy true;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection "upgrade";
        proxy_max_temp_file_size 0;
        proxy_pass http: //MY_APP/;
            proxy_redirect off;
        proxy_read_timeout 240 s;
    }

}