import classNames from "classnames";
import { ClassNamesFn } from "classnames/types";

const bemClassNames = (baseName: string): ClassNamesFn => {
  return (...classes): string => {
    if (classes.length === 0) {
      return baseName;
    }
    return (
      `${baseName}-` + classNames(classes).split(" ").join(` ${baseName}-`)
    );
  };
};

export default bemClassNames;
