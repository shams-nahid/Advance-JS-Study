**1. What is the difference between __proto__ and prototype?**

__proto__ and prototype are both related to object inheritance in JavaScript, but they serve different purposes.

__proto__ is a property that is present on every object in JavaScript and points to the object's prototype. In other words, it is a reference to the object's parent. It is used to implement prototype-based inheritance, which allows objects to inherit properties and methods from their parent objects.

For example, if you have an object child that inherits from another object parent, then child.__proto__ would point to parent. This allows child to access properties and methods defined on parent.

On the other hand, prototype is a property that is only present on functions in JavaScript. It is used to define the prototype object for objects created using that function as a constructor. When a function is used as a constructor with the new keyword, the resulting object inherits properties and methods from the prototype object defined on the function's prototype property.

For example, if you define a function Person with a prototype object that contains a greet method, and then create an object john using the new keyword and the Person constructor, then john will inherit the greet method from Person.prototype.

In summary, __proto__ is a property that points to an object's parent, while prototype is a property that defines the prototype object for objects created using a function as a constructor.

```js
// Define a parent object
const parent = {
  greeting: "Hello, World!",
};

// Define a child object that inherits from the parent object
const child = Object.create(parent);

// The __proto__ property of the child object points to the parent object
console.log(child.__proto__ === parent); // true

// Define a constructor function that sets a property on objects created with it
function Person(name) {
  this.name = name;
}

// Add a method to the Person constructor's prototype object
Person.prototype.greet = function() {
  console.log(`Hello, my name is ${this.name}`);
};

// Create an object using the Person constructor
const john = new Person("John");

// The __proto__ property of the john object points to the Person constructor's prototype object
console.log(john.__proto__ === Person.prototype); // true

// The greet method is inherited from Person.prototype
john.greet(); // logs "Hello, my name is John"
```

**2. What is the prototype chain?**

Prototype is a special hidden property in JavaScript objects, and each object can access its prototype through __proto__. The prototype itself is an object, so it also has its own prototype. When we try to access an attribute of an object, if the object does not have the required attribute, it will look for it in its prototype. If the prototype still does not find it, it will continue to look up one level until it is found, or until it reaches null. This continuous path is called the prototype chain, and the end of the chain is null.

```js
personA.__proto__.__proto__.__proto__ === null;
```

**3. What is prototypal inheritance?**

The prototype chain is a very important concept in JavaScript, but it is not enough to understand the prototype chain. To answer this question, we can understand it through why we need prototypal inheritance.

Assume that there is an object "animal", which has its own properties and methods. At the same time, we want to create two objects based on "animal", namely "cat" and "dog". These two objects will have some unique methods and properties, but at the same time need to use the methods and properties of the "animal" object. In JavaScript, we don't need to copy or reimplement it, but we can achieve this goal through prototypal inheritance.

To sum up, although the "cat" and "dog" objects themselves do not have the methods of the "animal" object, they can inherit the methods from their prototypes to use them. In practice, we will add properties or methods to the prototype. Then all objects that are instantiated from this object can use this method or property.

```js
// Constructor function Animal
function Animal() {}

// Instance of Animal
const cat = new Animal();

// Add a method to the prototype object
Animal.prototype.sleep = function () {
  console.log('sleep');
};

// Use the method of the constructor function's prototype
cat.sleep(); // sleep
```

**4. Whats the difference between prototypal inheritence and prototypal chain?**

Prototypal inheritance and the prototypal chain are closely related concepts in JavaScript, but they refer to slightly different aspects of object-oriented programming.

Prototypal inheritance is a way of creating objects based on existing objects. In JavaScript, this is done using the Object.create() method, which creates a new object with a specified prototype object. The new object inherits all the properties and methods of its prototype object.

For example:

```js
const parent = {
  greeting: "Hello, World!",
};

const child = Object.create(parent);

console.log(child.greeting); // logs "Hello, World!"
```

In this example, child is created with a prototype object of parent. As a result, it inherits the greeting property from parent.

The prototypal chain, on the other hand, is the chain of prototype objects that exists between an object and the base Object.prototype. When a property or method is accessed on an object, JavaScript first looks for the property or method on the object itself. If it doesn't find it, it then looks for it on the object's prototype object. This process continues up the prototypal chain until the property or method is found, or until the base Object.prototype is reached.

For example:

```js
const parent = {
  greeting: "Hello, World!",
};

const child = Object.create(parent);

console.log(child.toString()); // logs "[object Object]"
```

In this example, child doesn't have its own toString() method. However, JavaScript finds a toString() method on Object.prototype by following the prototypal chain from child to parent to Object.prototype.

In summary, prototypal inheritance is a way of creating objects based on existing objects, while the prototypal chain is the chain of prototype objects that exists between an object and the base Object.prototype. The prototypal chain is used by JavaScript to look up properties and methods on objects and their prototype objects.