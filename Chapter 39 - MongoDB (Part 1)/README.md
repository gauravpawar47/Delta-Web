# MongoDB Cheat Sheet

## 1. The Mongo Shell
MongoDB provides an interactive shell to interact with the database.
```sh
mongo
```
This command starts the MongoDB shell if the MongoDB server is running.

---

## 2. How to Store Data (BSON)
MongoDB stores data in **BSON** (Binary JSON) format, which is similar to JSON but optimized for efficiency.
```json
{
  "name": "John Doe",
  "age": 30,
  "skills": ["JavaScript", "MongoDB"]
}
```

---

## 3. Document & Collection
- **Document**: A single JSON-like record stored in a collection.
- **Collection**: A group of documents stored in a MongoDB database.

Example:
```json
{
  "_id": ObjectId("507f191e810c19729de860ea"),
  "name": "Alice",
  "city": "New York"
}
```

---

## 4. Insert a Document (insertOne)
Inserts a single document into a collection.
```js
db.users.insertOne({ "name": "Alice", "age": 25 });
```

---

## 5. Insert Multiple Documents (insertMany)
Inserts multiple documents at once.
```js
db.users.insertMany([
  { "name": "Bob", "age": 30 },
  { "name": "Charlie", "age": 35 }
]);
```

---

## 6. Find Documents in a Collection
Retrieves documents from a collection.
```js
db.users.find(); // Fetch all documents
```
Find documents with specific conditions:
```js
db.users.find({ "age": 30 });
```

---

## 7. Query Operators
MongoDB provides various operators to filter data efficiently.

- **$gt (greater than)**:
  ```js
  db.users.find({ "age": { "$gt": 25 } });
  ```
- **$lt (less than)**:
  ```js
  db.users.find({ "age": { "$lt": 30 } });
  ```
- **$in (match multiple values)**:
  ```js
  db.users.find({ "city": { "$in": ["New York", "Los Angeles"] } });
  ```
- **$and (multiple conditions)**:
  ```js
  db.users.find({ "$and": [{ "age": { "$gt": 25 } }, { "city": "New York" }] });
  ```

---

## 8. Update Documents in a Collection
- **Update a single document**:
  ```js
  db.users.updateOne(
    { "name": "Alice" },
    { "$set": { "city": "San Francisco" } }
  );
  ```
- **Update multiple documents**:
  ```js
  db.users.updateMany(
    { "age": { "$lt": 30 } },
    { "$set": { "status": "Active" } }
  );
  ```

---

## 9. Nesting in MongoDB
Documents can have nested structures, allowing complex data representations.
```js
db.users.insertOne({
  "name": "David",
  "contact": {
    "email": "david@example.com",
    "phone": "123-456-7890"
  }
});
```
Retrieve nested fields:
```js
db.users.find({ "contact.email": "david@example.com" });
```

---

## 10. Delete Documents in a Collection
- **Delete a single document**:
  ```js
  db.users.deleteOne({ "name": "Alice" });
  ```
- **Delete multiple documents**:
  ```js
  db.users.deleteMany({ "age": { "$lt": 25 } });
  ```
- **Delete all documents in a collection**:
  ```js
  db.users.deleteMany({});
  ```

---

### 📌 Notes
- MongoDB is **schema-less**, meaning you don't have to define a fixed structure for your documents.
- The **_id** field is automatically generated and serves as the primary key.
- Queries can be optimized using **indexes** for better performance.

💡 *Explore more at:* [MongoDB Docs](https://www.mongodb.com/docs/)

---

🚀 **Happy Coding with MongoDB!**