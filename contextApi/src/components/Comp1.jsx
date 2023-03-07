import Comp2 from './Comp2';
import useGlobalData from '../hooks/useGlobalData';

const Comp1 = () => {
    const { counter } = useGlobalData();

    return (
        <div>
            <h2>Child Component 1: { counter }</h2>
            <Comp2 />
        </div>
    )
}

export default Comp1
