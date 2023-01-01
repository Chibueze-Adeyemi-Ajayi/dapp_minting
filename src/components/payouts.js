// displaying application payouts

const Payout = () => {
    return (
        <div className="w-full border-b-1 border-black/30 font-light     items-center h-fit grid grid-cols-3">
            <font className="w-full mx-auto text-center h-fit">Jan. 5, 22</font>
            <font className="w-full mx-auto text-center h-fit">25.5USDT</font>
            <font className="w-full mx-auto text-center h-fit">0xXXXXXXXXXXXXXXXXXXXXX</font>
        </div>
    )
}

const Payouts = () => {
    return (
        <div className="md:p-24 p-6">
            <section className="w-full h-fit flex flex-col space-y-1 bg-white/75 rounded-md p-3">
                <div className="w-full border-b-2 pb-2 border-black/80 font-semibold items-center h-fit grid grid-cols-3">
                    <font className="w-full mx-auto text-center h-fit">Payout Date, UTC</font>
                    <font className="w-full mx-auto text-center h-fit">Daily Profit</font>
                    <font className="w-full mx-auto text-center h-fit">Contract Address</font>
                </div> <br />
                <Payout/>
                <Payout/>
                <Payout/>
            </section>
        </div>
        
    );
}

export default Payouts;
