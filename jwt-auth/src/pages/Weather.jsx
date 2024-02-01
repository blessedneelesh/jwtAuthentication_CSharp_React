import { useEffect, useState } from "react";
import { useData } from "../provider/DataProvider";
import Navbar from "./UI/Navbar";
import { Card, Col, Row, Space } from "antd";
const Weather = () => {
  const { getWeather } = useData();

  const [weather, setWeather] = useState([]);

  const cities = [
    "Toronto",
    "Montreal",
    "Ottawa",
    "British Columbia",
    "Calgary",
  ];

  const GetWeather = async () => {
    var res = await getWeather();
    setWeather(res);
    console.log(weather, "ads");
  };

  useEffect(() => {
    GetWeather();
  }, []);
  return (
    <>
      <Navbar />

      <Row gutter={24} style={{ marginTop: "15px" }}>
        <Col
          span={20}
          style={{ display: "flex", justifyContent: "center", gap: "15px" }}
        >
          {weather.map((ele, counter = 1) => (
            <Card title={cities[counter]} bordered={false}>
              <h3>Date: {ele.date.slice(0, 10)}</h3>
              <h3>Degree C: {ele.temperatureC}</h3>
              <h3>Degree F: {ele.temperatureF}</h3>
              <h3>Summary: {ele.summary}</h3>
            </Card>
          ))}
        </Col>
      </Row>
    </>
  );
};

export default Weather;
