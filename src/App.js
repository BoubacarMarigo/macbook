import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	state = {
		processor: 0,
		memory: 0,
		gpu: 0,
		storage: 0,
		keyboard: 0,
		finalCut: false,
		logicPro: false
	};
	total = 0;

	renderName = (options) => {
		const keys = Object.keys(options);

		let names = keys.map((key) => {
			return options[key].map((el, index) => {
				// let priceSelected = options.processor[this.state.processor].price;
				const selectedOption = options[key][this.state[key]];
				const selectedOptionPrice = selectedOption.price;
				const price = options[key][index].price - selectedOptionPrice;
				this.total = selectedOptionPrice;

				return (
					<div>
						<div
							key={index}
							onClick={() => this.setState({ [key]: index })}
							className={'box ' + (this.state[key] === index ? 'selected' : '')}
						>
							<div>{el.name}</div>
							<div> {price === 0 ? null : price > 0 ? '+' + price : price}</div> <br />
						</div>
					</div>
				);
			});
		});

		return names;
	};

	render = () => {
		const options = {
			processor: [
				{
					name: 'Processeur Intel Core i7 hexacœur de 9e génération à 2,6 GHz (Turbo Boost jusqu’à 4,5 GHz)',
					price: 0
				},
				{
					name: 'Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)',
					price: 360
				}
			],
			memory: [
				{ name: '16 Go de mémoire DDR4 à 2 400 MHz', price: 0 },
				{ name: '32 Go de mémoire DDR4 à 2 400 MHz', price: 480 }
			],
			gpu: [
				{ name: 'Radeon Pro 555X avec 4 Go de mémoire GDDR5', price: 0 },
				{ name: 'Radeon Pro 560X avec 4 Go de mémoire GDDR5', price: 120 }
			],
			storage: [
				{ name: 'SSD de 256 Go', price: 0 },
				{ name: 'SSD de 512 Go', price: 240 },
				{ name: 'SSD de 1 To', price: 480 },
				{ name: 'SSD de 2 To', price: 960 },
				{ name: 'SSD de 4 To', price: 1920 }
			]
		};

		return (
			<div className="page--global">
				<div className="image--mac">
					{' '}
					<img src="https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/mbp15touch-space-select-201807_GEO_EMEA_LANG_FR?wid=1808&hei=1680&fmt=jpeg&qlt=80&.v=1531167672924" />{' '}
				</div>
				<main className="page--content">
					<h1>Personnalisez votre MacBook Pro 15 pouces - Gris </h1>
					<section>
						<div>
							Processeur Intel Core i9 8 cœurs de 9e génération à 2,4 GHz (Turbo Boost jusqu’à 5 GHz)
						</div>{' '}
						<br />
						<div>Écran Retina avec affichage True Tone</div>
						<br />
						<div>Touch Bar et Touch ID</div>
						<br />
						<div>16 Go de mémoire DDR4 à 2 400 MHz</div>
						<br />
						<div>Radeon Pro 560X avec 4 Go de mémoire GDDR5</div>
						<br />
						<div>SSD de 256 Go</div>
						<br />
						<div>Quatre ports Thunderbolt 3</div>
						<br />
						<div>Clavier rétroéclairé - Français</div>
						<br />
					</section>
					<section>
						<h2>Processeur</h2>
						<p>Quel processeur vous faut-il ?</p>
						<div className="processor">{this.renderName(options)[0]}</div>
						<br />
					</section>
					<section>
						<h2>Mémoire</h2>
						<p>Quelle capacité de mémoire vous faut-il</p>
						<div className="memory">{this.renderName(options)[1]}</div>
						<br />
					</section>

					<section>
						<h2>Graphismes</h2>
						<p>Quelle option graphique vous faut-il</p>
						<div className="gpu">{this.renderName(options)[2]}</div>
						<br />
					</section>

					<section>
						<h2>Stockage</h2>
						<p>Quelle capacité de stockage vous faut-il</p>
						<div className="stock1">{this.renderName(options)[3]}</div>
						<br />
					</section>

					<section>
						<h2>Logiciels préinstallés</h2>
						<p>Final Cut Pro X</p>

						<div className="buttongroup1">
							<div
								className={'firstbutton ' + (this.state.finalCut === false ? 'selected' : '')}
								onClick={() => {
									this.setState({ finalCut: false });
								}}
							>
								Aucun
								{this.state.finalCut === false ? <div>-329</div> : ''}
							</div>
							<div
								className={'secondbutton ' + (this.state.finalCut === true ? 'selected' : '')}
								onClick={() => {
									this.setState({ finalCut: true });
								}}
							>
								Final Cut Pro X
								{this.state.finalCut === true ? <div>+329</div> : ''}
							</div>
						</div>
						<p>Logic Pro X</p>
						<div className="buttongroup2">
							<div
								className={'firstbutton ' + (this.state.logicPro === false ? 'selected' : '')}
								onClick={() => {
									this.setState({ logicPro: false });
								}}
							>
								Aucun
							</div>
							<div
								className={'secondbutton ' + (this.state.logicPro === true ? 'selected' : '')}
								onClick={() => {
									this.setState({ logicPro: true });
								}}
							>
								Logic Pro X
							</div>
						</div>
					</section>
					<footer>{2699 + this.total + ' €'}</footer>
				</main>
			</div>
		);
	};
}

export default App;
