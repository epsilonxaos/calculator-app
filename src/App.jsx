import { useState, useEffect } from 'react';
import Button from './components/Button';
import Switchs from './components/Switch';
import './css/switch.css';

function App() {
	const [operando, setOperando] = useState(0);
	const [operador, setOperador] = useState(0);
	const [display, setDisplay] = useState(0);
	const [resDis, setResDis] = useState(false);
	const [theme, setTheme] = useState('one');

	const onChangeThemeHandler = (val) => {
		console.log(val);
		setTheme(val);
	}

	const onClickOperando = (label) => {
		if(display == 0 || isNaN(display) || resDis) {
			setDisplay(label);
			setResDis(false);
		} else {
			setDisplay(display + label);
		}
	}

	const onClickOperator = (label) => {
		console.log(label);
		if(operador.length > 0){
			calculate();
			if(label == '='){
				setResDis(true);
				setOperador('');
			} else {
				setResDis(true);
				setOperador(label);
			}
		} else {
			setOperando(display);
			setOperador(label);
			setDisplay(label);
		}
	}

	const onClickClean = () => {
		setOperando(0);
		setOperador(0);
		setDisplay(0);
		setResDis(false);
	}

	const calculate = () => {
		var res;

		switch (operador) {
			case '+':
				res = parseFloat(operando) + parseFloat(display);
				break;
			case '-':
				res = parseFloat(operando) - parseFloat(display);
				break;
			case '/':
				res = parseFloat(operando) / parseFloat(display);
				break;
			case 'x':
				res = parseFloat(operando) * parseFloat(display);
				break;
		}

		setOperando(res);
		setDisplay(res);
	}

	const onClickCleanDisplay = () => {
		setDisplay(0);
	}

	return (
		<main className={`h-screen flex items-center justify-center bg-main font-league theme-${theme}`}>
			<div className="calculator max-w-[540px] w-full transition-all p-3">

				<div className="grid grid-cols-2 mb-4">
					<h1 className="text-texts flex items-end justify-start text-2xl">calc</h1>
					<div className="flex items-end justify-end">
						<h2 className="text-texts mr-6 text-sm ">THEME</h2>
						<div className="switch-field">
							<Switchs label={1} theme={'one'} eventHandler={onChangeThemeHandler} />
							<Switchs label={2} theme={'two'} eventHandler={onChangeThemeHandler} />
							<Switchs label={3} theme={'tree'} eventHandler={onChangeThemeHandler} />
						</div>
					</div>
				</div>

				{/* Screen */}
				<div className="bg-screen text-[62px] text-texts text-right px-[35px] py-[15px] mb-8 rounded-2xl">
					{display}
				</div>

				{/* Botones */}
				<div className="bg-toggle p-7 rounded-2xl">
					<div className="grid grid-cols-4 gap-3 sm:gap-6 mb-3 sm:mb-6">
						<Button label={'7'} type="operator" eventHandler={onClickOperando} />
						<Button label={'8'} type="operator" eventHandler={onClickOperando} />
						<Button label={'9'} type="operator" eventHandler={onClickOperando} />
						<Button label={'DEL'} type="clear" eventHandler={onClickCleanDisplay} />
					</div>
					<div className="grid grid-cols-4 gap-3 sm:gap-6 mb-3 sm:mb-6">
						<Button label={'4'} type="operator" eventHandler={onClickOperando} />
						<Button label={'5'} type="operator" eventHandler={onClickOperando} />
						<Button label={'6'} type="operator" eventHandler={onClickOperando} />
						<Button label={'+'} type="operator" eventHandler={onClickOperator} />
					</div>
					<div className="grid grid-cols-4 gap-3 sm:gap-6 mb-3 sm:mb-6">
						<Button label={'1'} type="operator" eventHandler={onClickOperando} />
						<Button label={'2'} type="operator" eventHandler={onClickOperando} />
						<Button label={'3'} type="operator" eventHandler={onClickOperando} />
						<Button label={'-'} type="operator" eventHandler={onClickOperator} />
					</div>
					<div className="grid grid-cols-4 gap-3 sm:gap-6 mb-3 sm:mb-6">
						<Button label={'.'} type="operator" eventHandler={onClickOperando} />
						<Button label={'0'} type="operator" eventHandler={onClickOperando} />
						<Button label={'/'} type="operator" eventHandler={onClickOperator} />
						<Button label={'x'} type="operator" eventHandler={onClickOperator} />
					</div>
					<div className="grid grid-cols-2 gap-3 sm:gap-6">
						<Button label={'RESET'} type="clear" eventHandler={onClickClean} />
						<Button label={'='} type="equal" eventHandler={onClickOperator} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
