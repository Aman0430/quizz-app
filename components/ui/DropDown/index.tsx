import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DropOptions() {
  return (
    <section className="flex justify-evenly items-center py-5">
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white flex outline-none justify-between w-full px-10 py-2 rounded-lg shadow-md bg-slate-700">
            Category
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>General Knowledge</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Entertainment: Books</DropdownMenuItem>
            <DropdownMenuItem>Entertainment: Film</DropdownMenuItem>
            <DropdownMenuItem>Entertainment: Music</DropdownMenuItem>
            <DropdownMenuItem>
              Entertainment: Musicals & Theatres
            </DropdownMenuItem>
            <DropdownMenuItem>Entertainment: Television</DropdownMenuItem>
            <DropdownMenuItem>Entertainment: Video Games</DropdownMenuItem>
            <DropdownMenuItem>Entertainment: Board Games</DropdownMenuItem>
            <DropdownMenuItem>Science & Natures</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white flex outline-none justify-between w-full px-10 py-2 rounded-lg shadow-md bg-slate-700">
            Level
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="px-7 py-4 w-1/3 mx-4">
        <DropdownMenu>
          <DropdownMenuTrigger className="text-white flex outline-none justify-between w-full px-10 py-2 rounded-lg shadow-md bg-slate-700">
            Type
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Profile</DropdownMenuItem>
            <DropdownMenuItem>Billing</DropdownMenuItem>
            <DropdownMenuItem>Team</DropdownMenuItem>
            <DropdownMenuItem>Subscription</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </section>
  );
}
