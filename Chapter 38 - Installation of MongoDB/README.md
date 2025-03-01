# MongoDB Installation Guide

## Step 1: Download MongoDB
1. Visit the official MongoDB website: [MongoDB Download](https://www.mongodb.com/try/download/community)
2. Select your operating system (Windows, macOS, or Linux).
3. Download the latest stable version of MongoDB Community Server.

---

## Step 2: Install MongoDB
### Windows:
1. Run the downloaded `.msi` installer.
2. Follow the installation wizard and select **"Complete"** setup.
3. Ensure **"Install MongoDB as a Service"** is checked.
4. Click **Install** and wait for completion.

### macOS:
1. Install MongoDB using Homebrew:
   ```sh
   brew tap mongodb/brew
   brew install mongodb-community@6.0
   ```
2. Start the MongoDB service:
   ```sh
   brew services start mongodb-community@6.0
   ```

### Linux (Ubuntu/Debian):
1. Import the public key:
   ```sh
   curl -fsSL https://pgp.mongodb.com/server-6.0.asc | sudo gpg --dearmor -o /usr/share/keyrings/mongodb-server-6.0.gpg
   ```
2. Add MongoDB repository:
   ```sh
   echo "deb [signed-by=/usr/share/keyrings/mongodb-server-6.0.gpg] https://repo.mongodb.org/apt/ubuntu focal/mongodb-org/6.0 multiverse" | sudo tee /etc/apt/sources.list.d/mongodb-org-6.0.list
   ```
3. Install MongoDB:
   ```sh
   sudo apt update
   sudo apt install -y mongodb-org
   ```
4. Start MongoDB service:
   ```sh
   sudo systemctl start mongod
   sudo systemctl enable mongod
   ```

---

## Step 3: Verify MongoDB Installation
1. Open a terminal or command prompt.
2. Run the following command to check the version:
   ```sh
   mongod --version
   ```
3. Start the MongoDB shell:
   ```sh
   mongo
   ```

---

## Step 4: Configure MongoDB
- MongoDB configuration file is located at:
  - Windows: `C:\Program Files\MongoDB\Server\6.0\bin\mongod.cfg`
  - macOS/Linux: `/etc/mongod.conf`
- You can edit this file to set custom configurations like port, authentication, etc.

---

## Step 5: Uninstall MongoDB (if needed)
### Windows:
1. Open **Control Panel > Programs > Uninstall a Program**.
2. Find **MongoDB** and uninstall it.
3. Delete `C:\Program Files\MongoDB` manually.

### macOS:
```sh
brew uninstall mongodb-community@6.0
```

### Linux:
```sh
sudo apt remove -y mongodb-org
sudo apt purge -y mongodb-org
```

---

✅ **MongoDB is now installed and ready to use!** 🚀

