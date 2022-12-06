import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { NavLink } from 'react-router-dom';
import { fetchCountries } from '../Redux/Reducers/Countries';

const Home = () => {
  let countryName;

  const dispatch = useDispatch();
  const countries = useSelector((state) => state.countryReducer);

  useEffect(() => {
    dispatch(fetchCountries());
  }, [dispatch]);

  return (
    <div className= "home">
      <div className="countrySearchBox">
      <header>
        <input className="countrySearch" type="text" placeholder="Country Name" value={countryName} onChange={(e) => { countryName = (e.target.value); }} />
        <div className="map-image"><img src="./SA.png   " alt="Map Of South Africa" /></div>{/* <div className="map-image"><img src="./Canada.png   " alt="Map Of Canada" /></div> */}
        <h1>Quality of air in South African & Canadian Cities.</h1>
      </header>
      </div>
      <div className="home-countries">
        {countries.map((country) => (
          <Card style={{ width: '25%' }} key={uuidv4()} className="countryInfo">
            <Card.Img variant="top" />
            <Card.Body>
              <Card.Title>{country.name}</Card.Title>
              <Card.Text>
                {country.countrycode}
                {' '}
                <br />
                {country.region}
              </Card.Text>
              <Button variant="outline-info">
                <NavLink
                  className="nav-link "
                  to="/city"
                  state={{
                    info: country,
                  }}
                >
                  Visit Cities
                </NavLink>
              </Button>
            </Card.Body>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Home;