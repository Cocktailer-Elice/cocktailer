import styled from 'styled-components'

// interface Container {
//   margin?: string;
// }

// const H3 = styled.div<Container>`
//   color: 'red';
// `

const H3 = styled.div`
  text-align: center;
  font-size: 35px;
  padding: 40px;
  border-bottom: 1px solid #ddd;
  letter-spacing: 3.5px;
`

const CockflowHeader = () => {
  return (
    <H3>cock-flow</H3>
  )
}

export default CockflowHeader
