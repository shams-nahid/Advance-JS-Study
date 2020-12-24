## Writing Optimized Code

Wring optimized code means helping the compiler and not to go against it.

Couple of methods and property to look out.

- eval()
- arguments
- for in
- with
- delete

Here we will briefly discuss on

- Inline Caching
- Hidden Classes

### Inline Caching

Let's we have a method `findUser`, that take a user as parameter and returns a `Template Literal` along with the user first name and last name.

```js
findUser(user) {
  return `found user ${user.firstName} ${user.lastName}`;
}

const userData = {
  firstName: 'Shams',
  lastName: 'Nahid'
}

findUser(userData);
```

If we call the method `findUser` over and over again, the compiler will cache the method as a string of followings

```
found user Shams Nahid
```

### Hidden Classes

Let's say we have a class with a constructor, having two property, `x` and `y`.

If we have 2 objects based on that class it's okay and optimized.
But as long as we start to assign new properties, compiler gets confused and assume there is no common hidden class.

```js
function MyMethod(x, y) {
  this.x = x;
  this.y = y;
}

const obj1 = new MyMethod(1, 2);
const obj2 = new MyMethod(3, 4);
```

Here by the compiler both objects `ob1` and `ob2` are considered to share the same hidden class.

But as soon as we add individual property with the objects,

```js
ob1.a = 10;
ob2.b = 25;
```

It makes the compiler slower. In this case the compiler assume that these objects does not share same hidden classes.

### Delete

Same as `hidden class`, if we delete a object property using the `delete` operator like,

```js
delete ob1.x;
```

The compiler assume the object does not sharing the same hidden class.
