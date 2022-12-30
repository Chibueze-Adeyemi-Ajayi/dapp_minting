import Section1 from "../components/apy-tvl";
import Balance from "../components/balance";
import Footer from "../components/footer";

const Dashboard = () => {
    return (
        <section className="pt-28 space-y-4 w-full h-full overflow-y-auto">
            <Balance />
            <Section1 /> <br></br><br></br>
            <Footer />
        </section>
    );
}

export default Dashboard;