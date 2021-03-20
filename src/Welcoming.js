import React from 'react';

import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';


function Welcoming() {
    return (
        <div>
            <Jumbotron>
                <h1>Study Buddy :)</h1>
                <p>
                    Platform to create wonderful new friendships and study buddies
            </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>

            <Image src="https://rlc.rutgers.edu/sites/default/files/styles/banner/public/banners/study-group-banner-alt.jpg?itok=oGlGZAgv" fluid />
        </div>

    )
}

export default Welcoming;