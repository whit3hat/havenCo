import React from 'react';
import { Media } from 'reactstrap';

const About = () => {
   return (
       <Media>
           <Media left href='#'>
               <Media object data-src='holder.js/64x64' alt='Generic placeholder image' />
           </Media>
           <Media body>
               <Media heading>
                   about HavenCo
               </Media>
               HavenCo Limited was a data haven, data hosting services company, founded in 2000 to operate from Sealand, a self-declared sovereign principality that occupies a man-made former World War II defensive facility originally known as Roughs Tower located approximately six miles from the coast of Suffolk, southeast England.
              <br />
               In November 2008, operations of HavenCo ceased without explanation.
           </Media>
       </Media>
   );
};

export default About;