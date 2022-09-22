import Button from './components/Button';

function App() {

	return (
		<main className="h-screen flex items-center justify-center bg-main font-league">
			<div className="calculator max-w-[540px] w-full">

				{/* Botones */}
				<div className="bg-screen p-4 rounded-2xl">
					<div className="grid grid-cols-4 gap-3 mb-3">
						<Button label={'7'} type="operator" />
						<Button label={'8'} type="operator" />
						<Button label={'9'} type="operator" />
						<Button label={'DEL'} type="clear" />
					</div>
					<div className="grid grid-cols-4 gap-3 mb-3">
						<Button label={'4'} type="operator" />
						<Button label={'5'} type="operator" />
						<Button label={'6'} type="operator" />
						<Button label={'+'} type="operator" />
					</div>
					<div className="grid grid-cols-4 gap-3 mb-3">
						<Button label={'1'} type="operator" />
						<Button label={'2'} type="operator" />
						<Button label={'3'} type="operator" />
						<Button label={'-'} type="operator" />
					</div>
					<div className="grid grid-cols-4 gap-3 mb-3">
						<Button label={'.'} type="operator" />
						<Button label={'0'} type="operator" />
						<Button label={'/'} type="operator" />
						<Button label={'x'} type="operator" />
					</div>
					<div className="grid grid-cols-2 gap-3">
						<Button label={'RESET'} type="clear" />
						<Button label={'='} type="equal" />
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
