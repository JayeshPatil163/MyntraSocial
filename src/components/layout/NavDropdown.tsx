
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
  categories: Category[];
}

const NavDropdown = ({ categories }: NavDropdownProps) => {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {categories.map((category) => (
          <NavigationMenuItem key={category.name}>
            <NavigationMenuTrigger className="bg-transparent hover:bg-transparent focus:bg-transparent">
              {category.name}
            </NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-3 p-4 w-[90vw] max-w-screen-xl">
                {category.subcategories.map((subcategory, idx) => (
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
