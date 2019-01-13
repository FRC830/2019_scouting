$(function () {
    $('#comments').keyup(function () {
        /* comment based parsing*/
        var comment = $('#comments').val().toLowerCase();
        if (comment.indexOf("rainbow") != -1) {
            $('.content').css('background', 'linear-gradient(to bottom, rgba(255,44,40,1) 0%,rgba(255,128,0,1) 17%,rgba(255,246,0,1) 34%,rgba(0,170,0,1) 50%,rgba(0,219,201,1) 66%,rgba(43,0,216,1) 83%,rgba(165,46,121,1) 100%)');
        } else {
            $('.content').css('background', 'white');
        }
        if (comment.indexOf("fire") != -1) {
            alert("Dexter, is that you?");
        } else if (comment.indexOf("wood") != -1) {
            alert("I am Groot");
        } else if (comment.indexOf("jerry") != -1) {
            $('img:nth(0)').attr('src', '/static/custom/Jerry.gif')
        } else if (comment.indexOf("water game") != -1) {
            $('img:nth(0)').attr('src', '/static/custom/watergame.png')
        } else if (comment.indexOf("swerve") != -1) {
            $('img:nth(0)').attr('src', '/static/custom/swerve.jpg')
        } else if (comment.indexOf("deactivate") != -1 || comment.indexOf("disable") != -1) {
            alert("Achievement Get: \nYou Have Died of Dysentery :)! \n(have a robot become disabled)");
        } else if (comments.indexOf("Doctor Disco") != -1) {
            alert("Achievement Get: \n I'm a robot, not a doctor \n(Type Doctor Disco)");
        } else if (comment.indexOf("defense") != -1) {
            alert("Ready to Rumble");
        } else if (comment.indexOf("Starlord") != -1) {
            alert("I know who you are, Peter Quill")
        } else if (comment.indexOf("Infinity") != -1) {
            alert("Robots. Robots Everywhere")
        } else if (comment.indexOf("TO THE MOON")!= -1){
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

    var comments = $("#comments").val();
    var match = $("#match_id").val();
    var techFouls = parseInt($("#tech_fouls").val())
    var fouls = parseInt($("#fouls").val());
    var hab_end_robot = parseInt($("#hab_end_robot").val());
    var ball_rock_1 = parseInt($("#ball_rock_1").val());
    var ball_rock_2 = parseInt($("#ball_rock_2").val());
    var ball_rock_3 = parseInt($("#ball_rock_3").val());
    var helping_robot_climb = $("#helping_robot_climb").prop('checked')
    var team = $("#team_id").val();
    var hatch_rock_1 = parseInt($("#hatch_rock_1").val());
    var hatch_rock_2 = parseInt($("#hatch_rock_2").val());
    var hatch_rock_3 = parseInt($("#hatch_rock_3").val());
    var hatch_rocket_total = hatch_rock_1 + hatch_rock_2 + hatch_rock_1;
    var ball_rocket_total = ball_rock_1 + ball_rock_2 + ball_rock_3;
    var hab_start_robot = parseInt($('#hab_start_robot').val());
    var auton_ball_cargo = parseInt($('#auton_ci_ball_cargo').val());
    var auton_hatch_cargo = parseInt($('#auton_ci_hatch_cargo').val());
    var hatch_total = hatch_rocket_total + auton_hatch_cargo + hatch_cargo
    var ball_total = ball_rocket_total + auton_ball_cargo + ball_cargo
    var match_elements_total = hatch_rocket_total + ball_rocket_total + ball_cargo
        + hatch_cargo + auton_ball_cargo + auton_hatch_cargo;
    var ball_cargo = parseInt($("#ball_cargo").val());
    var cargo_total = hatch_cargo + ball_cargo
    var cross_line = $("#auton_cross_line").prop('checked')

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
    if (team == 830) {
        alert("Achievement Get: \nRodents of Unusual Size")
    }
    if (hatch_total >= 6) {
        alert("Achievement Get: \nOpen Pod Bay Doors")
    }
    if (cargo_total > 6) {
        alert("Achievement Get: \nKesse Run in 12 Parasecs")
    }
    //utterly useless comment
    if (match_elements_total < 3) {
        alert("Achievement Get: \nNo sign of Intelligent Life")
    }
    // Comment Based
    if (comments.length > 110) {
        alert("Achievement Get: \nStar Wars.\nCongratulations on finishing your novel, \"Comments\".");
    }

    // Match Number
    if (match == 1) {
        alert("Achievement Get: \nWe are Number One! \n(scout the first match)");
    } else if (match == 80) {
        alert("Achievement Get: \nOur Princess is in Another Castle! \n(reach the end of the competition)")
    } else if (match >= 81) {
        alert("Achievement Get: \nTake the Red Pill. \n(break the matrix by scouting past match 80)");
    }
    // Team Number
    if (team == 3322) {
        alert("Acheivement Get: \n Not visible in skyline")
    }

    // Fouls
    if (fouls == 0 && techFouls == 0) {
        alert("Achievement Get: \nGracious Profesionalism! \n(commit no fouls or tech fouls in a match)");
    } else if (techFouls >= 2) {
        alert("Achievement Get: \nSet phasers to stun!\n(get two or more tech fouls)");
    }

    // Habitat Starting Positions
    if (hab_start_robot == 2) {
        alert("Achievement Get: \n One Small Step \n(Start from Habitat Level 2)");
    }

    // Habitat Ending Positions
    if (hab_end_robot == 3) {
        alert("Achievement Get: \nBeam us up, Scotty! \n(Ascend to Level 3)");
    }
    if (hab_end_robot == 0) {
        alert("Achievement Get: \nKhaaannn! \n(Fail to enter Habitat)");
    }

    //useless commet
    if (!cross_line) {
        alert("Achievement Get: \nI'm sorry Dave, I'm afraid I can't do that")
    }

    // Balls in a rocket
    if (ball_rock_1)

        if (ball_rock_1 >= 4 || ball_rock_2 >= 4 || ball_rock_3 >= 4) {
            alert("Achievement Get: \nHighly Illogical... :)! \n(Put more balls than needed into a rocket.)");
        }

    // Balls in cargoship
    if (ball_cargo == 0) {
        //alert("Achievement Get: \nThe one scene in the Magic School Bus season one episode one when the freckled " + 
            //"red haired kid goes to the moon, takes off his helmet and cause his entire head to freeze and become an ice block. " +
            //"While he's in the spaceship his head thaws but he catches a cold and the episode ends with him " + 
            //"back on earth with a cold, blowing his nose next to a pile of used tissues \n(Pushed in 0 balls)");
    }

    if (helping_robot_climb) {
        alert("Achievement Get: \nMake it so \n(Robot Aids Another to Climb)")
    }
    // Hatches in a rocket
    if (hatch_rock_1 >= 2 && hatch_rock_2 >= 2 && hatch_rock_3 >= 2) {
        alert("Achievement Get: \nI'm Givin' Her All She's Got, Captain! \n(Place 6 hatches on a rocket");
    }

    if (hatch_rocket_total >= 1 && ball_rocket_total == 0) {
        alert("Achievement Get: \nRichard Hatch \n(Score only Hatches)")
    }
    if (hatch_rocket_total == 0 && ball_rocket_total >= 1) {
        alert("Achievement Get: \nLucille Ball \n(Score only Balls)")
    }
    // Rocket Total Based
    if (hatch_rocket_total + ball_rocket_total >= 10) {
        alert("Achievement Get: \nApollo 11 \n (Score 10+ Elements in Rockets)")
    } else if (hatch_rocket_total + ball_rocket_total >= 6) {
        alert("Achievement Get: \nLiftoff \n (Score 6+ Elements in Rockets)")
    } else if (hatch_rocket_total + ball_rocket_total >= 4) {
        alert("Achievement Get: \n Mike Pence's Space Force \n (Score 4 Elements in Rockets)")
    }
    if (match_elements_total == 0) {
        alert("Achievement Get: \nHouston, We Have a Problem \n(Robot Does Nothing)")
    }



    //Remember to make an Achievement name for this one!
    if (hatch_total == 0) {
        alert("Achievement Get:\nA little. I made a ball    \n(Score Only Cargo)")
    } //Remember to make an Achievement name for this one too!
    if (ball_total == 0) {
        alert("Achievement Get: \nCorrection, sir. That's 'Blown out.'   \n(Score only Hatches)")
    }

});
