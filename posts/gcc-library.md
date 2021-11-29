---
title: 'Creating a Library with GCC'
date: '2021-01-21'
tag: 'TIL'
---

Create object files from source code files:

```bash
gcc -c < source file > -o < object file >
```

* Need `-fPIC` flag for shared library, this makes the code position independent, meaning that the machine code doesn't rely on being at a specific memory address in order to work.

### Static libraries
A static library is just a set of object files copied into a single file with suffix `.a`. Static linking copies all of the code to the binary executable.
Create static library with:

```bash
ar rcs lib< name >.a < object files >
```

Link a library to the main executable:

```bash
gcc < main object file > -L< dir > -l< lib > -o < executable >
```

* `-L` = non standard directory where libraries can be found
* `-l` = library name

### Shared libraries
Shared libraries (`.so`) are referenced by programs during runtime (hence shared, because they can be shared between multiple programs).
Create shared library with: 

```bash
gcc -shared < object files > -o < shared object file >
```

* Linking is the same as with static libraries