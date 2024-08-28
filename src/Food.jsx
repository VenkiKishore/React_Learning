
function Food() {
    const food1 = "Biriyani";
    const food2 = "Pizza"
    return(
        <ul>
            <li>Burger</li>
            <li>{food1}</li>
            <li>{food2.toUpperCase()}</li>
        </ul>
    );

}

export default Food