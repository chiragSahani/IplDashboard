// Write your code here
import './index.css'

const LatestMatch = props => {
  const {latestMatch} = props
  const {
    competingTeam,
    competingTeamLogo,
    date,
    firstInnings,
    manOfTheMatch,
    secondInnings,
    umpires,
    venue,
    result,
  } = latestMatch

  return (
    <div className="latest-match-card-container">
      <div className="latest-match-details-container">
        <div className="latest-match-details-1">
          <p className="latest-match-team-name">{competingTeam}</p>
          <p className="latest-match-date">{date}</p>
          <p className="match-details">{venue}</p>
          <p className="match-details">{result}</p>
        </div>
        <img
          src={competingTeamLogo}
          className="latest-match-team-logo"
          alt={`latest match ${competingTeam}`}
        />
        <div className="latest-match-details-2">
          <p className="latest-match-label">First Innings</p>
          <p className="latest-match-value">{firstInnings}</p>
          <p className="latest-match-label">Second Innings</p>
          <p className="latest-match-value">{secondInnings}</p>
          <p className="latest-match-label">Man Of The Match</p>
          <p className="latest-match-value">{manOfTheMatch}</p>
          <p className="latest-match-label">Umpires</p>
          <p className="latest-match-value">{umpires}</p>
        </div>
      </div>
    </div>
  )
}

export default LatestMatch
