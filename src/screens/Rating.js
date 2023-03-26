import react from 'react'
import Card from 'react-bootstrap/Card';
function Rating(value){
    return(
        <div>
        
        <span style={{color:"yellow"}}>
               
                <i className={value >=1 ? 'fas fa-star':value >=0.5 ? "fas fa-star-half-alt": "fas fa-star"  } ></i>
            </span>
             <span style={{color:"yellow"}}>
                
                <i className={value >=2 ? 'fas fa-star':value >=1.5 ? "fas fa-star-half-alt": "fas fa-star"  } ></i>
            </span>
            <span>
                <i className={value >=3 ? 'fas fa-star':value >=2.5 ? "fas fa-star-half-alt": "fas fa-star" } ></i>
            </span>
            <span>
                <i className={value >=4 ? 'fas fa-star':value >=3.5 ? 'fas fa-start-half-alt':'fas fa-star' } ></i>
            </span>
            <span>
                <i className={value >=5 ? 'fas fa-star':value >= 4.5 ? 'fas fa-start-half-alt':'fas fa-start-half-alt' } ></i>
            </span> 
        </div>

    )
}
export default Rating