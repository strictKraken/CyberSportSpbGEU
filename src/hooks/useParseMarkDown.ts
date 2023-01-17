import { useState } from "react";
import { remark } from "remark";
import html from "remark-html";

type useParseMarkDownT = {};

const useParseMarkDown = (content: any) => {
  const [contentHtml, setContentHtml] = useState<string>();

  (async () => {
    const processedContent = await remark().use(html).process(content);
    setContentHtml(processedContent.toString());
  })();

  return { contentHtml };
};

export default useParseMarkDown;
