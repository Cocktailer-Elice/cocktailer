export const slice20 = (item: string) => {
    return (
        item.length <= 15
            ? item
            : String(item).slice(0, 15).concat('...')
    );
};

export const trimDate = (createdAt: Date) => {
    return String(createdAt).split('T')[0].replaceAll('-', '.');
};
