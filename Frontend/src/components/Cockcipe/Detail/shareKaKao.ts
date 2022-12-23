export const shareKakao = (
  route: string,
  img: string,
  name: string,
  content: string,
) => {
  const kakao = window.Kakao;
  console.log(route, img, name, content);
  if (window.Kakao) {
    window.Kakao.init(import.meta.env.VITE_APP_KAKAO);
    console.log(kakao.isInitialized());

    kakao.Share.sendDefault({
      objectType: 'feed',
      content: {
        title: name,
        description: content,
        imageUrl: img,
        link: {
          webUrl: route,
        },
      },
      buttons: [
        {
          title: '자세히 보기',
          link: {
            webUrl: route,
          },
        },
      ],
    });
  }
};
