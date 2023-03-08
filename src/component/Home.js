import Carousel from 'react-bootstrap/Carousel';
import Img1 from '../component/Images/2states.jpg';
import Img2 from '../component/Images/chennaiexpress.jpg';
import Img3 from '../component/Images/gold3.jpg';
import Img4 from '../component/Images/ved3.jpg';
import Img5 from '../component/Images/ved4.jpg';
import Img6 from '../component/Images/ved5.jpg';
import Img7 from '../component/Images/lj.jpg';
import { SimpleSlider } from './SliderSlick';
import '../App.css';


const Home = () => {
    return (
        <div className='bg'>

            <Carousel className='mt-5 mb-5'>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        className="d-block w-100 h-200"
                        src={Img1}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h3>First slide label</h3>
                        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={800} height={400}
                        className="d-block w-100"
                        src={Img2}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        className="d-block w-100"
                        src={Img3}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Four slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        className="d-block w-100"
                        src={Img4}
                        alt="Four slide"
                    />

                    <Carousel.Caption>
                        <h3>Five slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        className="d-block w-100"
                        src={Img5}
                        alt="Five slide"
                    />

                    <Carousel.Caption>
                        <h3>Six slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        className="d-block w-100"
                        src={Img6}
                        alt="Six slide"
                    />

                    <Carousel.Caption>
                        <h3>Seven slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        width={900} height={400}
                        className="d-block w-100"
                        src={Img7}
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h3>Seven slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
            <h3> Recommanded Movies</h3>
        <SimpleSlider/>
        </div>
    );
}

export default Home;