import PropTypes from 'prop-types'
import styled from 'styled-components'

interface Container {
  margin?: string;
}

const H3 = styled.div<Container>`
  color: 'red';
`
const CockflowHeader = () => {
  return (
    <H3>CockFlow</H3>
  )
}

CockflowHeader.propTypes = {

}

export default CockflowHeader
