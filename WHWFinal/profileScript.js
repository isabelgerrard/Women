$(document).ready(function(){
    var result = "<table id='profilesDisplayTable' cellpadding=25><tr>";
        for(var i = 0; i<allProfiles.length; i++){
            if(i!=0 && i%3 == 0){
                result+="</tr>";
            }

            result += "<td><table class='profClass'><tr>";
            result += "<td>" + allProfiles[i].name + "</td>";
            result += "</tr>" +  "<tr id='img" + i + "'>";
            result += "<td class='imgToClick'>" + allProfiles[i].image + "</td>";
            result += "</tr></table>";
            result += "</td>";

            // if(i!=0 && i%3 == 0){
            //     result+="<tr>";
            // }
        }
    result += "</tr></table>";
    document.getElementById("profilesDisplay").innerHTML = result;


    $('.imgToClick').on('click', function(){
        $('.profClass').hide('fast');
        console.log(this);
        console.log(findWomanByClassSelect(this));
        document.getElementById("bioDisplay").innerHTML = findWomanByClassSelect(this);
        console.log(document.getElementById("bioDisplay").innerHTML);
        document.getElementById("introText").innerHTML = "Click the Bio to Return to All Profiles.";
        $('#bioDisplay').show();
    });
    $('#bioDisplay').on('click', function(){
        $('#bioDisplay').hide('fast');
        $('.profClass').show('fast');
        document.getElementById("introText").innerHTML = "Click an Image to Learn More.";
    })

});

function findWomanByClassSelect(td){
    console.log(td.childNodes[0].id);
    var usingImageID = td.childNodes[0].id;
    for(var i = 0; i < allProfiles.length; i++){
        if(allProfiles[i].imgID == usingImageID){
            return "<table cellpadding=25><tr class='title'>" + allProfiles[i].name + "</tr><br><br><tr>" + allProfiles[i].bio + "</tr></table>";
        }
    }
}
