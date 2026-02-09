import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuContent,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link, { LinkProps } from "next/link";

import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Logo from "../Logo";

const Header = () => {
  return (
    <header className="absolute top-0 left-0 z-10 w-full px-6 py-4 md:px-12">
      <div className="flex items-center justify-between">
        <Logo />

        {/* DESKTOP MENU */}
        <div className="hidden md:block">
          <DesktopMenu />
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  );
};

export default Header;

const DesktopMenu = () => {
  return (
    <NavigationMenu>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuTrigger>Soluções</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-96 flex flex-col">
              <MenuLink href="/">Bitrix24</MenuLink>
              <MenuLink href="/">Planos</MenuLink>
              <MenuLink href="/">Suporte</MenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/chatapp-stax"
            className={navigationMenuTriggerStyle()}
          >
            ChatApp Stax
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger>Treinamentos</NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="w-96 flex flex-col">
              <MenuLink href="/">Cursos</MenuLink>
              <MenuLink href="/">Login Treinamentos</MenuLink>
              <MenuLink href="/">StaxPro Comunidade</MenuLink>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
};

const MobileMenu = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="w-14 h-14">
          <Menu size={36} />
        </Button>
      </SheetTrigger>

      <SheetContent
        side="right"
        className="w-75 sm:w-87.5 border-none bg-meu-azul-800"
      >
        <SheetTitle>Menu de navegação</SheetTitle>
        <SheetDescription>Menu principal do site</SheetDescription>
        <nav className="flex flex-col gap-6 mt-10">
          <MobileSection title="Soluções">
            <MobileLink href="/">Bitrix24</MobileLink>
            <MobileLink href="/">Planos</MobileLink>
            <MobileLink href="/">Suporte</MobileLink>
          </MobileSection>

          <MobileLink href="/chatapp-stax" strong>
            ChatApp Stax
          </MobileLink>

          <MobileSection title="Treinamentos">
            <MobileLink href="/">Cursos</MobileLink>
            <MobileLink href="/">Login Treinamentos</MobileLink>
            <MobileLink href="/">StaxPro Comunidade</MobileLink>
          </MobileSection>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

interface MenuLinkProps {
  href: LinkProps["href"];
  children: React.ReactNode;
}

const MenuLink = ({ href, children }: MenuLinkProps) => (
  <Link
    href={href}
    className="p-3 font-bold hover:bg-meu-azul-600 hover:text-white transition-colors"
  >
    {children}
  </Link>
);

interface MobileSectionProps {
  title: string;
  children: React.ReactNode;
}

const MobileSection = ({ title, children }: MobileSectionProps) => (
  <div className="flex flex-col gap-2">
    <span className="text-sm font-semibold text-muted-foreground">{title}</span>
    {children}
  </div>
);

interface MobileLinkProps {
  href: LinkProps["href"];
  children: React.ReactNode;
  strong?: boolean;
}

const MobileLink = ({ href, children, strong }: MobileLinkProps) => (
  <Link
    href={href}
    className={`text-lg ${
      strong ? "font-bold" : "font-medium"
    } hover:text-meu-azul-600 transition-colors`}
  >
    {children}
  </Link>
);
