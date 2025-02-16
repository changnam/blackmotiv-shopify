import { getMenu } from "@/app/lib/shopify";

export default async function Navbar(){
    const menu = await getMenu("blackmotiv-frontstore-menu");
    console.log(menu);
    return (
        <nav>nav</nav>
    )
}