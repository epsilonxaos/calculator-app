import Button from './components/Button';

function App() {

	return (
		<main className="h-screen flex items-center justify-center bg-main font-league">
			<div className="calculator max-w-[540px] w-full">

				{/* Screen */}
				<div className="bg-screen text-[62px] text-white text-right px-[35px] py-[15px] mb-8 rounded-2xl">
					386,524
				</div>

				{/* Botones */}
				<div className="bg-toggle p-7 rounded-2xl">
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'7'} type="operator" />
						<Button label={'8'} type="operator" />
						<Button label={'9'} type="operator" />
						<Button label={'DEL'} type="clear" />
					</div>
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'4'} type="operator" />
						<Button label={'5'} type="operator" />
						<Button label={'6'} type="operator" />
						<Button label={'+'} type="operator" />
					</div>
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'1'} type="operator" />
						<Button label={'2'} type="operator" />
						<Button label={'3'} type="operator" />
						<Button label={'-'} type="operator" />
					</div>
					<div className="grid grid-cols-4 gap-6 mb-7">
						<Button label={'.'} type="operator" />
						<Button label={'0'} type="operator" />
						<Button label={'/'} type="operator" />
						<Button label={'x'} type="operator" />
					</div>
					<div className="grid grid-cols-2 gap-6">
						<Button label={'RESET'} type="clear" />
						<Button label={'='} type="equal" />
					</div>
				</div>
			</div>
		</main>
	)
}

export default App
