import '../../Styles/Projects/XGHockeyST.css'

import st_features from '../../Files/Projects/HockeyXGST/st_features.png'
import features from '../../Files/Projects/HockeyXGST/og_features.png'
import st_leaders from '../../Files/Projects/HockeyXGST/st_leaders.png'
import leaders_2022_ST from '../../Files/Projects/HockeyXGST/st_2022_xg.png'
import leaders_2022 from '../../Files/Projects/HockeyXGST/2022_xg.png'


function XGHockeyST() {
    return (
        <div className='Hockey-xGst'>
            <h1> Hockey xG V2 - xGBoost & Shooting Talent</h1>

            <div className='all-article'>
                <p>
                    In my first expected goals model, I used logistic regression to predict the probability of a goal being scored.
                    I was satisfied with the results of my original model, but I definitely felt that it could be improved. In my new model,
                    I used xGBoost and incorporated new features, including a shooting talent variable.
                </p>

                <p>
                    My dataset is exclusively focused on even-strength shots spanning from 2019 to 2022.
                    The shot data is sourced from <a href='https://moneypuck.com'>Money Puck</a>.
                </p>

                <p>
                    My first step was to create a normal expected goals model. I included a few more features than last time.
                    Most notably, I included the length of time the attacking and defending team were on the ice. The result was a model
                    similar to my original logistic regression model. Below are the features I used:
                </p>

                <img src={features} alt="Original Features" />

                <p>
                   My focus on a new model was creating a shooting talent variable for my model. My process was to simply divide 
                   each player's goals scored by their expected goals. I decided on a minimum of 300 shots to get a relatively accurate sample size.
                   For the remaining players, I gave them the league average conversion rate. I found this method to be a pretty accurate 
                   determination of shooter finishing ability. Below are the shooting talent values of the leaders in expected goals 
                   from the 2019/2020 - 2021/2022 seasons:
                </p>

                <img src={st_leaders} alt="XG leaders ST" />

                <p>
                    I then created a new model using all of the same features from the previous model, as well as 
                    the shooting talent of each player. I then used that data to predict xG for the 2022-2023 season. As
                    shown below, shooting talent was an important part of the model. It is worth mentioning that this is only one season of
                    data, which is not a huge sample size.
                </p>

                <img src={st_features} alt="ST features" />

                <p>
                    I then ran the model without shooting talent for just the 2022 data. Below are the leaders in expected
                    goals for 2022. On the left is without shooting talent, and on the right includes shooting talent. Less 
                    talented players such as Zach Hyman decreased, while Matthews and McDavid jumped up, a promising result.
                </p>

                <div className="row">
                    <div className="column">
                        <img src={leaders_2022} alt="leaders 2022"/>
                    </div>
                    <div className="column">
                        <img src={leaders_2022_ST} alt="leaders 2022 ST"/>
                    </div>
                </div>

                <p>
                    I found this project very interesting. I was not sure how much shooting talent would matter, but it seems
                    to play a fairly significant role. I could definitely benefit from more data and testing. Also, the model
                    will ignore very skilled players such as the top draft picks as they have not taken enough shots.
                </p>
            </div>
        </div>
    );
}

export default XGHockeyST;
