import Card from "../Card/Card"
import plans from "../utils/arrayPlanes"



export default function Cards() {
    return (
        <div className="flex flex-wrap z-50 justify-around ">
            {plans.map(plan => {
                return <Card 
                key={plan.name}
                name={plan.name}
                price={plan.price}
                duration={plan.duration}
                features={plan.features}
                // description={plan.description}
                // image={plan.image}
                />
            })}
        </div>
    )
  }