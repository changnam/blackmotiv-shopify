export default function Navbar(){
    return (
        <nav className="flex container ">
            <button className="flex-none">햄버거아이콘</button>
                <ul className="flex-auto flex flex-row gap-x-4 px-4">
                    <li className="flex-none ml-auto">Home</li>
                    <li className="flex-none">About</li>
                </ul>                
        </nav> 
    )
}