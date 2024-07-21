import Image from "next/image";
import Link from "next/link";
import { Button } from "@mui/material";

export default function NavBar() {
  return (
    <>
      <header class="th-header header-layout7">
        <div class="sticky-wrapper">
            <div class="menu-area">
                <div class="container th-container">
                    <div className="flex">
                        <div class="col-auto">
                            <div class="header-logo">
                                <a href="index.html">
                                    <Image src={'/Logo.png'} alt="Logo" width={100} height={100}/>
                                </a>
                            </div>
                        </div>
                        <div class="col-auto">
                            <nav class="main-menu d-none d-lg-inline-block">
                                <ul className="flex gap-4">
                                    <Link class="menu-item-has-children" href={'index.html'}>
                                        Home
                                    </Link>
                                    <Link class="menu-item-has-children" href={'#'}>
                                        Menu
                                    </Link>
                                    <Link class="menu-item-has-children" href={'#'}>
                                        Order Online
                                    </Link>
                                    <Link class="menu-item-has-children" href={'#'}>
                                        About Us
                                    </Link>
                                    <Link href={'contact.html'}>
                                        Contact Us
                                    </Link>
                                </ul>
                            </nav>
                        </div>
                        <div class="col-auto">
                            <div class="header-button">
                                <button type="button" class="simple-icon searchBoxToggler"><i class="far fa-search"></i></button>
                                <button type="button" class="simple-icon sideMenuToggler">
                                    <i class="far fa-cart-shopping"></i>
                                    <span class="badge">5</span>
                                </button>
                                <a href="contact.html" class="th-btn rounded-2 style3">Book a Table<i class="fa-solid fa-arrow-right ms-2"></i></a>
                                <button type="button" class="th-menu-toggle d-inline-block d-lg-none"><i class="far fa-bars"></i></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    </>
  );
}
