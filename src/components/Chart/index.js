import ChartBar from '../ChartBar'
import './index.css'
const Chart=(props)=>{
    const{dataPoints}=props
    const dataPointValue=dataPoints.map(dataPoint=>dataPoint.value)
    const totalValue=Math.max(...dataPointValue)
    return(
        <div className="chart">
        {dataPoints.map(dataPoint=><ChartBar value={dataPoint.value} maxValue={totalValue} label={dataPoint.label}/>)}
        </div>
    )
}
export default Chart