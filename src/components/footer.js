import Socials from "./social-handles";

const Footer = () => {
    return <footer className="w-full flex mt-2 border-t-2 border-white/75 h-fit p-6 bg-black/80">
        <Socials/>
        <font className="w-fit mx-auto text-center font-semibold text-white/75">
           Project Name &copy; {new Date().getFullYear()}
        </font>
    </footer>
}

export default Footer;
