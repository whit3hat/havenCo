import React from 'react';
import { Container, Col, Row} from 'reactstrap';
import Flag from './images/Flag_of_Sealand.png'
import './About.css';

const About = () => {
   return (
        <Container fluid={true}>
            <Row>
                <Col xs='12' sm='12' lg='12'>
                 
                        <img src={Flag} alt='Flag of Sealand'  />
           
                </Col>
            </Row>
            <Row>
                <Col xs='12' sm='12' lg='12'>
                <h1 id='about_title'> about HavenCo</h1>
                </Col>
            </Row>
            <Row>
                <Col xs='12' sm='12' lg='12'>
                    <p>
                        HavenCo Limited was a data haven, data hosting services company, founded in 2000 to operate from Sealand, a self-declared sovereign principality that occupies a man-made former World War II defensive facility originally known as Roughs Tower located approximately six miles from the coast of Suffolk, southeast England.
              <br />
               In November 2008, operations of HavenCo ceased without explanation.
                    </p>
                </Col>
            </Row>
        </Container>
           
               
          
       
                  
              
               
      
   );
};

export default About;