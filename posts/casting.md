---
title: 'Casting in C++'
date: '2021-01-25'
tag: 'TIL'
---

Casting is the process of converting one data type into another. The conversions can be implicit, whereby an expression with a type is used in the context of a different type. Implicit conversions are common for weakly typed languages, but for a strongly typed language they should be avoided in favour of explicit casting. C++ is a strongly typed language, as a hangover from C compilers will allow implicit conversions but will usually throw a warning. 

Explicit casting refers to giving specific instructions to the compiler that one type is being converted into another. There are several available types of explicit casting available in C++ which all serve slightly different purposes.

### Static cast
* `static_cast` invokes implicit conversion between types and can also call explicit conversion functions.
* Can also cast through inheritance hierarchies, but not through virtual inheritance.
* `static_cast` is normally safe as it will only work for valid conversions.

### Const cast
* `const_cast` can remove or add const to a pointer or reference, provided the original variable being pointed to isn't `const`.
* Useful when overloading member functions based on `const`.

### Dynamic cast
* `dynamic_cast` is exclusively for polymorphism (use of single interface for entities of different types, e.g base class with children classes).
* Cast a pointer or reference of polymorphic type to any other class type.
* If it can't find the right object it will return a `nullptr` or throw a `std::bad_cast`.
* It doesn't work if there is inheritance from multiple objects of the same type (diamond) without virtual inheritance.
* Can only go through public inheritance.

### Reinterpret cast
* `reinterpret_cast` is dangerous and should be used sparingly.
* It turns one type directly into another by directly reinterpreting the bytes that make up the original type.
* Most often used for bit manipulations.

### C style casts, (type)object or type(object)
* This type of casting should be avoided in C++.
* It is defined as the first of the following which succeeds:
  + `const_cast`
  + `static_cast`
  + `static_cast` then `const_cast`
  + `reinterpret_cast`
  + `reinterpret_cast` then `const_cast`
* It's dangerous because it can devolve into `reinterpret_cast` when that behaviour isn't wanted, so it's usually best to be explicit.
