import axios from "axios";

// export default function generateJoke() {
//   return "I don't trust stairs. They're alwasy up to something.";
// }

const generateJoke = () => {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  axios.get("https://icanhazdadjoke.com", config).then((resp) => {
    document.getElementById("joke").innerHTML = resp.data.joke;
    console.log(resp);
  });

  //return "I don't trust stairs. They're alwasy up to something.";
};

export default generateJoke;
