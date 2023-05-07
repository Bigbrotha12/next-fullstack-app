import React from 'react';
import styles from './styles/banner.module.css'
import Image from 'next/image';
import LandingImage from '@/assets/images/landing-image.jpeg'
import Button from './Button';

export default function LandingBanner(): JSX.Element {
    return(
        <div className={styles.banner_container}>
            <Image src={LandingImage} style={{width: '100%', height: '100%', objectFit: 'cover' }} alt="Lorem Picsum"/>
            <div className={styles.banner_sidepanel}>
                <h2>Taking your talents to the next level</h2>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ducimus, obcaecati! Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci officia exercitationem laborum nemo, modi doloribus a expedita ad ipsum aliquam numquam esse quod tenetur itaque voluptates, eveniet quibusdam harum nobis!</p>
                <Button className={styles.banner_button}>Learn More</Button>
            </div>
            
        </div>
    )
}