import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import styles from '../styles/Carousel.module.css';
import { Carousel } from 'react-responsive-carousel';


export default class NextJsCarousel extends Component {
	render() {
		return (					
			<Carousel autoPlay infiniteLoop renderIndicator={false}>
				<div>
					<img src="/gamesThumb/1.jpg" alt="Genshin Impact" className={styles.Carousel_img}/>
					{/* <p className="legend">Genshin Impact</p> */}

				</div>
				<div>
					<img src="/gamesThumb/2.jpg" alt="Tekko" className={styles.Carousel_img}/>
					{/* <p className="legend">Tekko</p> */}

				</div>
				<div>
					<img src="/gamesThumb/3.jpg" alt="Kunai" className={styles.Carousel_img}/>
					{/* <p className="legend">Kunai</p> */}

				</div>
				<div>
					<img src="/gamesThumb/4.jpg" alt="Roblox" className={styles.Carousel_img}/>
					{/* <p className="legend">Roblox</p> */}

				</div>
				<div>
					<img src="/gamesThumb/5.jpg" alt="Fortnite" className={styles.Carousel_img}/>
					{/* <p className="legend">Fortnite</p> */}

				</div>
                <div>
					<img src="/gamesThumb/6.jpg" alt="Lost Ark" className={styles.Carousel_img}/>
					{/* <p className="legend">Lost Ark</p> */}

				</div>
			</Carousel>			
		);
	}
};
