import Two from "./Two";
import Arr from "./array";
import ConditionalDisplay from "./bool";
import CustomerReviews from "./review";
function One(){
    return (
        <div>
            <h1>This is from a component</h1>
            <Two />
            <Arr />
            <ConditionalDisplay />
            <CustomerReviews />
        </div>
    )
}

export default One;