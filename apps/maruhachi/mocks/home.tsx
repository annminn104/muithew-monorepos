interface ISlide {
  key: React.Key;
  subtitle: string;
  title: string;
  description: string;
  button: string;
}

type IHomeBanner = { slide: Array<ISlide> };

export const homeBannerMock: IHomeBanner = {
  slide: [
    {
      key: '1',
      subtitle: 'subtitle 1',
      title: 'Welcome to Maruhachinousan 1',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam voluptatibus animi nesciunt deleniti.',
      button: 'Button'
    },
    {
      key: '2',
      subtitle: 'subtitle 2',
      title: 'Welcome to Maruhachinousan 2',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae ipsam voluptatibus animi nesciunt deleniti.',
      button: 'Button'
    }
  ]
};
