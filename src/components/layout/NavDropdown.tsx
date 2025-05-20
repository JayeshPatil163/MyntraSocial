
import { Link } from "react-router-dom";
import { Category } from "@/lib/navigationData";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { cn } from "@/lib/utils";

interface NavDropdownProps {
  category: Category[];
}

const NavDropdown = ({ category }: NavDropdownProps) => {
  return (
    <NavigationMenu className="mr-20 hidden md:flex">
      <NavigationMenuList>
        {category.map((category) => (
          <NavigationMenuItem key={category.name}>
            <NavigationMenuTrigger className={cn(navigationMenuTriggerStyle())}>
            <Link to={category.path} className="text-sm text-gray-700 px-4">
              {category.name}
            </Link>
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 w-[90vw] max-w-screen-xl">
                {category.subcategory.map((subcategory, idx) => (
                  <div key={idx} className="p-3">
                    {subcategory.title && (
                      <h3 className="font-medium text-pink-600 mb-2 text-sm">
                        {subcategory.title}
                      </h3>
                    )}
                    <ul className="space-y-2">
                      {subcategory.items.map((item) => (
                        <li key={item.name}>
                          <NavigationMenuLink asChild>
                            <Link
                              to={item.path}
                              className="text-sm text-gray-700 hover:text-pink-600 hover:underline block"
                            >
                              {item.name}
                            </Link>
                          </NavigationMenuLink>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export default NavDropdown;
