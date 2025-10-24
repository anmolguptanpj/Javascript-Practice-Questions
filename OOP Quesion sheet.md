

## 🚀 **EASY LEVEL (Core OOP Basics)**

Focus: `Classes`, `Constructors`, `Methods`, and simple `Instances`.

### **1. Product Inventory (Encapsulation Basics)**

**Problem:**
Create a `Product` class with properties: `name`, `price`, and `stock`.
Add methods:

* `sell(quantity)` → decreases stock.
* `restock(quantity)` → increases stock.
* Prevent selling if stock is insufficient.

**Goal:** Learn how to use *methods to control access to data* (encapsulation).

---

### **2. Student Record (Class + Simple Method)**

**Problem:**
Make a `Student` class with `name`, `marks`, and a method `getGrade()` that:

* Returns `"A"` if marks ≥ 90,
* `"B"` if ≥ 75, else `"C"`.

**Goal:** Get comfortable writing simple logic inside class methods.

---

### **3. Bank Account (Private Fields)**

**Problem:**
Use `#balance` as a private field.
Add methods:

* `deposit(amount)`
* `withdraw(amount)` (only if enough balance)
* `getBalance()`

**Goal:** Practice *encapsulation and private class fields* in modern JS.

---

## ⚙️ **MEDIUM LEVEL (Inheritance + Composition)**

Focus: `Inheritance`, `Extending classes`, and simple real-world modeling.

### **1. Vehicle Management System**

**Problem:**

* Base class: `Vehicle` → `make`, `model`, `year`, and method `displayInfo()`.
* Derived classes:

  * `Car` → adds `fuelType`
  * `ElectricCar` → adds `batteryCapacity`
    Override `displayInfo()` to include all details.

**Goal:** Learn *inheritance and method overriding*.

---

### **2. Online Food Delivery (Composition + Real-life Example)**

**Problem:**
Classes:

* `Restaurant` → `name`, `menu` (array of items)
* `Order` → `items`, `totalPrice()` method
  A restaurant can create multiple orders (composition).

**Goal:** Combine multiple classes to model real-life relationships.

---

### **3. Employee Hierarchy**

**Problem:**
`Employee` base class → `name`, `salary`.
Derived:

* `Manager` → adds `teamSize`, `bonus()` returns 10% of salary.
* `Developer` → adds `techStack`, `bonus()` returns 5%.
  Print all employee info + their total pay.

**Goal:** Learn *overriding and polymorphism*.

---

## 💎 **HARD LEVEL (Abstraction + Real-world Simulation)**

Focus: *Design thinking, abstraction, and applying multiple OOP concepts together.*

### **1. Payment Gateway System**

**Problem:**
Abstract class `Payment` → method `processPayment()`.
Derived:

* `CreditCardPayment`
* `UPIPayment`
  Each class must define how the payment is processed and display success/failure messages.

**Goal:** Understand *abstraction and polymorphism* for real-world APIs.

---

### **2. Smart Home Device Controller**

**Problem:**
Base class: `SmartDevice` → `deviceName`, `status` (on/off).
Derived:

* `Light`
* `AC`
* `Speaker`
  Each overrides `turnOn()` and `turnOff()` differently (for example, speaker says "Playing music").

**Goal:** Practice designing extensible systems like real smart-home apps.

---

### **3. E-commerce Cart System (Multi-Class Integration)**

**Problem:**
You must build:

* `User` → name, email
* `Product` → name, price
* `Cart` → manages items and calculates total
* `Order` → stores cart + user info + order ID

Implement:

* Add/remove products to cart
* Checkout → converts cart into an order and clears it.

