const baseUrl = "https://materi-thrive-demo.vercel.app";
export default {
  allHeroes: baseUrl + "/api/hero",
  chooseHeroes: baseUrl + "/api/hero/", //with id heroes
  selectCity: baseUrl + "/api/city",
  allVillains: baseUrl + "/api/villain",
  chooseVillain: baseUrl + "/api/villain/", //with id villain
  fighting: baseUrl + "/api/fight",
};
