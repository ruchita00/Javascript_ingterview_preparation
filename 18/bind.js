let name = {
  firstName: "Akshay",
  lastName: "saini",
  printFullName: function () {
    console.log(this.firstName, this.lastName);
  },
};

//each and every function in js has access to this keyword
