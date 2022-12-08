import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { fetchCountries } from '../Redux/Reducers/Countries';

const Home = () => {

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className= "home">
      <div className="home-heading">
      <header>
 {/*        <input className="countrySearch" type="text" placeholder="Search Country Name" value={countryName} onChange={(e) => { countryName = (e.target.value); }} /> */}
        <div className="map-image"><img src="./SA-1.png" alt="Map Of South Africa" /></div>{/* <div className="map-image"><img src="./Canada.png   " alt="Map Of Canada" /></div> */}
        <h1>Quality of air in South African Cities.</h1>
      </header>
      </div>
      <div className="home-countries">
        {countries.map((country) => (
          <div key={uuidv4()} className="countryInfo">
            <div className="card-text">
              <div className="home-card-heading">{country.name}</div>
              <div className="card-body">
                {country.countrycode}
                {' '}
                <br />
                {country.region}
              </div>
              <button>
                <NavLink
                  className="nav-link "
                  to="/city"
                  state={{
                    info: country,
                  }}
                >
                  Visit Cities
                </NavLink>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;