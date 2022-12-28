import images from './images'

const features = [
  {
    image: images.tab1,
    title: 'Bookmark in one click',
    description:
      'Organize your bookmarks however you like. Our simple drag-and-drop inteface gives you complete control over how you manage your favourite sites.',
  },
  {
    image: images.tab2,
    title: 'Intelligent search',
    description:
      'Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.',
  },
  {
    image: images.tab3,
    title: 'Share your bookmarks',
    description:
      'Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.',
  },
]

const browsers = [
  {
    image: images.logoChrome,
    title: 'Add to Chrome',
    description: 'Minimum version 62',
  },
  {
    image: images.logoFirefox,
    title: 'Add to Firefox',
    description: 'Minimum version 55',
  },
  {
    image: images.logoOpera,
    title: 'Add to Opera',
    description: 'Minimum version 46',
  },
]

export default { features, browsers }
