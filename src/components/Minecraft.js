import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import './Minecraft.css';

const Minecraft = () => {
   return (
       <div id='minecraft' >
           <Container className='themed-container' fluid={true}>
               <Row>
               
                
               </Row>
               <Row>       
                    <Col xs={{ size: 'auto'}} sm={{ size: 'auto' }} >
                        <h1>minecraft</h1>
                    </Col>
                </Row>
                <Row>      
                    <Col xs={{ size: 'auto'}} sm={{ size: 'auto' }} >                
                         <ul>
                            <li>current version: 1.16.4</li>
                            <li>server url: minecraft.havenco.xyz</li>
                          </ul>
                    </Col>          
                </Row>         
            </Container>
       </div>
       
   );
};

export default Minecraft;