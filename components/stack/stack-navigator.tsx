"use client";
import "./styles.css";
import Link from "next/link";
import { Fragment } from "react";
import { stackList } from "./stack-list";
import { michromaFont } from "@/app/font";
import { usePathname } from "next/navigation";
import Typography from "../ui/Typography/component";

export function StackNavigator() {
  const pathname = usePathname();
  return (
    <div className="nav-wrapper">
      <Typography>Components</Typography>
      {stackList.map((stack, index) => {
        if (stack.type === "root") {
          return (
            <div className="root-stack" key={index}>
              {stack.rootName}
            </div>
          );
        } else if (stack.type === "group") {
          return (
            <Fragment key={index}>
              <div className="group-stack">
                <div className="square" />
                <Typography className={`group ${michromaFont.className}`}>
                  {stack.groupName?.toUpperCase()}
                </Typography>
              </div>
              {(stack?.items || []).map((gI, id) => (
                <Link
                  href={gI.href}
                  key={id}
                  className={
                    pathname === gI.href ? "item-stack-active" : "item-stack"
                  }
                >
                  <Typography
                    className={gI.href.includes("/") ? "doneDemo" : ""}
                  >
                    {gI.itemName}
                  </Typography>
                </Link>
              ))}
            </Fragment>
          );
        }
      })}
    </div>
  );
}
