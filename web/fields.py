import flask_wtf
from widgets import * #http://wtforms.readthedocs.org/en/latest/fields.html

class BallField(CheckboxButtonField):
    col_md = 2
    col_sm = 4
    col_xs = 12

class HatchField(CheckboxButtonField):
    col_md = 2
    col_sm = 4
    col_xs = 12

class Form(flask_wtf.Form):
    match_id = IntegerField('Match ID', buttons=False)
    team_id = IntegerField('Team ID', buttons=False)

    # Sandstorm what are you doing come in here so i can talk to you

    hab_start_robot = RadioField('What Habitat did the robot start in?', 
        choices =[('0', 'Level 1'), ('1', 'Level 2'), ('2', 'Level 3')], default="0")
    auton_cross_line = CheckboxButtonField('Did the Robot cross the line?')

    auton_ci_pick_ball_cargo = BallField('Pre-game Placed Cargo In Cargo Ship')
    auton_ci_pick_hatch_cargo = HatchField('Pre-game Placed Hatch Panels On Cargo Ship')  

    auton_ci_ball_cargo = IntegerField('Cargo Placed In Cargo Ship',default=0)
    auton_ci_hatch_cargo = IntegerField('Hatch Panels Placed In Cargo Ship',default=0)

    auton_ci_ball_rock_1 = IntegerField('Cargo  Rocket Level 1', default=0, col_sm=8)
    auton_ci_ball_rock_2 = IntegerField('Cargo  Rocket Level 2', default=0, col_sm=8)
    auton_ci_ball_rock_3 = IntegerField('Cargo  Rocket Level 3', default=0, col_sm=8)

    auton_ci_hatch_rock_1 = IntegerField('Hatch Panels Rocket Level 1', default=0, col_sm=8)
    auton_ci_hatch_rock_2 = IntegerField('Hatch Panels Rocket Level 2', default=0, col_sm=8)
    auton_ci_hatch_rock_3 = IntegerField('Hatch Panels Rocket Level 3', default=0, col_sm=8)

    auton_ball_count= IntegerField('Cargo Picked Up',default=0)
    
    # Teleop
    ball_count = IntegerField('Cargo Picked Up', default=0, col_sm=6)
    hatch_count = IntegerField('Hatch Panels Picked Up', default=0, col_sm=6)
    ball_cargo = IntegerField('Cargo In Cargo Ship', default=0, col_sm=6)
    hatch_cargo = IntegerField('Hatch Panels On Cargo Ship', default=0, col_sm=6)

    ball_rock_1 = IntegerField('Cargo In Rocket Level 1', default=0, col_sm=8)
    ball_rock_2 = IntegerField('Cargo In Rocket Level 2', default=0, col_sm=8)
    ball_rock_3 = IntegerField('Cargo In Rocket Level 3', default=0, col_sm=8)

    hatch_rock_1 = IntegerField('Hatch Panels On Rocket Level 1', default=0, col_sm=8)
    hatch_rock_2 = IntegerField('Hatch Panels On Rocket Level 2', default=0, col_sm=8)
    hatch_rock_3 = IntegerField('Hatch Panels On Rocket Level 3', default=0, col_sm=8)

    ball_dropped = IntegerField('Cargo Dropped', default=0, col_sm=4)
    hatch_dropped = IntegerField('Hatch Panels Dropped', default=0, col_sm=4)
    
    hatch_pickup = CheckboxButtonField('Robot Can Retrieve Hatch Panels Or Cargo From Ground', col_sm=4)
    # comments = TextAreaField('', col_lg=12)


    fouls = IntegerField('Fouls', default=0, col_sm=6)
    tech_fouls = IntegerField('Tech Fouls', default=0, col_sm=6)

    helping_robot_climb = CheckboxButtonField('Robot Helped Another Robot Climb', col_md=3)
    comments = TextAreaField('', col_lg=12)
    helping_robot_field= CheckboxButtonField('Robot Helped Another Robot Get Cargo Or Hatch', col_sm=4)
    comments = TextAreaField('', col_lg=12)


    hab_end_robot = RadioField('What Habitat did the robot end in?', 
        choices =[('1', 'Level 1'), ('2', 'Level 2'), \
        ('3', 'Level 3'), ('0', 'Did not enter habitat')], default="0")

    mechanism_scr = RadioField('What mechanism did they use to interact meaningfully with the ball?', 
        choices=[('shooter', 'Shooter'), ('elevator', 'Elevator'), ('other', 'Other'), ('none', 'None')], default="none")

    comments_mechanism = TextAreaField('', col_lg=12)


    cool_factor = RadioField('Did they (bribe) give us stuff? Are they nice?', 
        choices =[('0', 'No'), ('1', 'Yes, but it was dumb stuff'), ('2', 'Very Swag')], default="0")
