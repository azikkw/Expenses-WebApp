# Expenses Web-App

> Expenses-WebApp is a web application with which you can effectively allocate your expenses. With it, you can record your expenses and watch.

#### In this project used:
1. React JS
2. Nest.js
3. PostgreSQL

---

## 📤 IMPORTING
Step-by-step instructions for importing the `Expenses Web-App` project.

#### 1. Downloading

Clone project using the `git clone` command. To do this, you need to go to the command prompt and specify the path to the folder where you will import the project.

Next you will need to enter the following:
```bash
git clone https://github.com/azikkw/Expenses-WebApp.git
```

You can also [download ZIP archive](https://github.com/azikkw/Expenses-WebApp/archive/refs/heads/main.zip) and unpack it to the folder you want.

#### 2. Installing libraries and modules for the back-side and front-side
Since the `front and back sides` of the project goes without the necessary libraries and modules, you will need to install them.

First you have to enter the **expenses-server folder**. After that, you need to enter the following command:

      npm install

Second you have to enter the **expenses-front folder**. After that, you need to enter the following command:

      npm install

---

## 📝 PREPARING FOR START
In the back-side, in `app.module.ts` you need to change username and password of the postgres:
```bash
username: 'postgres',
password: 'postgres' 
```
Change them to your username and password of postgres.

After create database called `expensesdb`.

## ▶️ PROJECT START
To run the `back-side` of the project, you must enter the **expenses-server folder** and enter the following command:

      npm start
      
To run the `front-side` of the project, you must enter the **expenses-front folder** and enter the following command:

      npm start

#### Once project is running you can access it at:
> front-side: http://localhost:3000

> back-side: http://localhost:4000
