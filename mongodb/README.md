# MongoDB


## Connect to your MongoDB server

We offer two ways to connect to your MongoDB server, using the web UI Admin Mongo or using the Mongo CLI.


### Using Admin Mongo

To do that, just connect to your service in Stackhero's console, then go to the "admin panel".

You'll be connected then as user `admin`.


### Using Mongo CLI

You can use this command to connect with the Mongo CLI: `mongo mongodb://<user>:<password>@XXXX.stackhero-network.com:27017/<database>?ssl=true`.

If you want to connect as `admin` to the database `admin`, you can use this command: `mongo mongodb://admin:<password>@XXXX.stackhero-network.com:27017/admin?ssl=true`.


## Create databases / users

We strongly recommend to create a user per database.

To do that, you can use this command: `db.getSiblingDB("myDatabase").createUser({ user: "myUser", pwd: "myPassword", roles: [ { role: "readWrite", db: "myDatabase" } ], passwordDigestor: "server" })`.

In this case, you'll create a user named `myUser`, with password `myPassword` and roles read and write to the database named `myDatabase`.

Remember that you should be connected as `admin` to perform this.


## Drop a user

You can drop a user `myUser` from a database `myDatabase` by using the command `db.getSiblingDB("myDatabase").dropUser("myUser")`.


## Troubleshooting


### Error `Use of SCRAM-SHA-256 requires undigested passwords`

You can get this error when trying to create a user with Admin Mongo UI.

To avoid this error, use the Mongo query you'll find in [Create databases / users](#create-databases-/-users).

