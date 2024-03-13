const getFullName = (fname, lname) => {
  return fname + " " + lname;
};

const getSurname = (name, surname) => {
  return surname;
};

//module.exports = getFullName;

module.exports = { getFullName, getSurname };
