export const teaser = {
    title: 'This is a headline',
    date: '1983-14-01 11:00:00',
    url: {
        path: '#'
    }
};

export const teaserWithThumbnail = Object.assign({}, teaser, {
    thumbnail: {
        alt: 'A placeholder image',
        image: {
            url: 'https://via.placeholder.com/100x100',
            width: 100,
            height: 100
        }
    }
});
