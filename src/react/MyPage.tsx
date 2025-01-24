import { isInsideEditor } from "@dotcms/client";
import { DotcmsLayout } from "@dotcms/react";

import "../client";

const MyPage = ({ initialPageAsset, pathname}) => {

  const pageAsset = initialPageAsset;

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-slate-200">
      <main className="container m-auto">
        <DotcmsLayout
          pageContext={{
            pageAsset,
            components: {},
            isInsideEditor: isInsideEditor(),
          }}
          config={{ pathname}}
        />
      </main>
    </div>
  );
};

export default MyPage;
