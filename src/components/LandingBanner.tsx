import React from 'react';
import styles from './styles/banner.module.css'
import Image from 'next/image';

export default function LandingBanner(): JSX.Element {
    return(
        <div className={styles.banner_container}>
            {/* <Image src='https://picsum.photos/id/684/600/400' width="600" height="400" alt="Lorem Picsum"/> */}
            <div className={styles.banner_sidepanel}>
                <h2>Welcome to my Page!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia exercitationem laborum nemo, modi doloribus a expedita ad ipsum aliquam numquam esse quod tenetur itaque voluptates, eveniet quibusdam harum nobis!</p>
            </div>
        </div>
    )
}