import Comp3 from "./Comp3"

const Comp2 = ({ counter }) => {
    return (
        <div>
            <h2>Component 2: {counter}</h2>
            <Comp3 counter={counter} />
        </div>
    )
}

export default Comp2
