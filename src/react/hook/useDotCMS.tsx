import { isInsideEditor } from "@dotcms/client";
import { useEffect, useState } from "react";
import { client } from "../../client";

const useDotCMS = (initialPageAsset) => {
  const [pageAsset, setPageAsset] = useState(initialPageAsset);

  useEffect(() => {
    // If we are not inside dotCMS, we won't listen to the edito
    if (!isInsideEditor()) {
      return;
    }

    // The editor will return the PageAsset everytime we do a change inside dotCMS
    client.editor.on("changes", (page) => setPageAsset(page));

    return;
  }, []);

  return { pageAsset };
};

export default useDotCMS;
