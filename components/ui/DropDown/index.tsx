"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useEffect, useState } from "react";
import data from "@/lib/categories.json";
import { useQuiz } from "@/app/store";
import { ChevronDown, Check, Circle } from "lucide-react";

type CategoryType = {
  id: number;
  name: string;
};

export default function DropOptions() {
  const categories: CategoryType[] = data.trivia_categories;

  const config = useQuiz((state: any) => state.config);
  const addCategory = useQuiz((state: any) => state.addCategory);
  const addLevel = useQuiz((state: any) => state.addLevel);
  const addType = useQuiz((state: any) => state.addType);

  return (
    <>
      <section className="flex flex-col lg:flex-row gap-3 justify-evenly text-white items-center py-5">
        {/* Shadcdn */}
        <div className="px-7 py-4 bg-slate-700 rounded-xl w-1/2 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.category.name ? config.category.name : "SELECT CATEGORY"}
              <ChevronDown />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent className="overflow-y-scroll">
              <DropdownMenuLabel>
                {config.category.name
                  ? config.category.name
                  : "SELECT CATEGORY"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {categories.map((category) => {
                return (
                  <DropdownMenuItem
                    key={category.name}
                    onClick={() => addCategory(category.id, category.name)}
                  >
                    {category.name}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Shadcdn */}
        <div className="px-7 py-4 bg-slate-700 rounded-xl w-1/2 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.level ? config.level : "SELECT LEVEL"}
              <ChevronDown />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {config.level ? config.level : "SELECT LEVEL"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["easy", "medium", "hard"].map((e) => {
                return (
                  <DropdownMenuItem key={e} onClick={() => addLevel(e)}>
                    {e}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
        {/* Shadcdn */}
        <div className="px-7 py-4 bg-slate-700 rounded-xl w-1/2 mx-4">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex outline-none justify-between w-full">
              {config.type ? config.type : "SELECT TYPE"} <ChevronDown />{" "}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>
                {config.type ? config.type : "SELECT TYPE"}
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {["boolean", "multiple"].map((e) => {
                return (
                  <DropdownMenuItem key={e} onClick={() => addType(e)}>
                    {e}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </section>
    </>
  );
}
