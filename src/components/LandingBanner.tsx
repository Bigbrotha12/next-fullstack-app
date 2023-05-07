import React from 'react';
import styles from './styles/banner.module.css'
import Image from 'next/image';
import LandingImage from '@/assets/images/landing-image.jpeg'

export default function LandingBanner(): JSX.Element {
    return(
        <div className={styles.banner_container}>
            <Image src={LandingImage} style={{width: '100%', height: '100%', objectFit: 'contain'}} alt="Lorem Picsum"/>
            {/* <div className={styles.banner_sidepanel}>
                <h2>Welcome to my Page!</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia exercitationem laborum nemo, modi doloribus a expedita ad ipsum aliquam numquam esse quod tenetur itaque voluptates, eveniet quibusdam harum nobis!</p>
            </div> */}
        </div>
    )
}