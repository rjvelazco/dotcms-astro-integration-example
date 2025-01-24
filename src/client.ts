import { DotCmsClient } from "@dotcms/client";

export const client = DotCmsClient.init({
  dotcmsUrl: import.meta.env.PUBLIC_DOTCMS_HOST,
  authToken: import.meta.env.PUBLIC_DOTCMS_AUTH_TOKEN,
  siteId: import.meta.env.PUBLIC_DOTCMS_SITE_ID
});