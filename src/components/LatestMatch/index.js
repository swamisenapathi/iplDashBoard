const LatestMatch = props => {
  const {latestMatchData} = props
  const {umpires} = latestMatchData
  return (
    <div>
      <p>{umpires}</p>
    </div>
  )
}

export default LatestMatch
