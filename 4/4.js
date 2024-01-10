function a() {
  var b = 10;
  c();
  function c() {
    console.log(b);
  }
}
a();
// console.log(b);

// scope is directly depends on lexical env
//whenever the execution context is created the lexical env is also created
//lexical env is the local memory along with or reference to lexical env of its parent
//lexical meaning as hirecachi or sequence
// export. c function is lexically setting inside a function
// and a() is lexically inside the global scope

//at the global level lexical env of global ex is null

//if the js engine does not find anything in the local memory it goes i 1 next level of scope chain, it does not find any local memory it goes again next level of scope chain this whole thing of lexical env called scope chain.

//c can access to lexical env of its parent a
// c can access to a scope also is called lexical 