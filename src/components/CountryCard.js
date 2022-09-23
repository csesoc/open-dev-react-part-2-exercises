const CountryCard = ({country, area, population}) => {
    return (
        <div>
            <div>
                The country is: {country}
            </div>
            <div>
                The area is: {area}
            </div>
            <div>
                The population is: {population}
            </div>
        </div>
    )
}

export default CountryCard;