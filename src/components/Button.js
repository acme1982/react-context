import React, { Component } from 'react';
import LanguageContext from '../contexts/LanguageContext';
import ColorContext from '../contexts/ColorContext';

class Button extends Component {
	//static contextType = LanguageContext; //setup this.context
	onSubmitChange(language) {
		return language === 'english' ? 'Submit' : 'Pateikti';
	}

	render() {
		return (
			<ColorContext.Consumer>
				{color => {
					return (
						<button className={`ui button ${color}`}>
							<LanguageContext.Consumer>
								{({ language }) => this.onSubmitChange(language)}
							</LanguageContext.Consumer>
						</button>
					);
				}}
			</ColorContext.Consumer>
		);
	}
}

export default Button;
