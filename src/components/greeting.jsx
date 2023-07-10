import PropTypes from 'prop-types'

export function Greeting({ name }) {
  return <p>{name}!</p>
}

Greeting.propTypes = {
  name: PropTypes.string.isRequired,
}
