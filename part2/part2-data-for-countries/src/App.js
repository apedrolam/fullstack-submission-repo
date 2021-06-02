import React, {useState, useEffect} from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([])
  const [filteredCountries, setFilteredCountries ] = useState([])
  const [filter, setFilter] = useState('')

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        //console.log(response)
        setCountries(response.data)
      })
  }, [])

  const handleSearchCountriesInputBox = (event) => {
    setFilter(event.target.value);
    setFilteredCountries(
      countries.filter((country) =>
        country.name.toLowerCase().includes(event.target.value.toLowerCase())
      )
    );
  }

  const MessageOrCountryDetailsToDisplay = () => {
    if (filteredCountries.length > 10) {
      return (
        <div>
          <p>Too many matches, specify another filer</p>
        </div>
      );
    }
    if (filteredCountries.length < 10 && filteredCountries.length > 1) {
      return (
        <div>
          {filteredCountries.map((country) => {
            return (
              <div>
                <li key={country.alpha2Code}>
                  {country.name}{" "}
                  <button
                    onClick={() => {
                      console.log(country);
                      return (
                        <div>
                          <p key={country.alpha2Code}>{country.name}</p>
                          <img className="flag" src={country.flag} alt={filteredCountries[0].name} key={country.alpha2Code}></img>
                        </div>
                      );
                    }}
                  >
                    Show
                  </button>
                </li>
              </div>
            );
          })}
        </div>
      );
    }
    if (filteredCountries.length === 1) {
      return (
        <div>
          <h1>{filteredCountries[0].name}</h1>
          <p>Capital: {filteredCountries[0].capital}</p>
          <p>Population: {filteredCountries[0].population}</p>
          {filteredCountries[0].languages.map((lang) => (
            <li key={lang.name}>{lang.name}</li>
          ))}
          <p><img className="flag" src={filteredCountries[0].flag} alt={filteredCountries[0].name}></img></p>
        </div>
      );
    } else return <div></div>;
  }

  return (
    <div>
      find countries:{" "}
      <input onChange={handleSearchCountriesInputBox} value={filter} />
      <div>
        <MessageOrCountryDetailsToDisplay />
      </div>
      
    </div>
  );
}

export default App;
