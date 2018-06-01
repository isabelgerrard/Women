var allProfiles = [];
var idStart = -1;

function Woman(name, imgName, bio){
    this.iD = idStart++;
    this.bio = bio;
    this.name = name;
    this.imgName = imgName;
    this.imgID = "img" + this.iD;
    this.image = "<img id='" + this.imgID + "' src='img/" + imgName + ".png' width='150'>";

}

allProfiles.push(new Woman('Name', "womanicon", "Insert Bio Here"));
allProfiles.push(new Woman('Name', "womanicon", "Insert Bio Here"));
allProfiles.push(new Woman('Name', "womanicon", "Insert Bio Here"));
allProfiles.push(new Woman("Name", "womanicon", "Insert Bio Here"));
allProfiles.push(new Woman("Name", "womanicon", "Insert Bio Here"));
allProfiles.push(new Woman("Name", "womanicon", "Insert Bio Here"));

// <span id=" + "'class" + this.id  + "' correct='" + questionsAnswersArray[j].correct +"'/span>" +
// questionsAnswersArray[j].ans + "</span>