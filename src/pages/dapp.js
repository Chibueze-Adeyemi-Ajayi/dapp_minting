import { useState } from "react";
import Section1 from "../components/apy-tvl";
import Footer from "../components/footer";
import Payouts from "../components/payouts";

const Dapp = () => {
    return (
        <section className="pt-28 space-y-4 w-full h-full overflow-x-hidden overflow-y-auto">
            <Section1 />
            <Payouts />
            <Footer />
        </section>
    );
}

export default Dapp;