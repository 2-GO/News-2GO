'use client'

import { categories } from '../constants'
import { usePathname } from "next/navigation"; 
import NavLink from './NavLink';



export default function NavLinks() {
    const pathname= usePathname();

    const isActive = (path: string) => {
        return pathname?.split('/').pop() === path;
        //splits the path into arrays and pops the last value i.e business and compares to the path, if it matches it creates an effect that adds "/news/business to the url"
    }
  return (
    <nav className='grid grid-cols-4 md:grid-cols-7 text-xs md:text-sm gap-4 pb-10 mx-auto border-b'>
        {categories.map((category) => (
            <NavLink key={category} category={category} isActive={isActive(category)} />
        ))}
    </nav>
  );
}