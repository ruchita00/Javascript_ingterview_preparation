//node js also have js runtime env
//all browser have their own js engine microsoft has chakra
//firefox has spidermonkey
//chrome , nodes js , deno has v8 engine
//you can create your own js engine as well

//how js engine works
//it takes code code go through 3 step parsing , compliation, exexcution

// parsing  : broken down into token, syntax parser: job is syntax parser basically takes code cone=vert into abstract syntax tree.

//ast generated pass to the complilation phase and execution phase goes hand in hand

//js has just in time comilation

//interpreter: it takes code and start executing code line by line, it is fastly executed

//complier: whole code compile before execution and new code is form this optimize version of code then it is executed, more effienecy

//js behave like interpreted lang and compile lang

//js has just in time comilation both interpretter and complier execute the code

//ast goes to interpretter and interpretter convert high level code code most to ececution step meanwhile complier also optimize code as much as possible on runtime

// in the execution phase we have memory heap and callstack
// memory heap all the memory stored it is constanly async with garbage collector, so the memory heap is space where all the fuctions and variables are assigned into memory

//garbage collector : it basically try to freeup memory space when ever possible.
//mark and sweep algorithm: is widely used gc

//thier are other forms of optimization complier does for code --inline cashing, inlining ,copy elision

//v8 has turbo fan optimizing complier
//interpretter: ignition
