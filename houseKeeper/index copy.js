function HouseKeeper(name, age, hasWorkPermit, languages, yearsOfExperience, cleaningRegions) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
    this.yearsOfExperience = yearsOfExperience;
    this.cleaningRegions = cleaningRegions;
    this.clean = function () {
        alert("cleaning in progress");
    }
}
//var houseKeeper = new HouseKeeper("jannete", 19, true, "English", 5, "kitchen")
