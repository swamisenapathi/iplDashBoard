import {Component} from 'react'

import MatchCard from '../MatchCard'

const teamMatchesUrl = 'https://apis.ccbp.in/ipl/'

class TeamMatches extends Component {
  state = {
    teamMatchesData: {},
  }

  componentDidMount() {
    this.getTeamMatches()
  }

  getFormattedData = data => ({
    umpires: data.umpires,
    result: data.result,
    manOfTheMatch: data.man_of_the_match,
    id: data.id,
    date: data.date,
    venue: data.venue,
    competingTeam: data.competing_team,
    competingTeamLogo: data.competing_team_logo,
    firstInnings: data.first_innings,
    secondInnings: data.second_innings,
    matchStatus: data.match_status,
  })

  getTeamMatches = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`${teamMatchesUrl}${id}`)
    const data = await response.json()
    console.log(data)

    const formattedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatch: this.getFormattedData(data.latest_match_details),
      recentMatches: data.recent_matches.map(eachMatch =>
        this.getFormattedData(eachMatch),
      ),
    }
    this.setState({teamMatchesData: formattedData})
  }

  renderRecentMatches = () => {
    const {teamMatchesData} = this.state
    const {recentMatches} = teamMatchesData
    return (
      <div>
        {recentMatches.map(eachMatch => (
          <MatchCard recentMatchDetails={eachMatch} key={eachMatch.id} />
        ))}
      </div>
    )
  }

  render() {
    const {teamMatchesData} = this.state

    const {teamBannerUrl} = teamMatchesData

    return (
      <div>
        <img src={teamBannerUrl} alt="team-logo" />
        {this.renderRecentMatches()}
      </div>
    )
  }
}

export default TeamMatches
