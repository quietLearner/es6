const localStorage = () => {
  const arr = ["eat", "sleep", "code"];
  console.log(typeof arr); //object

  const obj = {
    name: "chandler",
    hobbies: ["eat", "sleep", "code"],
    logName: function () {
      console.log(this.name);
    },
  };

  obj.logName();

  //open chrome -> f12-> application-> storage-> session storage
  sessionStorage.setItem("mySessionStore1", obj);
  sessionStorage.setItem("mySessionStore2", arr);
  sessionStorage.setItem("mySessionStore3", JSON.stringify(obj));
  sessionStorage.setItem("mySessionStore4", JSON.stringify(arr));

  const mySessionData1 = sessionStorage.getItem("mySessionStore1");
  console.log(mySessionData1); //[object, object]

  const mySessionData2 = sessionStorage.getItem("mySessionStore2");
  console.log(mySessionData2, typeof mySessionData2); //eat,sleep,code, string, not like an array

  const mySessionData3 = sessionStorage.getItem("mySessionStore3");
  console.log(mySessionData3, typeof mySessionData3); //{"name":"chandler","hobbies":["eat","sleep","code"]}, function is gone, string
  console.log(JSON.parse(mySessionData3), typeof JSON.parse(mySessionData3)); //object

  const mySessionData4 = sessionStorage.getItem("mySessionStore4");
  console.log(mySessionData4, typeof mySessionData4); //["eat","sleep","code"], string
  console.log(JSON.parse(mySessionData4), typeof JSON.parse(mySessionData4)); //object

  //local storage
  window.localStorage.setItem("myLocalStorage1", JSON.stringify(obj));
  window.localStorage.setItem("myLocalStorage2", JSON.stringify(arr));

  const myLocalStorageData1 = window.localStorage.getItem("myLocalStorage1");
  console.log(
    JSON.parse(myLocalStorageData1),
    typeof JSON.parse(myLocalStorageData1)
  );

  const myLocalStorageData2 = window.localStorage.getItem("myLocalStorage2");
  console.log(
    JSON.parse(myLocalStorageData2),
    typeof JSON.parse(myLocalStorageData2)
  );
  window.localStorage.removeItem("myLocalStorage2");
};

//clear out local storage
window.localStorage.clear();

export default localStorage;
