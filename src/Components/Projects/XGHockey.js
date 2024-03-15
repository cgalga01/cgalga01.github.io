import '../../Styles/Projects/XGHockey.css'
import graph from '../../Files/Projects/HockeyXG/GraphOfxG.png'
import model from '../../Files/Projects/HockeyXG/Model.png'
import players from '../../Files/Projects/HockeyXG/PlayerxG.png'
import AUC from '../../Files/Projects/HockeyXG/AUC.png'




function XGHockey() {
    return (
        <div className='Hockey-xG'>
            <h1>First Hockey xG Model</h1>

            <div className='all-article'>
                <p>
                    As a dedicated hockey fan, I've often encountered expected goals statistics.
                    This prompted me to embark on the journey of building my own model using
                    logistic regression.
                </p>

                <p>
                    My dataset is exclusively focused on even-strength shots spanning from 2015 to 2022.
                    The shot data is sourced from <a href='https://moneypuck.com'>Money Puck</a>.
                </p>

                <p>
                    The initial step involved determining which variables were crucial for calculating expected goals.
                    I settled on shot distance, shot angle, shot type, whether it originated from a breakout (shotRush),
                    or if it was a rebound shot.
                </p>

                <p>
                    Moving forward, I designed the model. Given that the outcome, whether a goal is scored or not, is binary,
                    logistic regression was the chosen method.
                </p>

                <img src={model} alt="Logistic Regression Model" />

                <p>
                    I binned the coordinates and created a heatmap depicting areas with the highest expected goal probabilities.
                    As expected, the prime scoring opportunity is right in front of the net (at coordinates (88,0)).
                </p>

                <img src={graph} alt="Expected Goals Heatmap" />

                <p>
                    The calculated AUC (Area Under the Curve) came out to be 0.7598, falling into the 'okay' range.
                </p>

                <img src={AUC} alt="AUC Calculation" />

                <p>
                    The final stage involved identifying the top players. It came as no surprise that players numbered 1 and 2 ranked highest,
                    affirming the alignment of the results with conventional hockey wisdom.
                </p>

                <img src={players} alt="Top Players" />

                <p>
                    Looking ahead, I plan to explore more advanced models such as boosting or decision trees. Additionally, my current model
                    does not factor in the skill level of the shooter, which I believe could significantly influence outcomes.
                    Overall, I am content with the model's performance.
                </p>
            </div>
        </div>
    );
}

export default XGHockey