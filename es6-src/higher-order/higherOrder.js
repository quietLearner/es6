import { posts } from "./posts";

//higher order function
const higherOrder = () => {
  posts.forEach((post) => {
    console.log(post);
  });

  console.clear();

  const filteredPosts = posts.filter((post) => {
    return post.userId === 1;
  });

  console.log(filteredPosts);

  // only return array of post id * 10
  const postIds = filteredPosts.map((post) => {
    return post.id * 10;
  });

  console.log(postIds);

  const sumOfPostIds = postIds.reduce((sum, id) => {
    return sum + id;
  });

  console.log(sumOfPostIds);

  const companies = [
    { name: "Company One", category: "Finance", start: 1981, end: 2004 },
    { name: "Company Two", category: "Retail", start: 1992, end: 2008 },
    { name: "Company Three", category: "Auto", start: 1999, end: 2007 },
    { name: "Company Four", category: "Retail", start: 1989, end: 2010 },
    { name: "Company Five", category: "Technology", start: 2009, end: 2014 },
    { name: "Company Six", category: "Finance", start: 1987, end: 2010 },
    { name: "Company Seven", category: "Auto", start: 1986, end: 1996 },
    { name: "Company Eight", category: "Technology", start: 2011, end: 2016 },
    { name: "Company Nine", category: "Retail", start: 1981, end: 1989 },
  ];

  const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

  for (let i = 0; i < companies.length; i++) {
    console.log(companies[i]);
  }

  companies.forEach((company, index, companies) => {
    console.log(index, companies);
  });

  /*
  spread ... allows us to quickly copy all or part of an existing array or object into another array or object.
  */
  const mappedComs = companies.map((company) =>
    company.category === "Finance"
      ? { ...companies, name: company.name + " why is this?" }
      : company
  );

  console.log("mappedComs ", mappedComs);

  const myVehicle = {
    brand: "Ford",
    model: "Mustang",
    color: "red",
  };

  const updateMyVehicle = {
    type: "car",
    year: 2021,
    color: "yellow",
  };

  const myUpdatedVehicle = { ...myVehicle, ...updateMyVehicle, age: 20 };

  console.log(myUpdatedVehicle);
};

export default higherOrder;
