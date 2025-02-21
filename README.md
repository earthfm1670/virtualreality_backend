**Virtualreality Backend Assignment**

![ERD Diagram](https://raw.githubusercontent.com/earthfm1670/virtualreality_backend/refs/heads/main/Backend%20Test%20ERD.drawio.png)


Follow these steps to set up and run the project locally.

1. Clone the repository onto your local machine

```
git clone git@github.com:earthfm1670/virtualreality_backend.git
```

2. Install dependencies

```
npm install
```

3. Setup environment variables

Create .env file in your root directory

```
touch .env
```

Add your Database to .env file

```
DB_HOST="host_name"
DB_NAME="your_name"
DB_USERNAME="your_db_username"
DB_PASSWORD="your_db_password"
DB_PORT="your_db_port"
```

4. Test seed

```
npm run seed
```
