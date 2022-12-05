// Write your code here

import './index.css'

const PlanetItem = props => {
  const {planetDetails} = props
  const {imageUrl, name, description} = planetDetails

  return (
    <div className="planet-details-container">
      <img
        src={imageUrl}
        alt={`planet ${name}`}
        className="planet-img-styles"
      />
      <h1 className="planet-name">{name}</h1>
      <p className="planet-description">{description}</p>
    </div>
  )
}

export default PlanetItem
