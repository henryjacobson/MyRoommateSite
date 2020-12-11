const FoodForm = props => {
    return (
        <form onSubmit={props.getFood}>
            <input type="text" name ="foodName"/>
            <button> Search </button>
        </form>
    )
}

export default FoodForm