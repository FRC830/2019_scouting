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
        choices =[('0', 'Level 1'), ('1', 'Level 2 Left'), \
        ('2', 'Level 2 Right'), ('3', 'Level 3')], default="0")
    auton_cross_line = CheckboxButtonField('Did the Robot cross the line?')

    auton_ci_pick_ball_cargo = BallField('Pre-game Picked Ball In Cargo')
    auton_ci_pick_hatch_cargo = HatchField('Pre-game Picke Hatch On Cargo')  

    auton_ci_ball_cargo = BallField('Placed Ball In Cargo')
    auton_ci_hatch_cargo = HatchField('Placed Hatch On Cargo')

    auton_ci_ball_rock_1 = IntegerField('Ball Rocket Level 1', default=0, col_sm=8)
    auton_ci_ball_rock_2 = IntegerField('Ball Rocket Level 2', default=0, col_sm=8)
    auton_ci_ball_rock_3 = IntegerField('Ball Rocket Level 3', default=0, col_sm=8)

    auton_ci_hatch_rock_1 = IntegerField('Hatch Rocket Level 1', default=0, col_sm=8)
    auton_ci_hatch_rock_2 = IntegerField('Hatch Rocket Level 2', default=0, col_sm=8)
    auton_ci_hatch_rock_3 = IntegerField('Hatch Rocket Level 3', default=0, col_sm=8)


    auton_ball_count = IntegerField('Balls picked up', default=0, col_sm=6)
    
    # Teleop
    ball_count = IntegerField('Balls picked up', default=0, col_sm=6)

    ball_cargo = IntegerField('Ball In Cargo', default=0, col_sm=6)
    hatch_cargo = IntegerField('Hatch In Cargo', default=0, col_sm=6)

    ball_rock_1 = IntegerField('Ball Rocket Level 1', default=0, col_sm=8)
    ball_rock_2 = IntegerField('Ball Rocket Level 2', default=0, col_sm=8)
    ball_rock_3 = IntegerField('Ball Rocket Level 3', default=0, col_sm=8)

    hatch_rock_1 = IntegerField('Hatch Rocket Level 1', default=0, col_sm=8)
    hatch_rock_2 = IntegerField('Hatch Rocket Level 2', default=0, col_sm=8)
    hatch_rock_3 = IntegerField('Hatch Rocket Level 3', default=0, col_sm=8)

    ball_dropped = IntegerField('Balls Dropped', default=0, col_sm=4)
    hatch_dropped = IntegerField('Hatch Dropped', default=0, col_sm=4)
    
    hatch_pickup = CheckboxButtonField('Robot Can Retrieve Hatches, Ball from Ground', col_md=8)
    comments = TextAreaField('', col_lg=12)


    fouls = IntegerField('Fouls', default=0, col_sm=6)
    tech_fouls = IntegerField('Tech Fouls', default=0, col_sm=6)

    helping_robot_climb = CheckboxButtonField('Robot Helped Another Robot Climb', col_md=3)
    comments = TextAreaField('', col_lg=12)
    helping_robot_field= CheckboxButtonField('Robot Helped Another Robot Get Ball, Hatch', col_md=8)
    comments = TextAreaField('', col_lg=12)


    hab_end_robot = RadioField('What Habitat did the robot end in?', 
        choices =[('0', 'Level 1'), ('1', 'Left Level 2'), ('2', 'Right Level 2'), \
        ('3', 'Level 3'), ('4', 'Did not enter habitat')], default="4")

    mechanism_scr = RadioField('What mechanism did they use to interact meaningfully with the ball? \
How fast was said mechanism?', 
        choices=[('0', 'Shooter'), ('1', 'Elevator'), ('2', 'Other')], default="2")

    comments_mechanism = TextAreaField('', col_lg=12)


    cool_factor = RadioField('Did they (bribe) give us stuff? Are they nice?', 
        choices =[('0', 'Much Sadness'), ('1', 'Not very Dogelike things'), ('2', 'Very Swag')], default="0")
