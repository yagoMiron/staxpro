import Link from "next/link";
import Logo from "../Logo";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

const Header = () => {
  return (
    <div className="flex items-center justify-between px-12 py-4 absolute w-full z-10">
      <Logo />
      <NavigationMenu>
        <NavigationMenuList className="flex-wrap">
          <NavigationMenuItem>
            <NavigationMenuTrigger>Soluções</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-96 flex flex-col">
                <Link
                  href={"/"}
                  className="p-3 hover:bg-meu-azul-600 hover:text-white font-bold"
                >
                  Bitrix24
                </Link>
                <Link
                  href={"/"}
                  className="p-3 hover:bg-meu-azul-600 hover:text-white font-bold"
                >
                  Planos
                </Link>
                <Link
                  href={"/"}
                  className="p-3 hover:bg-meu-azul-600 hover:text-white font-bold"
                >
                  Suporte
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={"/chatapp-stax"}>ChatApp Stax</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <NavigationMenuTrigger>Treinamentos</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="w-96 flex flex-col">
                <Link
                  href={"/"}
                  className="p-3 hover:bg-meu-azul-600 hover:text-white font-bold"
                >
                  Cursos
                </Link>
                <Link
                  href={"/"}
                  className="p-3 hover:bg-meu-azul-600 hover:text-white font-bold"
                >
                  Login Treinamentos
                </Link>
                <Link
                  href={"/"}
                  className="p-3 hover:bg-meu-azul-600 hover:text-white font-bold"
                >
                  StaxPro Comunidade
                </Link>
              </div>
            </NavigationMenuContent>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
export default Header;
