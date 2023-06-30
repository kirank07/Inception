const parent = React.createElement(
	'div',
	{
		id: 'parent'
	},
	[
		React.createElement('div', { id: 'child' }, [
			React.createElement(
				'h1',
				{ className: 'heading' },
				'Inside h1 tag children'
			),
			React.createElement(
				'h2',
				{ className: 'heading' },
				'Inside h2 tag children'
			)
		]),
		React.createElement('div', { id: 'child2' }, [
			React.createElement(
				'h1',
				{ className: 'heading' },
				'Inside h1 tag children'
			),
			React.createElement(
				'h2',
				{ className: 'heading' },
				'Inside h2 tag children'
			)
		])
	]
);
// const heading = React.createElement(
// 	'h1',
// 	{
// 		className: 'heading'
// 	},
// 	'Hello World From React!'
// );

console.log(parent); // object

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);
