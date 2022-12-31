import { useState } from "react";
import Banner from "../components/banner";
import Header from "../components/header";
import Wallets from "../components/wallets";
import Dapp from "./dapp";
import Dashboard from "./dashboard";
const Index = () => {
    const [page_var, page_func] = useState("home")
    const pages = {
        "home": <Banner app={page_func}/>, "dapp": <Dapp app={page_func}/>,
        "dashboard": <Dashboard app={page_func} />
    }
    const [wallet_var, wallet_func] = useState(false);
    return (
        <>
            <div className={"w-full bg-cover overflow-hidden flex flex-col h-full bg-[url('https://t4.ftcdn.net/jpg/04/23/18/83/360_F_423188362_B6iLBKbMypBLPHT5VzOF9KtfQjpaUvLV.jpg')]"}>
                {/* heading */}
                <Header app={page_func} wallet_func={wallet_func} app_var={page_var}/>
                {!wallet_var? <></> : <Wallets app={page_func} wallet_func={wallet_func}/>}
                {pages[page_var]}
            </div>
        </>
    );
}

export default Index;