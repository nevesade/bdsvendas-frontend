import './styles.css';
import { buildPieChartConfig } from './helpers';
import ReactApexChart from 'react-apexcharts';

type Props = {
  labels?: string[];
  name: string;
  series?: number[];
};

function PieChartCard({ labels = [], name, series = [] }: Props) {
  return (
    <>
      <div className="sales-container">
        <h2 className="sales-quantity">R$ 746.484,00</h2>
        <span className="sales-quantity-label">Total de vendas</span>
      </div>

      <div className="pie-chart-card">
        <ReactApexChart
          options={buildPieChartConfig(labels, name)}
          type="donut"
          width="400"
          height="400"
          series={series}
        />
      </div>
    </>
  );
}

export default PieChartCard;
