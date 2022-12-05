import { useEffect } from 'react';
import { Table } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { airpollution } from '../Redux/Reducers/Pollution';
import './City.css';

const Time = (element) => {
  const date = new Date(element.props * 1000);
  return `${date.toLocaleDateString()}\n${date.toLocaleTimeString()}`;
};

const Pollution = () => {
  const location = useLocation();
  const dispatch = useDispatch();
  const info = location.state;
  useEffect(() => {
    dispatch(airpollution(info));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch]);
  const pollutionData = useSelector((state) => state.pollutionReducer);

  return (
    <div className="tablePollution">
      <Table striped bordered hover responsive>
        <thead className="tabletextColor">
          <tr>
            <th>
              Air Quality Index
              <br />
              (AQI)
            </th>
            <th>
              Carbon Monooxide
              <br />
              (CO)
            </th>
            <th>
              Nitrogen Monoxide
              <br />
              (NO)
            </th>
            <th>
              Nitrogen Dioxide
              <br />
              (NO2)
            </th>
            <th>
              Ozone
              <br />
              (O3)
            </th>
            <th>
              Sulphur Dioxide
              <br />
              (SO2)
            </th>
            <th>Time</th>
          </tr>
        </thead>
        <tbody className="tabletextColor">
          {pollutionData?.map((element) => (
            <tr key={uuidv4()}>
              <td>{element.main.aqi}</td>
              <td>{element.components.co}</td>
              <td>{element.components.no}</td>
              <td>{element.components.no2}</td>
              <td>{element.components.o3}</td>
              <td>{element.components.so2}</td>
              <td><Time props={element.dt} /></td>
            </tr>
          ))}
        </tbody>

      </Table>
      {(pollutionData.length === 0) && (<div className="tabletextColor">Data for this city is currently unavailable</div>)}
    </div>
  );
};

export default Pollution;