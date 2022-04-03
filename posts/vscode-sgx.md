---
title: 'Debug SGX enclaves in VS Code'
date: '2022-04-03'
tag: 'TIL'
---

Debugging segmentation faults is a pain. Debugging segmentation faults in the encrypted memory space of an SGX enclave is a nightmare. Thankfully, Intel have created a GDB extension to make debugging enclaves much simpler. Obviously a production level enclave running in hardware mode cannot be debugged, but building the same code with the debug flag set makes the use of `sgx-gdb` possible.

The standard way to use `sgx-gdb` is to run the command line tool and interact with the GDB interface as normal. It's also possible to integrate `sgx-gdb` with Visual Studio Code to make debugging an even smoother experience. It does require a little bit of set up first:

* Make sure the SGX debugger is installed by running `sgx-gdb` in the command line. (It should be installed with the SDK, you may need to do a `source /opt/intel/sgxsdk/environment`)
* In VS Code, install the [Native Debug](https://marketplace.visualstudio.com/items?itemName=webfreak.debug) extension.
* Go the the "Run and Debug" tab in the VS Code sidebar (Ctrl+Shift+D).
* Click on "Create a launch.json file" to open the file editor.
* Add a configuration for each executable you want to debug, it should look something like

```json
{
  "name": "Debug enclave",
  "type": "gdb",
  "request": "launch",
  "target": "./path/to/executable",
  "cwd": "${workspaceRoot}/build-directory",
  "valuesFormatting": "parseText:",
  "gdbpath": "sgx-gdb"
}
```

* The configuration name (e.g. "Debug enclave") should not be available in the drop-down menu in the "Run and Debug" tag.
* This will launch the debugger on the target executable and should pick up any breakpoints you've set in the VS Code editor.
