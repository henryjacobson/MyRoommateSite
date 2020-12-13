const FoodForm = props => {
    return (
        <div>
            {/* <div className="input-group mb-3">
                <input type="text" name="foodName" className="form-control" placeholder="Search Food" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div onClick={props.getFood1()} className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button">Search</button>
                </div>
            </div> */}
            <form onSubmit={props.getFood}>
                <input type="text" name="foodName" />
                
                <button> Search </button>
            </form>
        </div >

    )
}

export default FoodForm