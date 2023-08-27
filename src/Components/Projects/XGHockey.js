import '../../Styles/Projects/XGHockey.css'
import graph from '../../Files/Projects/HockeyXG/GraphOfxG.png'
import model from '../../Files/Projects/HockeyXG/Model.png'
import players from '../../Files/Projects/HockeyXG/PlayerxG.png'
import AUC from '../../Files/Projects/HockeyXG/AUC.png'




function XGHockey () {
    return(
        <div className='Hockey-xG'>
            <h1>First Hockey xG Model</h1>

            <div className='all-article'>
                <p>
                    I have always seen expected goals statistics pop up as a hockey fan,
                    so I figured I would try my hand in building a simple model using
                    logistic regression
                </p>

                <p>
                    My data is only looking at even strength shots from 2015-2022.
                    The shot data is from <a href='https://moneypuck.com'>Money Puck</a>

                </p>

                <p>My first step was to decide what variables would be important to calculate expected goals. I decided
                    on shot distance, shot angle, shot type, whether or not it was off a breakout (shotRush),
                    or if it was a rebound shot.
                </p>

                <p>Next step was to make the model, since whether or not a goal is
                     scored is a binary outcome, logisitic regression is used</p>

                <img src = {model}/>

                <p>I put the coordinates into bins and then made a heatmap of where the most expected goals were,
                    showing as you would expect, the best chance to score is right in front of the net (net at (88,0))
                </p>

                <img src = {graph}/>

                <p>
                    I calculated the AUC to be 0.7598, which is in the 'ok' range.
                </p>

                <img src = {AUC}/>

                The final part was seeing who the players were. Numbers 1 and 2 were no surprise, and I 
                think the results also back up conventional hockey sense.

                <img src = {players}/>

                <p>
                    In the future I would want to use a higher level model like boosting or decision trees. 
                    Also my model does not take into account the skill of the shooter, which I would think makes a big difference.
                    Overall, I am satisfied with how the model performed.
                </p>



            </div>

        </div>



    );
    
}

export default XGHockey