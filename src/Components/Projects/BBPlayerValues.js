import React from 'react'; // Make sure to import React
import '../../Styles/Projects/BBPlayerValues.css';
import dollar from '../../Files/Projects/BBPlayerValuesCode/DollarAmounts.png';
import rld from '../../Files/Projects/BBPlayerValuesCode/ReplacementLevelData.png';
import zar from '../../Files/Projects/BBPlayerValuesCode/Z-ScoreAboveReplacement.png';
import zs from '../../Files/Projects/BBPlayerValuesCode/Z-Scores.png';
import hv from '../../Files/Projects/BBPlayerValuesCode/HitterValues.png';

//First project on Fantasy baseball player values
function BBPlayerValues() {
    return (
        <div className='Player-Values'>
            <h1>Fantasy Baseball Player Value Calculator</h1>
            <div className='all-article'>
                <p>
                    Unlike the more well-known fantasy football, fantasy baseball tracks specific categories such as home runs,
                    batting average, strikeouts, and more, rather than earning points. The challenge lies in building a balanced
                    team since players excel in different areas, making direct player comparisons difficult.
                </p>

                <p>
                    The data is sourced from baseball reference. Here are the highlights of the code I used for hitters; the full code
                    is available on my GitHub &nbsp;
                    <a href='https://github.com/cgalga01/FantasyBBValues'>here</a>.
                </p>

                <p>
                    The first part of the code involved calculating the z-score for each player for each statistic. For non-counting
                    stats like batting average and slugging, small sample sizes can cause extremely skewed results. Instead, I elected
                    to use hits above average and slugging above average (and the same approach with ERA and WHIP). For example, HOA
                    is calculated by subtracting the player's total number of hits by their total number of at-bats multiplied by the
                    league batting average.
                </p>

                <img src={zs} alt="Z-Scores" />

                <p>
                    The next step was to obtain the replacement level data for each position.
                </p>

                <img src={rld} alt="Replacement Level Data" />

                <p>
                    Then, I subtracted the player's z-score from the replacement level player at their position.
                </p>

                <img src={zar} alt="Z-Score Above Replacement" />

                <p>
                    To calculate the dollar amount:
                </p>

                <img src={dollar} alt="Dollar Amount" />

                <p>
                    Finally, the results: Acuna being 1st is exactly as expected, and for pitchers, it was Spencer Strider!
                </p>

                <img src={hv} alt="Hitter Values" />

                <p>
                    For a first attempt, I think this worked out very well. The glaring issue I see is that my work only takes into
                    account the main position of the player, not all of their possible positions.
                </p>
            </div>
        </div>
    );
}

export default BBPlayerValues;
