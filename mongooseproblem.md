

### 🧩 **Problem 1: Task Management Schema**

Create a Mongoose schema for a **Task** model with the following:

* Fields:

  * `title` (String, required, trimmed)
  * `description` (String, optional)
  * `ownerId` (ObjectId → ref: `User`)
  * `dueDate` (Date, optional)
  * `priority` (String, enum: ["low", "medium", "high"], default: "medium")
  * `isCompleted` (Boolean, default: false)

Add:

1. A **pre-save hook** that automatically sets `isCompleted = true` if `dueDate` is in the past.
2. A method `markComplete()` to mark the task as completed and update the timestamp.
3. A method `getStatus()` to return `"✅ Done"` or `"⏳ In Progress"`.

---

### 📸 **Problem 2: User Profile Schema**

Design a **UserProfile** schema:

* Fields:

  * `userId` (ObjectId, ref: `User`, required)
  * `bio` (String, max length 200)
  * `avatar` (String, URL)
  * `lastActive` (Date, default: Date.now)
  * `followersCount` (Number, default: 0)

Add:

1. A **pre-save hook** to trim `bio`.
2. A method `updateLastActive()` that updates `lastActive` to now.
3. A method `getProfileSummary()` returning `{ bio, followersCount }`.

---

### 🧾 **Problem 3: Expense Tracker Schema**

Create an **Expense** model:

* Fields:

  * `amount` (Number, required)
  * `category` (String, enum: ["food", "travel", "bills", "other"], default: "other")
  * `description` (String)
  * `userId` (ObjectId, ref: "User", required)
  * `date` (Date, default: Date.now)
  * `isSynced` (Boolean, default: false)

Add:

1. A **pre-save hook** that sets category to `"other"` if empty.
2. A method `markSynced()` that marks it as synced.
3. A method `getSummary()` returning `"₹<amount> spent on <category>"`.

---

### 🗓️ **Problem 4: Event Schema**

Build an **Event** model for a calendar app:

* Fields:

  * `name` (String, required)
  * `description` (String)
  * `organizerId` (ObjectId, ref: `User`)
  * `location` (String)
  * `startTime` (Date, required)
  * `endTime` (Date, required)
  * `isPublic` (Boolean, default: true)

Add:

1. A **pre-validate hook** to ensure `endTime > startTime`.
2. A method `duration()` returning duration in minutes.
3. A method `getEventStatus()` returning `"⏰ Upcoming"`, `"✅ Ongoing"`, or `"🕒 Ended"`.

---

### 💬 **Problem 5: Chat Message Schema**

Design a **Message** schema:

* Fields:

  * `senderId` (ObjectId, ref: "User", required)
  * `receiverId` (ObjectId, ref: "User", required)
  * `content` (String, required)
  * `isRead` (Boolean, default: false)
  * `deliveredAt` (Date)
  * `readAt` (Date)

Add:

1. A **pre-save hook** that sets `deliveredAt` = Date.now() if not already set.
2. A method `markAsRead()` → sets `isRead = true`, `readAt = now`.
3. A method `getDeliveryStatus()` → returns `"📨 Delivered"` or `"✅ Read"`.


