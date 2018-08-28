import React, { Component } from 'react';
import { Row, Col, Input, Button } from 'reactstrap';
import Fixture from './Fixture';

export default class Predictions extends Component {
  render() {
    return (
      <Row className="predictions">
        <Col>
          <div className="pb-5">
            <h3>Saturday 10th of March</h3>
            <Fixture
              home="Manchester United"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Manchester_United_compact.png?v=1499088382"
              away="Liverpool"
              awayCrest="https://firebasestorage.googleapis.com/v0/b/cupmarch-ebeb4.appspot.com/o/crests%2FLiverpool_crest.png?alt=media&token=08f215a6-dca2-46ef-8e6c-4989209b9b7a"
            />
            <Fixture
              home="Everton"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Everton_c24ef800-5e3c-4b50-ad38-269c61e0cdbe_compact.png?v=1499088146"
              away="Brighton & Hove Albion"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Brighton_Hove_compact.png?v=1499087945"
            />
            <Fixture
              home="Huddersfield Town"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Huddersfield_f6b836df-1162-45b1-8f0a-6154ad1c966e_compact.png?v=1499088220"
              away="Swansea"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Swansea_City_compact.png?v=1499088761"
            />
            <Fixture
              home="Newcastle United"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Newcastle_United_compact.png?v=1499088456"
              away="Southampton"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Southampton_3715540a-480b-415b-b0c0-45e8aee0ee9e_compact.png?v=1499088677"
            />
            <Fixture
              home="West Bromwich Albion"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_West_Bromwich_Albion_compact.png?v=1499088857"
              away="Leicester City"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Leicester_City_2ce98712-b41e-4a70-b949-7a685985d7bd_compact.png?v=1499088304"
            />
            <Fixture
              home="West Ham United"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_West_Ham_compact.png?v=1499088876"
              away="Burnley"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Burnley_bd585570-468d-4a67-b0a0-cd21f05b1918_compact.png?v=1499087884"
            />
            <Fixture
              home="Chelsea"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Chelsea_compact.png?v=1499088023"
              away="Crystal Palace"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Crystal_Palace_013540fa-7737-46df-bac5-4c50fa9d2572_compact.png?v=1499088060"
            />
          </div>
          <div className="pb-5">
            <h3 className="pt-4">Sunday 11th of March</h3>
            <Fixture
              home="Arsenal"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Arsenal_6b211e7e-8c6d-45b3-a149-b21fe184f914_compact.png?v=1499085993"
              away="Watford"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Watford_compact.png?v=1499088835"
            />
            <Fixture
              home="Bournemouth"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_AFCB_57802f95-227c-4e01-81f8-0d66fc97c499_compact.png?v=1499086736"
              away="Tottenham Hotspur"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Tottenham_Hotspur_2_460b0388-b6dd-45b5-9fdb-9214fa1e3e0d_compact.png?v=1499173373"
            />
          </div>
          <div className="pb-5">
            <h3 className="pt-4">Monday 12th of March</h3>
            <Fixture
              home="Stoke City"
              homeCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Stoke_City_compact.png?v=1499088700"
              away="Manchester City"
              awayCrest="https://cdn.shopify.com/s/files/1/1888/7339/articles/H_Manchester_City_compact.png?v=1499088360"
            />
          </div>
          <div className="pb-5">
            <h3 className="pt-4">TieBreaker</h3>
            <Row>
              <Col>Number of goals scored this week? </Col>
              <Col>
                <Input placeholder="number of goals" />
              </Col>
            </Row>
          </div>
          <Row>
            <Col className="text-right pb-5">
              <Button>Submit results</Button>
            </Col>
          </Row>
        </Col>
      </Row>
    );
  }
}
