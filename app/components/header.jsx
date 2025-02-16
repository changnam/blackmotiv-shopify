import Announcement from "@/app/components/announcement";
import Navbar from "@/app/components/navbar";

export default function Header(){
    return (
        <header>
            <Announcement />
            <Navbar />
        </header>
    )
}