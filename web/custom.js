$(function () {
    $('#comments').keyup(function () {
        /* comment based parsing*/
        var comment = $('#comments').val().toLowerCase();
        if (comment.indexOf("rainbow") != -1) {
            $('.content').css('background', 'linear-gradient(to bottom, rgba(255,44,40,1) 0%,rgba(255,128,0,1) 17%,rgba(255,246,0,1) 34%,rgba(0,170,0,1) 50%,rgba(0,219,201,1) 66%,rgba(43,0,216,1) 83%,rgba(165,46,121,1) 100%)');
        } else if (comment.indexOf("space")!= -1) {
            $('.content').css('background', 'linear-gradient(to bottom, rgba(0,0,0,100) 0%, rgba(0,25,50,150) 33%, rgba(0,50,75,175) 66%, rgba(0,75,100,200) 100%)');
            $('body').addClass('dark');
        } else if (comment.indexOf("sun")!= -1) {
            $('.content').css('background', 'linear-gradient(to bottom, rgb(255,251,190) 0%, rgb(255,251,190) 33%, rgb(255,251,190)66%, rgb(255,251,190) 100%)');
            $('.body').addClass('sun');

        } else {
            console.log("chaning back");
            $('.content').css('background', 'white');
            $('body').removeClass('dark');

        } 
        if (comment.indexOf("jerry") != -1) {
            $('img:nth(0)').attr('src', '/static/custom/Jerry.gif')
        } else if (comment.indexOf("water game") != -1) {
            $('img:nth(0)').attr('src', '/static/custom/watergame.png')
        } else if (comment.indexOf("swerve") != -1) {
            $('img:nth(0)').attr('src', '/static/custom/swerve.jpg')
        } else if (comment.indexOf("to the moon")!= -1){
            $('img:nth(0)').attr('src', '/static/custom/MOON.jpg')
        }
            
    })
})

$("#team_id").keyup(function () {
    if ($(this).val() == 8675309) {
        alert("Achievement Get: \nI got your number, Jenny.\n(Have a fake number!)");
    };
})
// fades screen in/out after a certain # of toggles
var count = 0;
$("#auton_cross_line").change(function () {
    count++;
    if (count >= 3) {
        $(".form-field").fadeOut(2000).fadeIn(2000);
    }
});

$(document).on('submit', 'form', function () {
    
    var comment = $("#comments").val();
    var team = $("#team_id").val();

    
    /*
    Achievement Ideas
    [x] Level 3 Climb:"Beam us up, Scotty"
    [x] Score 6 items in Rocket: "Liftoff"
    [x] Scores fewer than 3 Elements:"No Sign of Intelligent Life"
    [x] Get 6 items into the Cargo Ship:"Kessel Run in 12 Parasecs"
    [x] Start on level 2; "One Small Step"
    [x] Score 10+ elements in rockets:"Apollo 11"
    [x] Score 6+ hatches:"Open Pod Bay Doors"
    [X] If the Robot only scores Cargo:"A little. I made a ball"
    [X] If the Robot only scores Hatches:"Correction, sir. That's 'Blown out.'"
    [X] Robot does nothing/never scores:"Houston, we have a Problem"
    [X] Robot scores fewer than 4 elements:"Mike Pence's Space Force"
    [x] Robot doesn't cross line in Sandstorm:"I'm sorry Dave, I'm afraid I can't do that"
    [x]  Robot doesn't reach the Habitats:"Khaaannn!"  
    [X] "Defense" in the Comments:"Ready to Rumble!"
    [x] Scout 830: "Rodents of Unusual Size"
    
    */
   //hi
    if (comment.indexOf("fire") != -1) {
        alert("Dexter, is that you?");
    } else if (comment.indexOf("wood") != -1) {
        alert("I am Groot");
    } else if (comment.indexOf("deactivate") != -1 || comment.indexOf("disable") != -1) {
        alert("Achievement Get: \nYou Have Died of Dysentery :)! \n(have a robot become disabled)");
    } else if (comment.indexOf("doctor disco") != -1) {
        alert("Achievement Get: \n I'm a robot, not a doctor \n(Type Doctor Disco)");
    } else if (comment.indexOf("defense") != -1) {
        alert("Ready to Rumble");
    } else if (comment.indexOf("starlord") != -1) {
        alert("I know who you are, Peter Quill")
    } else if (comment.indexOf("infinity") != -1) {
        alert("Robots. Robots Everywhere")
    }
   if (team == 830) {
       alert("Achievement Get: \nRodents of Unusual Size \n(Scout the Ratpack!)")
    }
    // Comment Based
    if (comment.length > 110) {
        alert("Achievement Get: \nStar Wars.\nCongratulations on finishing your novel, \"Comments\".");
    }

    // Team Number
    if (team == 3322) {
        alert("Acheivement Get: \n Not visible in skyline \n(Scout the Skyline Robotics Team!)")
    }

});
