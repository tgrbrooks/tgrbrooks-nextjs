---
title: 'Creating a Library with GCC'
date: '2021-01-21'
tag: 'TIL'
---

A library is a collection of files containing compiled machine code, called object files. GCC is a compiler that supports several languages such as C and C++, it converts human readable code into machine code so that it can be executed. Usually library files cannot be executed on their own, they must be linked to an executable that calls functions from the library.

GCC can be used to create object files from source code files:

```bash
gcc -c < source file > -o < object file >
```

You need to add the `-fPIC` flag for shared library. This makes the code position independent, meaning that the machine code doesn't rely on being at a specific memory address in order to work.

### Static libraries
A static library is just a set of object files copied into a single file with suffix `.a`. Static linking copies all of the code to the binary executable.

Static libraries can be created using the Unix archiver (``ar``).

```bash
ar rcs lib< name >.a < object files >
```

The static library can then be linked to the main executable using GCC.

```bash
gcc < main object file > -L< dir > -l< lib > -o < executable >
```

* `-L` = non standard directory where libraries can be found
* `-l` = library name

### Shared libraries
Shared libraries (`.so` files) are referenced by programs during runtime. Hence the name shared, because they can be shared between multiple programs.

GCC can be used to create shared libraries from position independent object files. 

```bash
gcc -shared < object files > -o < shared object file >
```

Linking shared libraries into an executable is the same as with static libraries.
