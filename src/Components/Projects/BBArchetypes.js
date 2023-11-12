import '../../Styles/Projects/BBArchetypes.css'
import averages from '../../Files/Projects/BBArchs/averages.png'
import clust1 from '../../Files/Projects/BBArchs/Cluster1.png'
import elbow from '../../Files/Projects/BBArchs/elbow.png'
import group_reps from '../../Files/Projects/BBArchs/group_reps.png'




function BBArchetypes() {
    return (
      <div className='BBArch'>
        <h1>Fantasy Baseball Player Archetypes</h1>
  
        <div className='all-article'>
          <p>
            Playing fantasy baseball this year, I was curious to think about how I should be building my team to maximize
            their production in a categories league. The goal of each week is to win more categories than your opponent,
            it doesn't matter by how much you win, so you want a balanced team that will win the majority of categories.
            My goal in this project was to use k-means clustering to look at players who provide similar production and fulfill the same roles.
          </p>
  
          <p>
            My full code is availible <a href='https://github.com/cgalga01/MLB-Fantasy-Archetypes'> here</a>
            . Data used is 2023 hitting data from <a href='https://baseball-reference.com'>Baseball Reference</a>.
          </p>
  
          <p>
            My first step was to filter out players who were not fantasy-relevant, so I only looked at players
            with over 400 plate appearances. Then I looked at the statistics that are used in fantasy baseball:
            runs, home runs, RBIs, steals, and OBP.
          </p>
  
          <p>
            After I standardized the data so it was ready for k-means, I needed to decide on the amount of clusters.
            A mathematical approach to this is through the Elbow Method. In order to do this, I graphed the number of clusters by their
            respective inertia. Inertia is the sum of the squared error (SSE) of each sample to its closest centroid. By iterating
            through different values of k and calculating their inertia, I was able to measure the number of clusters against their accuracy.
          </p>
  
          <img src={elbow} alt='elbow method'/>
  
          <p>
            I then ran the k-means algorithm which provided these group representatives (top). I compared these to the
            overall average stats (bottom) for my players to clearly see their strengths and weaknesses.
          </p>
  
          <img src={group_reps} alt = "group representatives"/>
  
          <img src={averages} alt = "averages"/>
  
          <p>
            I then made some observations about the groups:
          </p>
  
          <p>Group 0: Balanced mainly slugging hitters, no speed</p>
          <p>Group 1: Elite all-around hitters at the top of the league</p>
          <p>Group 2: Mainly contact hitters, below-average power</p>
          <p>Group 3: Good all-around hitters</p>
          <p>Group 4: All speed, high runs, below-average hitting and power</p>
          <p>Group 5: Replacement-level players</p>
  
          <p> ----------------------------------------------------------------------------------------------------------------------------------------------------------------------- </p>
          <p>
            Below is Group 1, the elite hitters, and as you can see, these were the top fantasy performers who
            were at the top of the league in multiple categories.
          </p>
  
          <img src={clust1} alt="cluster 1" />
  
          <p>
            These clusters are not perfect. Not every player fits perfectly into one of the 6 boxes, but overall it
            does a great job at giving a snapshot of the types of players for fantasy purposes. Also the accuracy of the clusters
            are affected by players who had their seasons cut short by injury. This information is the sort of thing that could be 
            useful to look at when drafting a fantasy team to make sure you have a balanced lineup. I hope to do more work in the future
            about strategy to building the optimal category team.
          </p>
        </div>
      </div>
    );
  }
  
  export default BBArchetypes;
  