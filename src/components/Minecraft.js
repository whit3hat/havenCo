import React from 'react';
import { Media, List } from 'reactstrap';

const Minecraft = () => {
   return (
       <Media>
           <Media left href='#'>
               <Media object data-src='holder.js/64x64' alt='Generic placeholder image' />
           </Media>
           <Media body>
               <Media heading>
                   minecraft
               </Media>
                    <List type='unstyled'>
                        <ul>
                            <li>current version: 1.16.4</li>
                            <li>server url: minecraft.havenco.xyz</li>
                        </ul>
                    </List>
                    
           </Media>
       </Media>
   );
};

export default Minecraft;