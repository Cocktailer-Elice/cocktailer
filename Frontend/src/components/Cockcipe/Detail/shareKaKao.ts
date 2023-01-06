export const shareKakao = (
  route: string,
  img: string,
  name: string,
  content: string,
) => {
  const kakao = window.Kakao;

  if (window.Kakao) {
    if (!kakao.isInitialized()) {
      window.Kakao.init(import.meta.env.VITE_APP_KAKAO);
    }

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
