function Time() {
    let time = new Date();


    return (

        <div className = "lead">
            <h1 className= "lead">Time: {time.toLocaleTimeString()}</h1>
            <h1 className= "lead">Date: { time.toLocaleDateString()}</h1>
        </div>
    );
}

export default Time;