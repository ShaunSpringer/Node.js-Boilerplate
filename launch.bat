IF EXIST ".\data\db\" GOTO END

md ".\data\db\"

:END
start mongod --dbpath ./data/db
start nodemon app.js