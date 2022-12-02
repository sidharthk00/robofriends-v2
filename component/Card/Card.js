import './Card.css'
import Tilt from 'react-parallax-tilt';

const Card = ({robot}) => {
        const {id,name,email} = robot
        return(
            <Tilt glareEnable={true} glareMaxOpacity={0.8} glareColor="#ffffff" glarePosition="bottom" glareBorderRadius="20px" >
            <div className="card-container" key={ id }>             
            <img src={`https://robohash.org/${id}?size=180x180`}
                 alt='{id}'/>
            <h2> { name }</h2>
            <p>{email}</p>
            
            </div>
          </Tilt>
        )
    }

export default Card;