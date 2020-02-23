import React, { Component } from 'react';
import ReactDOM from 'react-dom';

export default class Header extends Component {
	constructor() {
		super();
		this.state = {
			name: 'Joe'
		};
	}
	clickedBtn = () => {};
	async test() {}
	render() {
		return (
			<header>
				<div className={'left-menu'}>
					<div className={'logo'}>Craigslist</div>
					<div className={'city'}>
						Long Beach
						<i class="fas fa-chevron-down"></i>
					</div>
				</div>

				<div className={'right-menu'}>
					<div className={'user-img'}>img</div>
					<div className={'user-dropdown'}>
						My account
						<i class="fas fa-chevron-down"></i>
					</div>
					<div className={'post-btn'}>Post to classfields</div>
				</div>
			</header>
		);
	}
}
