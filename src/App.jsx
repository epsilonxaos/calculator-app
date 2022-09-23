import { useState } from 'react';
import Button from './components/Button';

function App() {
	const [status, setStatus] = useState({
		operando: 0,
		operador: 0,
		display: 0,
		resDis: false
	});

	const getInicialStatus = () => {
		return {
			operando: 0,
			operador: 0,
			display: 0,
			resDis: false
		}
	}

	const onClickOperando = (label) => {
		var statusActive = status;

		if(statusActive.display == 0 || isNaN(statusActive.display) || statusActive.resDis) {
			statusActive.resDis = false;
			statusActive.display = label;
		} else {
			statusActive.display = statusActive.display + label;
		}

		console.log(statusActive);
		setStatus(statusActive);
	}

	const onClickOperator = (label) => {
		var statusActive = status;

		if(status.operador.length > 0){
			calculate();
			if(label == '='){
				statusActive.resDis   = true;
				statusActive.operador = '';
			} else {
				statusActive.resDis   = true;
				statusActive.operador = label;
			}
		} else {
			statusActive.operando = status.display;
			statusActive.operador = label;
			statusActive.display  = label;
		}

		console.log('True')
		setStatus(statusActive);
	}

	const onClickClean = () => {
		setStatus(getInicialStatus());
	}

	const calculate = () => {
		var res;
		var statusActive = status;

		switch (statusActive.operador) {
			case '+':
				res = parseFloat(statusActive.operando) + parseFloat(statusActive.display);
				break;
			case '-':
				res = parseFloat(statusActive.operando) - parseFloat(statusActive.display);
				break;
			case '/':
				res = parseFloat(statusActive.operando) / parseFloat(statusActive.display);
				break;
			case 'x':
				res = parseFloat(statusActive.operando) * parseFloat(statusActive.display);
				break;
		}
		
		statusActive.operando = res;
		statusActive.display  = res;

		setStatus(statusActive);
	}

	return (
		<main className="h-screen flex items-center justify-center bg-main font-league">
			<div className="calculator max-w-[540px] w-full transition-all">

				{/* Screen */}
				<div className="bg-screen text-[62px] text-white text-right px-[35px] py-[15px] mb-8 rounded-2xl">
					{status.display}
					{console.log(status)}
				</div>

				{/* Botones */}
				<div className="bg-toggle p-7 rounded-2xl">
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'7'} type="operator" eventHandler={onClickOperando} />
						<Button label={'8'} type="operator" eventHandler={onClickOperando} />
						<Button label={'9'} type="operator" eventHandler={onClickOperando} />
						<Button label={'DEL'} type="clear" />
					</div>
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'4'} type="operator" eventHandler={onClickOperando} />
						<Button label={'5'} type="operator" eventHandler={onClickOperando} />
						<Button label={'6'} type="operator" eventHandler={onClickOperando} />
						<Button label={'+'} type="operator" eventHandler={onClickOperator} />
					</div>
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'1'} type="operator" eventHandler={onClickOperando} />
						<Button label={'2'} type="operator" eventHandler={onClickOperando} />
						<Button label={'3'} type="operator" eventHandler={onClickOperando} />
						<Button label={'-'} type="operator" eventHandler={onClickOperator} />
					</div>
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'.'} type="operator" eventHandler={onClickOperando} />
						<Button label={'0'} type="operator" eventHandler={onClickOperando} />
						<Button label={'/'} type="operator" eventHandler={onClickOperator} />
						<Button label={'x'} type="operator" eventHandler={onClickOperator} />
					</div>
					<div className="grid grid-cols-2 gap-6">
						<Button label={'RESET'} type="clear" eventHandler={onClickClean} />
						<Button label={'='} type="equal" eventHandler={onClickOperator} />
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
