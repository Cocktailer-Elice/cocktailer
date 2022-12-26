export const slice20 = (item: string) => {
    return (
        item.length <= 10
            ? item
            : String(item).slice(0, 10).concat('...')
    );
};

export const trimDate = (createdAt: Date) => {
    return String(createdAt).split('T')[0].replaceAll('-', '.');
};
