import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';


export default class NextJsCarousel extends Component {
	render() {
		return (					
			<Carousel autoPlay infiniteLoop renderIndicator={false}>
				<div>
					<img src="/gamesThumb/1.jpg" alt="Genshin Impact"/>
					{/* <p className="legend">Genshin Impact</p> */}

				</div>
				<div>
					<img src="/gamesThumb/2.jpg" alt="Tekko" />
					{/* <p className="legend">Tekko</p> */}

				</div>
				<div>
					<img src="/gamesThumb/3.jpg" alt="Kunai"/>
					{/* <p className="legend">Kunai</p> */}

				</div>
				<div>
					<img src="/gamesThumb/4.jpg" alt="Roblox"/>
					{/* <p className="legend">Roblox</p> */}

				</div>
				<div>
					<img src="/gamesThumb/5.jpg" alt="Fortnite"/>
					{/* <p className="legend">Fortnite</p> */}

				</div>
                <div>
					<img src="/gamesThumb/6.jpg" alt="Lost Ark"/>
					{/* <p className="legend">Lost Ark</p> */}

				</div>
			</Carousel>			
		);
	}
};
