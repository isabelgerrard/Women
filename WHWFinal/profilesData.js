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

allProfiles.push(new Woman('Jane Doe', "pp3", "Laura was 18 when she was evicted. Sadly, a homeless centre was the only option left for her. \n" +
    "\n" +
    "Despite the homeless centre informing external services that they didn't have accommodation available for Laura, she was dropped at the door of a drop-in centre at 4pm with her possessions and with no plan. \n" +
    "\n" +
    "There was no viable option for accommodation so the agency who dropped her off suggested that she stayed with a friend who lived in supported accommodation. With no permission from the landlord, this situation placed the friend in breech of her tenancy. \n" +
    "\n" +
    "At this point in her life, Laura had left care for just a few months. She had no positive role models in her life and did not grow up learning the skills others often take for granted. \n" +
    "\n" +
    "She had been victim to repeated abuse and would spend long periods out of contact. On some occasions, she was registered as 'missing persons'. The abuse, as well as other scarring life events, have left her with little trust for others. \n" +
    "\n" +
    "Agencies continue to work together to try to assist Laura but she continues to move through life from one crisis to another. She is a very vulnerable person. Meanwhile, safe and appropriate accommodation is hard to find. \n" +
    "\n" +
    "Laura eventually sabotaged all efforts to assist her and failed to attend numerous support and safeguarding meetings. \n" +
    "\n" +
    "She is currently living with her family, but should this come to an end, her lifestyle means that she will remain a concern of sexual exploitation."));
allProfiles.push(new Woman('Name', "pp5", "Insert Bio Here"));
allProfiles.push(new Woman('Name', "pp1", "Insert Bio Here"));
allProfiles.push(new Woman("Name", "pp2", "Insert Bio Here"));
allProfiles.push(new Woman("Name", "pp4", "Insert Bio Here"));
allProfiles.push(new Woman("Name", "pp6", "Insert Bio Here"));

// <span id=" + "'class" + this.id  + "' correct='" + questionsAnswersArray[j].correct +"'/span>" +
// questionsAnswersArray[j].ans + "</span>