import Chart1 from "./components/chart1.component";
import Chart2 from "./components/chart2.component";
import Date from "./components/date.component";

const Dashboard = () => {
    return (
        <div>
            <div className="flex gap-4">
                <h1 className="text-slate-500 text-4xl">Dashboard</h1>
                <Date />
            </div>
            <div className="flex gap-4 justify-between">
                <div className="w-1/2">
                    <Chart1 />
                </div>
                <div className="w-1/2">
                    <Chart2 />
                </div>
            </div>
        </div>
    )
};

export default Dashboard;