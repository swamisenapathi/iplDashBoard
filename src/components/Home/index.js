import {Component} from 'react'

import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamsList: []}

  componentDidMount() {
    this.getTeamsList()
  }

  getTeamsList = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    console.log(data)

    const formattedData = data.teams.map(eachItem => ({
      id: eachItem.id,
      name: eachItem.name,
      teamImageUrl: eachItem.team_image_url,
    }))
    this.setState({teamsList: formattedData})
  }

  renderTeamsList = () => {
    const {teamsList} = this.state
    return (
      <ul className="teams-list">
        {teamsList.map(eachTeam => (
          <TeamCard teamDetails={eachTeam} key={eachTeam.id} />
        ))}
      </ul>
    )
  }

  render() {
    return (
      <div className="home-route-container">
        <div className="app-container">
          <div className="logo-heading-container">
            <img
              src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
              alt="ipl logo"
              className="logo-image"
            />
            <h1 className="main-heading">IPL Dashboard</h1>
          </div>
          {this.renderTeamsList()}
        </div>
      </div>
    )
  }
}

export default Home
