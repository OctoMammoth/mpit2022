#!/bin/bash
if ! type pm2 > /dev/null
then
    sudo npm install -g pm2 && pm2 start ecosystem.config.js --only NodeServer
else
    pm2 restart my_project_name
fi