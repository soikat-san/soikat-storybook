import "./styles.css";
import { Fragment } from "react";
import { stackList } from "./stack-list";
import { michromaFont } from "@/app/font";

export function StackNavigator() {
  return (
    <div className="nav-wrapper">
      <p>Components</p>
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
                <p className={`group ${michromaFont.className}`}>
                  {stack.groupName?.toUpperCase()}
                </p>
              </div>
              {(stack?.items || []).map((g, id) => (
                <div className="item-stack" key={id}>
                  {g.itemName}
                </div>
              ))}
            </Fragment>
          );
        }
      })}
    </div>
  );
}
