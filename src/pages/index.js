import Banner from "../components/banner";
import Header from "../components/header";
const Index = () => {
    return (
        <>
            <div className={"w-full bg-cover flex flex-col h-full bg-[url('https://t4.ftcdn.net/jpg/04/23/18/83/360_F_423188362_B6iLBKbMypBLPHT5VzOF9KtfQjpaUvLV.jpg')]"}>
                {/* heading */}
                <Header/>
                <Banner />
            </div>
        </>
    );
}

export default Index;