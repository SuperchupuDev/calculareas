if (location.protocol === 'http:') {
    location.replace(`https:${location.href.substring(location.protocol.length)}`);
}

const { Fragment, useRef, useState, StrictMode } = React;

function getPage(page, setPage) {
    if (page) {
        return <Calculator type={page} home={setPage} />
    }
    
    return (
        <Fragment>
            <h3>Selecciona un modo</h3>
            <div id='buttons'>
                <button onClick={() => setPage('hypotenuse')}>Calcular hipotenusa</button>
                <button onClick={() => setPage('area')}>Calcular área</button>
            </div>
        </Fragment>
    )
}

function calculate(x, y, type) {
    if (!x || !y) return null;
  
    if (type === 'hypotenuse') {
        return `La hipotenusa es ${Math.sqrt(x ** 2 + y ** 2)}`;
    }
  
    return `El área es ${(x * y) / 2}`;
}

const NumberInput = ({ children, callback }) => (
    <div>
        <h3>{children}</h3>
        <input onChange={event => callback(event.target.value)} type='number' min='0'/>
    </div>
)

const Calculator = ({ home, type }) => {
    const [x, setX] = useState();
    const [y, setY] = useState();
  
    return (
        <Fragment>
            <h2>Calcular {type === 'hypotenuse' ? 'hipotenusa' : 'área'}</h2>
            <NumberInput callback={setX}>Introduce la base</NumberInput>
            <NumberInput callback={setY}>Introduce la altura</NumberInput>
            <h3>{calculate(x, y, type)}</h3>
            <button onClick={() => home()}>Atrás</button>
        </Fragment>
    )
}

const App = () => {
    const [page, setPage] = useState();
    return (
        <Fragment>
            <h1>Calculareas</h1>
            {getPage(page, setPage)}
        </Fragment>
    )
}

ReactDOM.render(<StrictMode><App/></StrictMode>, document.getElementById('root'));
