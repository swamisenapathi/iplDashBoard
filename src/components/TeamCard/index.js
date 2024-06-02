import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {teamDetails} = props
  const {name, teamImageUrl, id} = teamDetails
  return (
    <li className="card">
      <Link to={`/team-matches/${id}`} className="link">
        <img src={teamImageUrl} alt="team" className="logo" />
        <h1 className="heading">{name}</h1>
      </Link>
    </li>
  )
}

export default TeamCard
