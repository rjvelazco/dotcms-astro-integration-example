import { useEffect } from 'react';

const MyPage= ({ pageAsset }) => {

    useEffect(() => {
        console.log("DOTCMS PAGE: ", pageAsset);
    }, [])

  return <div>MY EMPTY ASTRO PAGE</div>
};

export default MyPage;