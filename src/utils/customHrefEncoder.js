export const encodeNameForHref = (title) => {
    return title.split(' ').join('_');
}

export const decodeNameForHref = (encodedTitle) => {
    return encodedTitle.split('_').join(' ');
}