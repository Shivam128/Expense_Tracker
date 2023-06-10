import './Charts.css';
import ChartBar from './ChartBar.js';

const Charts = props => {
    const valueArray = props.datapoints.map(datapoint => datapoint.value)
    const totalMax = Math.max(...valueArray)
return <div className='chart'>
    {props.datapoints.map(datapoint => <ChartBar  key={datapoint.label} value={datapoint.value} label={datapoint.label} maxValue={totalMax} />)}
</div>
}

export default Charts