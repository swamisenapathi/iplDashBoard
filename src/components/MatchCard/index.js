const MatchCard = props => {
  const {MatchDetails} = props
  const {venue} = MatchDetails
  return (
    <div>
      <p>{venue}</p>
    </div>
  )
}

export default MatchCard
