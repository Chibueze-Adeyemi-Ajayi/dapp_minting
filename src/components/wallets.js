const Wallets = (props) => {
    return (
        <div className="w-full h-full fixed -top-4 left-0 backdrop-blur z-50">
            <div className="w-full h-full flex flex-col">
                <section className="w-[500px] h-fit p-6 bg-white/75 rounded-md mx-auto my-auto flex flex-col space-y-3">
                    <h1 className="w-full text-xl font-semibold text-black/80 pb-3 border-b-2 border-black/80 flex flex-row">
                        <font className="w-full">Choose Wallet</font><font className="cursor-pointer" onClick={() => {
                            props.wallet_func(false);
                        }}>x</font>
                    </h1>
                    <font className="w-full rounded-md cursor-pointer transition-all transform duration-200 hover:bg-black/25 px-4 flex flex-row h-fit py-3 border-b-1 border-gray-100">
                        <span>MetaMask</span>
                    </font>
                    <font className="w-full rounded-md cursor-pointer transition-all transform duration-200 hover:bg-black/25 px-4 flex flex-row h-fit py-3 border-b-1 border-gray-100">
                        <span>TrustWallet</span>
                    </font>
                </section>
            </div>
        </div>
    );
}

export default Wallets;