import Comp3 from "./Comp3"
import useGlobalData from "../hooks/useGlobalData"

const Comp2 = () => {
    const { counter } = useGlobalData();

    return (
        <div>
            <h2>Child Component 2: {counter}</h2>
            <Comp3 />
        </div>
    )
}

export default Comp2
