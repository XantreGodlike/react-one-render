import { hookScope, withOneRender } from "@one-render/way";
import { useState } from "react";
import { useTodoQuery } from "../hooks/useTodoQuery";

export const Swr = withOneRender(() => {
  hookScope(() => {
    useState();
  });

  hookScope(() => {
    console.log(useTodoQuery().data);
  });
  return null;
});
