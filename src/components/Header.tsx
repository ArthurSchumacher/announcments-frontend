import { Button } from "@nextui-org/react";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="bg-danger text-neutral-50 navbar top-0 z-10 w-full">
      <div className="container flex items-center justify-between p-5 mx-auto">
        <div>
          <Link href={"/"} className="uppercase text-xl font-medium">
            Garotas Online
          </Link>
        </div>

        <div>
          <Button
            href="#"
            variant="ghost"
            as={Link}
            className="text-white"
            color="warning"
            size="lg"
            radius="md"
          >
            Anuncie
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Header;
