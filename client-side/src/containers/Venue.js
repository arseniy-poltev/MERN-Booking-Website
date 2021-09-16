import React from 'react';
import { Container, Button, Spinner } from 'react-bootstrap';
import Layout from '../components/Layout/index.layout';
import { ImgsCard } from '../components/UI/ImgsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getOneVenue } from '../actions/venue.actions';
import { getPublicURL } from '../urlConfig';

const VenuePage = (props) => {

    const oneVenueInfo = useSelector(state => state.oneVenueInfo);
    const { venueName, description, address, location, category, price, venuePictures, owner } = oneVenueInfo.venue;

    if (oneVenueInfo.loading) {
        return (
            <Layout>
                <div className='text-center' style={{ marginTop: '60px' }}>
                    <h1>Getting venue info 🎉</h1>
                    <Spinner animation="border" variant="success" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <Container>
                <section className="mb-5" style={{ marginTop: "50px" }}>
                    <div className="row">
                        <div className="col-md-6 mb-4 mb-md-0">
                            <ImgsCard
                                img1={getPublicURL(venuePictures[0].img)}
                                img2={getPublicURL(venuePictures[1].img)}
                                alt='venue picture'
                            />
                        </div>

                        <div className="col-md-6">
                            <p style={{ fontSize: "22px" }}><strong>{venueName}</strong></p>
                            <p className="mb-2 text-muted text-uppercase small">{category}</p>
                            <p style={{ fontSize: "22px" }}><span className="mr-1" style={{ fontSize: "22px" }}><strong>₹ {price}</strong></span></p>
                            <hr></hr>
                            <p className="pt-1">
                                <h5>Some words from Dealer -</h5>
                                {description}
                            </p>

                            <hr></hr>

                            <div className="table-responsive">
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Location</strong></th>
                                            <td>{location}</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Address</strong></th>
                                            <td>{address}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <hr></hr>
                                <table className="table table-sm table-borderless mb-0">
                                    <tbody>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Dealer Name</strong></th>
                                            <td>{owner}</td>
                                        </tr>
                                        <tr>
                                            <th className="pl-0 w-25" scope="row"><strong>Contact no</strong></th>
                                            <td>{owner}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>

                            <hr></hr>

                            <Button variant="danger">Book</Button>
                        </div>
                    </div>
                </section>
            </Container>
        </Layout >
    )
}

export default VenuePage