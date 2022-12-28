import { useState } from "react";
import Section1 from "../components/apy-tvl";
import Footer from "../components/footer";
import Payouts from "../components/payouts";

const Dapp = () => {
    return (
        <section className="pt-28 space-y-4 w-full h-full overflow-x-hidden overflow-y-auto">
            {/* section 1 */}
            <Section1 />
            {/* pay out section */}
            <Payouts />
            {/* footer section */}
            <Footer />
        </section>
    );
}

export default Dapp;