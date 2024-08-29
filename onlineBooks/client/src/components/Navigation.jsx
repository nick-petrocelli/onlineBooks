import { Link } from "react-router-dom"

const Navigation = (props) => {
  return (
    <div>
        <Link to = '/' > Catalog </Link>
        <Link to = '/create' > Add Book </Link>
        <h1>{ props.header }</h1>
        
    </div>
  )
}

export default Navigation