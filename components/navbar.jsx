// import {ShopingCart} from "@heroicons/react/24/outline";

export default function Navbar(){
    return (
        <nav className="flex  ">
            <button className="flex-none md:hidden">햄버거아이콘</button>
            <ul className="flex-auto flex flex-row gap-x-4 px-4">
                <li className="flex-none ml-auto">Home</li>
                <li className="flex-none">About</li>
            </ul>       
            {/*<button className="flex-none "><ShopingCart /></button>*/}         
        </nav> 
    )
}
