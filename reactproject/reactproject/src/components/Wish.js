import {Component} from 'react'

class Wish extends Component
{
  render() {
return <h1> { this.props.name }</h1>
  }
}

// const Wish = (props) => {
//     console.log(props)
//     return <h1> hello {props.name} </h1>
// }
export default Wish
