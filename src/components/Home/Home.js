import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import ExperienceInfo from '../../fakeData/ExperienceInfo';
import MainInfo from '../../fakeData/MainInfo';
import Experiences from './Experiences/Experiences';
import './Home.css';
import Main from './Main/Main';

const Home = () => {

      const { register, handleSubmit, errors } = useForm();
      const onSubmit = data => console.log(data);

      return (
            <Container className="container">

            <div className = "mt-3">
                <h4 >Where do you want to go :</h4>
            </div>

            <Row>
                <Col className = "mt-3" xs={12} md={4}>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="input-box">
                            <label>Location</label> <br />
                            <input type="text" className="form-control" name="location" placeholder="Add City, Land Mark or Address" ref={register({ required: true })} />
                            {errors.location && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <div className="input-box d-flex">
                            <div className="w-50">
                                <label>Arrival</label> <br />
                                <input type="date" className="form-control" name="arrival" ref={register({ required: true })} />
                                {errors.arrival && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                            <div className="w-50">
                                <label>Departure</label> <br />
                                <input type="date" className="form-control" name="departure" ref={register({ required: true })} />
                                {errors.departure && <span style={{ color: 'red' }}>This field is required</span>}
                            </div>
                        </div>
    

                        <div className="input-box">
                            <label>Guests</label> <br />
                            {/* <input name="firstName" placeholder = "First Name" ref={register({ required: true, maxLength: 20 })} />
                            <input name="lastName"placeholder = "First Name" ref={register({ pattern: /^[A-Za-z]+$/i })} /> */}
                            <input name="Total member" placeholder = "Total member" type="number" ref={register({ min: 1, max: 20})} /> <br/>
                            <br/>
                            <input type="submit" />
                                                    {/* <h5>0 Adult 0 Child</h5>
                            <hr />
                            <input type="text" className="form-control" name="location" placeholder="Add City, Land Mark or Address" ref={register({ required: true })} /> */}
                            {errors.location && <span style={{ color: 'red' }}>This field is required</span>}
                        </div>
                        <Link to="/requiredLocation"><input className="form-control text-center gradient-btn" type="submit" value="Search " /></Link>

                    </form>
                </Col>

                <Col xs={12} md={8}>
                    <div xs={12} md={6}>
                        <h3>Experiences</h3>
                        <div className='d-flex justify-content-around'>
                            {
                                ExperienceInfo.map(Ex => <Experiences Experience={Ex} key={Ex.id} ></Experiences>)
                            }
                        </div>
                    </div>
                    <div xs={12} md={6}>
                        <h3 className = "mt-2">Homes</h3>
                        <div className='d-flex justify-content-around'>
                            {
                                MainInfo.map(Home => <Main Home={Home} key={Home.id} ></Main>)
                            }
                        </div>
                    </div>
                </Col>
            </Row>
            <div>

            </div>
            <div>

            </div>
        </Container>
      );
};

export default Home;