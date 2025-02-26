import { isInsideEditor } from "@dotcms/client";
import { DotcmsLayout } from "@dotcms/react";

import useDotCMS from "./hook/useDotCMS";
import Banner from "./content-types/Banner";
import Header from "./components/Header";
import Footer from "./components/Footer";

import "../client";

const MyPage = ({ initialPageAsset, pathname }) => {
  const { pageAsset } = useDotCMS(initialPageAsset);

  return (
    <div className="flex flex-col gap-6 min-h-screen bg-slate-200">
      {pageAsset?.layout.header && <Header />}
      <main className="container m-auto">
        <DotcmsLayout
          pageContext={{
            pageAsset,
            components: {
              Banner: Banner,
            },
            isInsideEditor: isInsideEditor(),
          }}
          config={{ pathname }}
        />
      </main>
      {pageAsset?.layout.footer && <Footer />}
    </div>
  );
};

export default MyPage;
