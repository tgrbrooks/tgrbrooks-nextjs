---
title: 'Casting in C++'
date: '2021-01-25'
tag: 'TIL'
---

### Static cast
* First one to try
* Implicit conversion between types and can also call explicit conversion functions
* Can also cast through inheritance hierarchies, but not through virtual inheritance

### Const cast
* Remove or add const to a variable, provided the original variable being pointed to isn't const
* Useful when overloading member functions based on const

### Dynamic cast
* Exclusively for polymorphism (use of single interface for entities of different types, e.g base class with children classes)
* Cast a pointer or reference of polymorphic type to any other class type
* If it can't find the right object it will return a nullptr or throw a std::bad_cast
* Doesn't work if there is inheritance from multiple objects of the same type (diamond) without virtual inheritance
* Can only go through public inheritance

### Reinterpret cast
* Dangerous and should be used sparingly
* Turns one type directly into another
* Most often used for bit manipulations

### C style casts, (type)object or type(object)
* Should be avoided
* Defined as the first of the following which succeeds:
  + `const_cast`
  + `static_cast`
  + `static_cast` then `const_cast`
  + `reinterpret_cast`
  + `reinterpret_cast` then `const_cast`
* Dangerous because it can devolve into `reinterpret_cast` when that behaviour isn't wanted, so it's usually best to be explicit.