const Balance = () => {
    return (
        <section className="w-full px-24 pt-24 h-fit grid grid-cols-2 gap-4">
            <div className="w-full h-fit p-6 bg-white/75 rounded-md flex flex-col space-y-4">
                <h1 className="text-xl grid grid-cols-2 text-black font-semibold">
                    <font>Balance</font>
                </h1>
                <hr className="w-full h-1 border-0 bg-black/80"></hr> <br></br>
                <font className="text-5xl text-center text-black font-semibold">$0</font> <br></br> <br></br>
                <marquee className="uppercase font-bold w-full h-fit p-2 bg-black/80 text-white/75">Total Balance</marquee>
            </div>
            <div className="w-full h-fit p-6 bg-white/75 rounded-md flex flex-col space-y-4">
                <h1 className="text-xl text-black font-semibold">Profit</h1>
                <hr className="w-full h-1 border-0 bg-black/80"></hr> <br></br> 
                <font className="text-5xl text-center text-black font-semibold">$0</font> <br></br><br></br>
                <marquee className="uppercase font-bold w-full h-fit p-2 bg-black/80 text-white/75">Total profit</marquee>
            </div>
        </section>
    );
}

export default Balance;